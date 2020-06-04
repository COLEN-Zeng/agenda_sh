import Common = require('../..');
import * as path from 'path';
import * as fs from 'fs';
const EventEmitter = require('events').EventEmitter;

export default class {
    _serverHost: any;
    _serverPort: any;
    _env: any;
    _regHost: any;
    _regPort: any;
    constructor(serverHost: string, serverPort: string, env: string) {
        this._serverHost = serverHost;
        this._serverPort = serverPort;
        this._env = env;
    }

    async start(
        router: (this: unknown) => void,
        every: (this: unknown) => Promise<void>
    ): Promise<void> {
        throw new Error('override this method please.');
    }

    initLogger(): void {
        throw new Error('override this method please.');
    }

    // async initDependence(
    //     servicesName: {
    //         map: (arg0: (serviceName: any) => Promise<void>) => readonly [unknown];
    //     },
    //     regHost = this._regHost, regPort = this._regPort
    // ): Promise<void> {
    //     this._regHost = regHost;
    //     this._regPort = regPort;
    //     (global as any as _global).Service = (global as any as _global).Service || {};
    //     const _serviceRoot = path.join(PROJECT_ROOT, 'service');
    //     await Promise.all(
    //         servicesName.map(async serviceName => {
    //             const instanceName = Common.Module.parseServerName(serviceName);
    //             Service[instanceName] = await new Common.Entity.GeneralServiceClient(
    //                 regHost, regPort, serviceName,
    //             ).connect();
    //             if (fs.existsSync(path.join(PROJECT_ROOT, 'service', serviceName, 'client'))) {
    //                 //在client包裹上该服务提供的语义化的方法
    //                 // eslint-disable-next-line @typescript-eslint/no-var-requires
    //                 const clientWrapper = require(
    //                     path.join(PROJECT_ROOT, "service", serviceName, "client")
    //                 );
    //                 Service[instanceName] = clientWrapper(
    //                     Service[instanceName]
    //                 );
    //             }
    //         })
    //     ).catch(err => this.error(
    //         `connect to service by registry service failed [regHost: ${regHost}, _regPort:
    //             ${regPort}], nested error: ${err}`));
    //     this.info('init dependence');
    // }

    initORM(
        objectPath: string, relationPath: string,
        serviceOrmName = undefined, serviceOrmPath = undefined
    ): void {
        (global as any as Global).ORM = require('@qtk/orm-framework');
        ORM.setup({
            objectSchemaPath: `${objectPath}/schema`,
            objectRouterPath: `${objectPath}/router/${this._env}`,
            relationSchemaPath: `${relationPath}/schema`,
            relationRouterPath: `${relationPath}/router/${this._env}`,
        });

        //增加语义的ORM
        if (serviceOrmName && serviceOrmPath) {
            global[serviceOrmName] = require(serviceOrmPath);
        }
        this.info('init orm');
    }

    initConfigClient(host: string, port: number, timeout = 3): Promise<unknown> {
        const eventEmitter = new EventEmitter();
        const ConfigClient = require('@qtk/config-service').Client;
        const configClient = new ConfigClient({ host, port });
        return new Promise((resolve, reject) => {
            configClient.on('update', () => {
                this.info(`update config success [host: ${host}, host: ${port}]`);
                (global as any as Global).Config = configClient.config;
                eventEmitter.emit('update', configClient.config);
            });
            configClient.on('ready', () => {
                this.info(`init config success [host: ${host}, host: ${port}]`);
                (global as any as Global).Config = configClient.config;
                resolve(eventEmitter);
            });
            setTimeout(() => {
                reject(`connect config service timeout [host: ${host}, host: ${port}]`);
            }, timeout * 1000);
        }).catch(err => this.error(`connect to config service failed, nested error: ${err}`));
    }

    async initNotificationCenter({
        connParams, serviceName, onError, onClose,
        subscriberDir = "", scope = "silver_ins"
    }): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const _Notification = require('@qtk/reliable-notification-service');
        const notification = new _Notification(connParams, scope, `core_${serviceName}`);

        await new Promise(async (resolve, reject) => {
            notification.once('error', (error) => {
                console.log(error);
                return reject(error);
            });
            notification.once('close', () => {
                console.log('rabbitMq close');
                return reject('rabbitMq close');
            });
            await notification.init();
            return resolve();
        });

        notification.on('error', (error) => onError(error));
        notification.on('close', () => onClose('rabbitMq close'));

        //寻找所有的订阅事件
        if (subscriberDir != "") {
            for (const event of fs.readdirSync(subscriberDir)) {
                if (!fs.statSync(`${subscriberDir}/${event}`).isDirectory()) {
                    continue;
                }

                for (const handler of fs.readdirSync(
                    `${subscriberDir}/${event}`
                )) {
                    if (
                        !fs
                            .statSync(`${subscriberDir}/${event}/${handler}`)
                            .isDirectory()
                    ) {
                        continue;
                    }
                    await notification.registrySubscriber(
                        event,
                        async data =>
                            // eslint-disable-next-line @typescript-eslint/no-var-requires
                            await require(`${subscriberDir}/${event}/${handler}`)(
                                data
                            ),
                        handler
                    );
                }
            }
        }

        (global as any as Global).NotificationCenter = {
            publish: async (eventName, data) => notification.publish(eventName, data)
        };
        this.info('init notification');
    }

    info(value: string): void {
        console.log(value);
    }

    error(value: string): void {
        console.log(value);
    }

    async initInside(insides = []): Promise<void> {
        (global as any as Global).Inside = {};
        for (const projectName of insides) {
            const instanceName = projectName
                .replace("silver-ins-", "")
                .replace(/^[a-z]|\.[a-z]|_[a-z]|-[a-z]/g, match =>
                    match.replace(/\.|_|-/, "").toUpperCase()
                );

            Inside[
                instanceName
            ] = await require(`@${projectName}/inside-client`)
                .getInstance()
                .catch(error =>
                    this.error(
                        `init inside [${projectName}] failed, nested error is ${error}`
                    )
                );
        }
        this.info('init inside');
    }

    /**
     * 实例化外部服务
     * @param {'core'|'h5'} outerName 外部服务名 Core|H5
     * @param {*} servicesName 服务名
     * @param {*} regHost
     * @param {*} regPort
     */
    async initOuter(
        outerName: 'core' | 'h5', servicesName: string[], regHost, regPort: number
    ): Promise<void> {
        if (regPort === undefined) regPort = outerName === 'core' ? 2371 : 2731;
        const InstanceOuter = Common.Module.parseServerName(outerName);
        global[InstanceOuter] = {};
        await Promise.all(
            servicesName.map(async serviceName => {
                const instance = await new Common.Entity.GeneralServiceClient(
                    regHost,
                    regPort,
                    serviceName
                ).connect();

                //在client包裹上该服务提供的语义化的方法
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const clientWrapper = require(
                    `${PROJECT_ROOT}/lib/${outerName}_service_client/${serviceName}`);
                const name = Common.Module.parseServerName(serviceName);
                global[InstanceOuter][name] = clientWrapper(instance);
            })
        ).catch(err =>
            this.error(
                `connect to ${outerName} service by registry service failed [regHost:
                    ${regHost}, _regPort: ${regPort}], nested error: ${err}`
            )
        );
        this.info(`init ${outerName} success`);
    }
}
