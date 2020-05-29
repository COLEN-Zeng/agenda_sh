require('./ref');
const os = require('os');

let {
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
    { long: 'mq-password', description: 'password of mq service', value: true, required: true, type: 'string' },
    { long: 'mongodb-host', description: 'host of mongodb service', value: true, required: true, type: 'string' },
    { long: 'mongodb-port', description: 'port of mongodb service', value: true, required: true, type: 'integer' },
    { long: 'mongodb-user', description: 'user of mongodb service', value: true, required: true, type: 'string' },
    { long: 'mongodb-password', description: 'password of mongodb service', value: true, required: true, type: 'string' },
]);

const server = new Common.Entity.GeneralAgendaServer(
    ENV,
    host, port, serviceName,
    mongodbHost, mongodbPort, 'agenda'
    //  mongodbUser, mongodbPassword
);
const router = require('./router'), every = require('./every');

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
