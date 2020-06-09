import './ref';
import * as os from 'os';
import router from './router';
import every from './every';
// import Common = require('./common');
import * as Common from './common';

const {
    serviceName,
    host, port,
    coreRegHost, coreRegPort,
    h5RegHost, h5RegPort,
    configHost, configPort,
    mqHost, mqPort, mqLogin, mqPassword,
    mongodbHost, mongodbPort, mongodbUser, mongodbPassword
} = Common.Module.requireServiceInfo([
    { long: 'h5-reg-host', description: 'h5 reg host to listen', value: 'true', required: true, type: 'string', },
    { long: 'h5-reg-port', description: 'h5 reg port to listen', value: 'true', required: true, type: 'integer', },
    { long: 'core-reg-host', description: 'host of core registry service', value: true, required: true, type: 'string' },
    { long: 'core-reg-port', description: 'port of core registry service', value: true, required: true, type: 'integer' },
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
    .then(() => server.initOuter(
        'core',
        ['account', 'policy', 'non_vehicle', 'payment', 'warehouse'],
        coreRegHost, coreRegPort
    ))
    .then(() => server.initOuter('h5', ['personnel',], h5RegHost, h5RegPort))
    .then(() => server.initInside(['silver-ins-core', 'silver-ins-common']))
    .then(async () => {
        await server.initNotificationCenter({
            connParams: {
                host: mqHost,
                port: mqPort,
                login: mqLogin,
                password: mqPassword
            },
            serviceName,
            onError: (error) => Logger.error(error),
            onClose: (message) => Logger.error(message),
            ...ENV !== 'prod' && ENV !== 'gamma'
                ? { scope: `silver_ins_${os.hostname()}` }
                : {}
        });
    })
    .then(() => server.start(router, every))
    .catch(error => {
        Logger.error(error);
        process.exit();
    });
