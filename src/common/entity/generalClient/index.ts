import * as moment from 'moment';
const RegistrySubscriber = require('@qtk/registry-service').Client.Subscriber;
import {
    BusinessError as TcpBusinessError,
    ValidationError as TcpValidationError,
    Client as ServiceClient,
} from '@qtk/schema-tcp-request-framework';

export class GeneralServiceClient {
    _clients: any[];
    _serviceName: any;
    _host: any;
    _port: any;
    _registryClient: any;
    _resolve: (value?: unknown) => void | boolean;
    constructor(host, port, name) {
        this._clients = [];
        this._serviceName = name;
        this._host = host;
        this._port = port;
    }

    async connect(timeout = 3) {
        this._registryClient = new RegistrySubscriber({
            host: this._host,
            port: this._port,
            name: this._serviceName,
        });

        this._registryClient.on('update', this._refreshClients.bind(this));

        await new Promise((resolve, reject) => {
            this._resolve = resolve;
            setTimeout(() => {
                reject(
                    `connect to service by registry service timeout [serviceName: ${this._serviceName}]`
                );
            }, timeout * 1000);
        });

        return this;
    }

    _refreshClients(services) {
        this._clients = this._clients.filter(
            c =>
                services.findIndex(
                    s => c.config.host === s.host && c.config.port === s.port
                ) != -1
        );

        this._clients = services.map(
            config =>
                this._clients.find(
                    c =>
                        c.config.host === config.host &&
                        c.config.port === config.port
                ) ||
                Object.assign(
                    new ServiceClient({ host: config.host, port: config.port }),
                    { config }
                )
        );

        this._resolve && this._resolve() && (this._resolve = null);
    }

    async call(command, payload, timeout = 10) {
        if (this._clients.length === 0) {
            throw new Error(`no client(${this._serviceName}) available`);
        }

        const requestUuid = Common.Module.uuid();
        const dateStr = moment().format('YYYY-MM-DDTHH:mm:ss');
        const timeKey = `[${dateStr}]${requestUuid}|time|${this._serviceName}|${command}`;
        console.time(timeKey);

        const client = this._clients[
            Math.floor(Math.random() * this._clients.length)
        ];

        return client
            .send({ command, payload, timeout })
            .then(response => {
                console.timeEnd(timeKey);
                return response;
            })
            .catch(err => {
                console.timeEnd(timeKey);
                if (err instanceof TcpBusinessError) throw err;
                if (!(err instanceof TcpValidationError)) err.command = command;
                err.serviceName = this._serviceName;
                throw err;
            });
    }
};
