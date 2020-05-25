import os = require('os');
import fs = require('fs');
import path = require('path');
import Express = require('express');
import Agenda = require('agenda');
import AgendaSh = require('agendash');
import * as abstract from './abstract';

module.exports = class {
    _serverHost: string;
    _serverPort: string | number;
    _env: string;
    _serverName: string;
    _server: any;
    _dbHost: string;
    _dbPort: number;
    _dbName: string;
    Agenda: any;
    constructor(
        serverHost: string, serverPort: string | number, env: string, serverName = 'agenda',
        dbHost: string, dbPort: number, dbName = 'agenda'
    ) {
        this._serverHost = serverHost;
        this._serverPort = serverPort;
        this._env = env;
        this._serverName = serverName;
        this._dbHost = dbHost;
        this._dbPort = dbPort;
        this._dbName = dbName;
    }

    start() {
        this._server = Express();
        this.Agenda = new Agenda({
            db: {
                address: `mongodb://${this._dbHost}:${this._dbPort}/${this._dbName}`,
                options: { useUnifiedTopology: true }
            },
            name: os.hostname + '-' + process.pid
        });
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
    define(name: string, fun: () => void) {
        this.Agenda.define(name, fun);
    }

    // 定时任务
    every(interval: number | string, names: string, data?: any, options?: any) {
        this.Agenda.every(interval, names, data, options);
    }

    // 立刻执行
    now(names) {
        this.Agenda.now(names);
    }
};
