import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import * as Express from 'express';
import * as Agenda from 'agenda';
import * as AgendaSh from 'agendash';

export class AgendaServer {
    constructor(
        serverHost, serverPort, env, serverName = 'agenda',
        dbHost, dbPort, dbName = 'agenda'
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
        global.Agenda = this.Agenda;
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
        this.Agenda.define(name, fun);
    }

    // 定时任务
    every(interval, names, data, options) {
        this.Agenda.every(interval, names, data, options);
    }

    // 立刻执行
    now(names) {
        this.Agenda.now(names);
    }
}
