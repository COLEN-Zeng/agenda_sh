import './ref';
import * as os from 'os';
import * as router from './router';
import * as every from './every';
import Common = require('./common');

// const ENV = 'dev';
// const REGISTER_HOST = '0.0.0.0';
// const REGISTER_PORT = 3471;
// const CONFIG_HOST = '0.0.0.0';
// const CONFIG_PORT = 3472;

// const SERVICE_HOST = 'project-agenda';

// const AGENDA_WEB_PORT = 3473;

// let SERVICE_START_PORT = 3474;

// const H5_REGISTER_HOST = 'project-h5';
// const H5_REGISTER_PORT = 2731;
// const CORE_REGISTER_HOST = 'project-core';
// const CORE_REGISTER_PORT = 2371;

// const WECHAT_HOST = '10.10.5.30';
// const WECHAT_PORT = 8003;

// const RABBITMQ_HOST = 'rabbit-mq-master';
// const RABBITMQ_PORT = 5672;
// const RABBITMQ_LOGIN = 'admin';
// const RABBITMQ_PASSWORD = 'admin';

// const MONGODB_HOST = 'mongo-master';
// const MONGODB_PORT = 27017;
// const MONGODB_USER = 'admin';
// const MONGODB_PASSWORD = 'admin';

// const serviceName = 'agenda_web',
//     mongodbHost = MONGODB_HOST, mongodbPort = MONGODB_PORT,
//     mongodbUser = MONGODB_USER, mongodbPassword = MONGODB_PASSWORD,
//     host = SERVICE_HOST,
//     port = AGENDA_WEB_PORT;

const {
    serviceName,
    host, port,
    coreRegHost, coreRegPort,
    h5RegHost, h5RegPort,
    configHost, configPort,
    mqHost, mqPort, mqLogin, mqPassword,
    mongodbHost, mongodbPort, mongodbUser, mongodbPassword
} = Common.Module.requireServiceInfo([
    { long: 'mq-host', description: 'host of mq service', value: true, required: true, type: 'string' },
    { long: 'mq-port', description: 'port of mq service', value: true, required: true, type: 'integer' },
    { long: 'mq-login', description: 'login of mq service', value: true, required: true, type: 'string' },
    {
        long: 'mq-password', description: 'password of mq service',
        value: true, required: true, type: 'string'
    },
    {
        long: 'mongodb-host', description: 'host of mongodb service',
        value: true, required: true, type: 'string'
    },
    {
        long: 'mongodb-port', description: 'port of mongodb service',
        value: true, required: true, type: 'integer'
    },
    {
        long: 'mongodb-user', description: 'user of mongodb service',
        value: true, required: true, type: 'string'
    },
    {
        long: 'mongodb-password', description: 'password of mongodb service',
        value: true, required: true, type: 'string'
    },
]);
const server = new Common.Entity.GeneralAgendaServer(
    ENV,
    host, port, serviceName,
    mongodbHost, mongodbPort, 'agenda'
    //  mongodbUser, mongodbPassword
);

Promise.resolve()
    .then(() => server.initLogger('agenda'))
    // .then(() => server.initConfigClient(configHost, configPort))
    // .then(() => server.initOuter(
    //     'core',
    //     ['account', 'policy', 'non_vehicle', 'payment', 'warehouse'],
    //     coreRegHost, coreRegPort
    // ))
    // .then(() => server.initOuter('h5', ['personnel',], h5RegHost, h5RegPort))
    // .then(() => server.initInside(['silver-ins-core', 'silver-ins-common']))
    // .then(async () => {
    //     await server.initNotificationCenter({
    //         connParams: {
    //             host: mqHost,
    //             port: mqPort,
    //             login: mqLogin,
    //             password: mqPassword
    //         },
    //         serviceName,
    //         onError: (error) => Logger.error(error),
    //         onClose: (message) => Logger.error(message),
    //         ...ENV !== 'prod' && ENV !== 'gamma'
    //             ? { scope: `silver_ins_${os.hostname()}` }
    //             : {}
    //     });
    // })
    .then(() => server.start(router, every))
    .catch(error => {
        Logger.error(error);
        process.exit();
    });
