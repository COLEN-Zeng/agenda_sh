
import * as Agenda from 'agenda';
import * as AgendaSh from 'agendash';
import * as Express from 'express';
import * as Log4js from 'log4js';
import * as path from 'path';
import * as os from 'os';
import { _global } from '../../../_global';
import AbstractGeneralServer from './abstract';

export default class extends AbstractGeneralServer {
    _serverName: string;
    _dbHost: any;
    _dbPort: any;
    _dbDatabaseName: string;
    _server: any;
    Agenda: any;
    constructor(
        env: string, serverHost: string, serverPort: string, serverName = 'agenda',
        dbHost: string, dbPort: string, dbDatabaseName = 'agenda'
    ) {
        super(serverHost, serverPort, env);
        this._serverHost = serverHost;
        this._serverPort = serverPort;
        this._env = env;
        this._serverName = serverName;
        this._dbHost = dbHost;
        this._dbPort = dbPort;
        this._dbDatabaseName = dbDatabaseName;
    }

    async start(router, every): Promise<void> {
        this._server = Express();
        this.Agenda = new Agenda({
            db: {
                // FIXME: 密码登陆
                address: `mongodb://${this._dbHost}:${this._dbPort}/${this._dbDatabaseName}`,
                options: { useUnifiedTopology: true }
            },
            name: os.hostname + '-' + process.pid
        });

        await this.Agenda.start()
            .then(() => this.info('agenda start'))
            .catch((err: string) => { throw new Error(err); });

        router && router(this);
        every && await every(this);

        this._server.listen(this._serverPort, this._serverHost);
        this._server.use('', AgendaSh(this.Agenda, { title: os.hostname + '-' + process.pid }));

        this.Agenda.on('start', (job: { attrs: { name: any; }; }) => {
            console.log('Job %s starting', job.attrs.name);
        })
            .on('complete', (job: { attrs: { name: any; }; }) => {
                console.log(`Job ${job.attrs.name} finished`);
            })
            .on('success:send email', (job: { attrs: { data: { to: any; }; }; }) => {
                console.log(`Sent Email Successfully to ${job.attrs.data.to}`);
            })
            .on('fail:send email', (err: { message: any; }, _job: any) => {
                console.log(`Job failed with error: ${err.message}`);
            });
    }

    // 定义任务
    define(name: string, fun: () => void): void {
        Logger.debug(`init define: ${name}`);
        this.Agenda.define(name, fun);
    }

    // 定时任务
    async every(
        interval: string, names: string, data: object, options: { timezone: string }
    ): Promise<void> {
        Logger.debug(`init every: ${names} interval: ${interval}`);

        options.timezone = 'Asia/Shanghai';// 设置时区
        await this.Agenda.every(interval, names, data, options);
    }

    // 立刻执行
    now(names: string | string[]): void {
        this.Agenda.now(names);
    }

    initLogger(logDirName: string = this._serverName): void {
        const logRoot = path.join(PROJECT_ROOT, 'logs');
        Log4js.configure({
            appenders: {
                runtime: {
                    type: 'dateFile',
                    filename: `${logRoot}/${logDirName}/runtime/`,
                    pattern: "yyyy-MM-dd.log",
                    alwaysIncludePattern: true
                },
                action: {
                    type: 'dateFile',
                    layout: {
                        type: 'pattern',
                        pattern: '[%d] %m'


                    },
                    filename: `${logRoot}/${logDirName}/action/`,
                    pattern: "yyyy-MM-dd.log",
                    alwaysIncludePattern: true
                }
            },
            categories: {
                default: { appenders: ['runtime'], level: "ALL" },
                action: { appenders: ['action'], level: "ALL" },
            }
        });

        const logger = Log4js.getLogger('default');
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const L = require('nirvana-logger')(logDirName);
        global.Logger = {
            error: err => logger.error(err.stack || err),
            info: msg => logger.info(msg),
            warn: msg => logger.warn(msg),
            debug: msg => { logger.debug(msg), L(msg); },
            record: msg => L(msg)
        };

        (global as any as _global).Action = {
            record(actionName: any, data: any) {
                Log4js.getLogger('action').info(
                    `[${actionName}]${JSON.stringify(data)}`
                );
            },
        };

        this.info(`initLogger`);
    }
}
