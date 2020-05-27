
const Agenda = require('agenda');
const AgendaSh = require('agendash');
const Express = require('express');
const Log4js = require('log4js');
const AbstractGeneralServer = require('./abstract');
const path = require('path');
const os = require('os');

module.exports = class extends AbstractGeneralServer {
    constructor(
        env, serverHost, serverPort, serverName = 'agenda',
        dbHost, dbPort, dbDatabaseName = 'agenda'
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

    async start(router, every) {
        this._server = Express();
        this.Agenda = new Agenda({
            db: {
                // FIXME: 密码登陆
                address: `mongodb://${this._dbHost}:${this._dbPort}/${this._dbDatabaseName}`,
                options: { useUnifiedTopology: true }
            },
            name: os.hostname + '-' + process.pid
        });

        await this.Agenda.start().then(_ => this.info('agenda start'));

        router && router(this);
        every && await every(this);

        this._server.listen(this._serverPort, this._serverHost);
        this._server.use('', AgendaSh(this.Agenda, { title: os.hostname + '-' + process.pid }));

        this.Agenda.on('start', job => {
            console.log('Job %s starting', job.attrs.name);
        })
            .on('complete', job => {
                console.log(`Job ${job.attrs.name} finished`);
            })
            .on('success:send email', job => {
                console.log(`Sent Email Successfully to ${job.attrs.data.to}`);
            })
            .on('fail:send email', (err, job) => {
                console.log(`Job failed with error: ${err.message}`);
            });
    }

    // 定义任务
    define(name, fun) {
        Logger.debug(`init define: ${name}`);
        this.Agenda.define(name, fun);
    }

    // 定时任务
    async every(interval, names, data, options = {}) {
        Logger.debug(`init every: ${names} interval: ${interval}`);

        options.timezone = 'Asia/Shanghai';// 设置时区
        await this.Agenda.every(interval, names, data, options);
    }

    // 立刻执行
    now(names) {
        this.Agenda.now(names);
    }

    initLogger(logDirName = this._serverName) {
        let logRoot = path.join(PROJECT_ROOT, 'logs');
        Log4js.configure({
            appenders: {
                runtime: {
                    type: 'dateFile',
                    filename: `${logRoot}/${logDirName}/runtime/`,
                    pattern: 'yyyy-MM-dd.log',
                    alwaysIncludePattern: true,
                },
                action: {
                    type: 'dateFile',
                    layout: {
                        type: 'pattern',
                        pattern: '[%d] %m',
                    },
                    filename: `${logRoot}/${logDirName}/action/`,
                    pattern: 'yyyy-MM-dd.log',
                    alwaysIncludePattern: true,
                },
            },
            categories: {
                default: { appenders: ['runtime'], level: 'ALL' },
                action: { appenders: ['action'], level: 'ALL' },
            },
        });

        const logger = Log4js.getLogger('default');
        const L = require('nirvana-logger')(logDirName);
        global.Logger = {
            error: err => logger.error(err.stack || err),
            info: msg => logger.info(msg),
            warn: msg => logger.warn(msg),
            debug: msg => { logger.debug(msg), L(msg); },
            record: msg => L(msg)
        };

        global.Action = {
            record(actionName, data) {
                Log4js.getLogger('action').info(
                    `[${actionName}]${JSON.stringify(data)}`
                );
            },
        };

        this.info(`initLogger`);
    }
};
