require('./ref');
const os = require('os');

const serverHost = 'localHost', serverPort = 3000, env = 'dev', serverName = 'agenda',
    dbHost = 'localHost', dbPort = 27017, dbName = 'agenda'
const RABBITMQ_HOST = 'rabbit-mq-master';
const RABBITMQ_PORT = 5672;
const RABBITMQ_LOGIN = 'admin';
const RABBITMQ_PASSWORD = 'admin'

const server = new Common.Entity.GeneralAgendaServer(
    env,
    serverHost, serverPort, serverName,
    dbHost, dbPort, dbName
);
const router = require('./router'), every = require('./every')

Promise.resolve()
    .then(() => server.initLogger('agenda'))
    // .then(() => server.initConfigClient(configHost, configPort))
    // .then(() => server.initOuter('core', ['account', 'policy', 'non_vehicle', 'payment', 'warehouse'], coreRegHost, coreRegPort))
    // .then(() => server.initOuter('h5', ['personnel', ], h5RegHost, h5RegPort))
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
        process.exit(-1);
    })
