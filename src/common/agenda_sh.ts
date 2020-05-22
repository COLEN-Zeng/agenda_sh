import os = require('os');
import fs = require('fs');
import path = require('path');
import Express = require('express');
import Agenda = require('agenda');
import AgendaSh = require('agendash');
import AbstractGeneralServer = require('./abstract');
import mongodb = require('mongodb')

module.exports = class extends AbstractGeneralServer {
    _serverName: string;
    _serverHost: string;
    _serverPort: string | number;
    _env: string;
    _server: any;
    constructor(serverHost: string, serverPort: string | number, env: string, serverName = 'agenda') {
        super(serverHost, serverPort, env);
        // this._serverHost = serverHost;
        // this._serverPort = serverPort;
        // this._env = env;
        this._serverName = serverName;
    }

    collection(host, port, name) {
        // mongoDB

    }
    agenda() {
        return new Agenda({
            db: {
                collection: this.collection(),
                address: 'mongodb://127.0.0.1/agenda',
                options: { useUnifiedTopology: true }
            }
        });
    }

    start(router) {
        this._server = Express();
        router(this._server);
        this._server.listen(this._serverPort, this._serverHost);
        this._server.use('', AgendaSh(this.agenda(), { title: '定时删除图片' }));
    }

};
