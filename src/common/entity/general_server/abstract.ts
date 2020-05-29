const path = require('path');
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;

module.exports = class {
    constructor(serverHost, serverPort, env) {
        this._serverHost = serverHost;
        this._serverPort = serverPort;
        this._env = env;
    }

    start() {
        throw new Error('override this method please.');
    }

    initLogger() {
        throw new Error('override this method please.');
    }

    async initDependence(servicesName, regHost = this._regHost, regPort = this._regPort) {
        this._regHost = regHost;
        this._regPort = regPort;
        global.Service = global.Service || {};
        let _serviceRoot = path.join(PROJECT_ROOT, 'service');
        await Promise.all(
            servicesName.map(async serviceName => {
                let instanceName = Common.Module.parseServerName(serviceName);
                Service[instanceName] = await new Common.Entity.GeneralServiceClient(regHost, regPort, serviceName, path.join(_serviceRoot, serviceName, 'schema')).connect();
                if (fs.existsSync(path.join(PROJECT_ROOT, 'service', serviceName, 'client'))) {
                    //在client包裹上该服务提供的语义化的方法
                    let clientWrapper = require(path.join(PROJECT_ROOT, "service", serviceName, "client"));
                    Service[instanceName] = clientWrapper(
                        Service[instanceName]
                    );
                }
            })
        ).catch(err => this.error(`connect to service by registry service failed [regHost: ${regHost}, _regPort: ${regPort}], nested error: ${err}`));
        this.info('init dependence');
    }

    initORM(objectPath, relationPath, serviceOrmName = undefined, serviceOrmPath = undefined) {
        global.ORM = require('@qtk/orm-framework');
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

    initConfigClient(host, port, timeout = 3) {
        const eventEmitter = new EventEmitter();
        const ConfigClient = require('@qtk/config-service').Client;
        let configClient = new ConfigClient({ host, port });
        return new Promise((resolve, reject) => {
            configClient.on('update', () => {
                this.info(`update config success [host: ${host}, host: ${port}]`);
                global.Config = configClient.config;
                eventEmitter.emit('update', configClient.config);
            });
            configClient.on('ready', () => {
                this.info(`init config success [host: ${host}, host: ${port}]`);
                global.Config = configClient.config;
                resolve(eventEmitter);
            });
            setTimeout(() => {
                reject(`connect config service timeout [host: ${host}, host: ${port}]`);
            }, timeout * 1000);
        }).catch(err => this.error(`connect to config service failed, nested error: ${err}`));
    }

    async initNotificationCenter({ connParams, serviceName, onError, onClose, subscriberDir = "", scope = "silver_ins" }) {
        const _Notification = require('@qtk/reliable-notification-service');// FIXME: require放外层
        let notification = new _Notification(connParams, scope, `core_${serviceName}`);

        // eslint-disable-next-line no-async-promise-executor
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
                            await require(`${subscriberDir}/${event}/${handler}`)(
                                data
                            ),
                        handler
                    );
                }
            }
        }

        global.NotificationCenter = {
            publish: async (eventName, data) => notification.publish(eventName, data)
        };
        this.info('init notification');
    }

    info(value) {
        console.log(value);
    }

    error(value) {
        console.log(value);
    }

    async initInside(insides = []) {
        global.Inside = {};
        for (let projectName of insides) {
            const instanceName = projectName
                .replace("silver-ins-", "")
                .replace(/^[a-z]|\.[a-z]|_[a-z]|-[a-z]/g, match =>
                    match.replace(/\.|_|-/, "").toUpperCase()
                );
            Inside[
                instanceName
            ] = await require(`@${projectName}/inside-client`)//FIXME: 建议放外层
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
    async initOuter(outerName, servicesName, regHost = "0.0.0.0", regPort) {
        if (regPort === undefined) regPort = outerName === 'core' ? 2371 : 2731;
        const InstanceOuter = Common.Module.parseServerName(outerName);
        global[InstanceOuter] = {};
        await Promise.all(
            servicesName.map(async serviceName => {
                let instance = await new Common.Entity.GeneralServiceClient(
                    regHost,
                    regPort,
                    serviceName
                ).connect();

                //在client包裹上该服务提供的语义化的方法
                let clientWrapper = require(`${PROJECT_ROOT}/lib/${outerName}_service_client/${serviceName}`);
                let name = Common.Module.parseServerName(serviceName);
                global[InstanceOuter][name] = clientWrapper(instance);
            })
        ).catch(err =>
            this.error(
                `connect to ${outerName} service by registry service failed [regHost: ${regHost}, _regPort: ${regPort}], nested error: ${err}`
            )
        );
        this.info(`init ${outerName} success`);
    }
};
