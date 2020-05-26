require('./ref');
const serverHost = 'localHost', serverPort = 3000, env = 'dev', serverName = 'agenda',
    dbHost = 'localHost', dbPort = 27017, dbName = 'agenda'

const server = new Common.Entity.GeneralAgendaServer(
    env,
    serverHost, serverPort, serverName,
    dbHost, dbPort, dbName
);

Promise.resolve()
    .then(() => server.initLogger('agenda'))
    // .then(() => server.initConfigClient(configHost, configPort))
    // .then(() => server.initCore(['account', 'policy', 'non_vehicle', 'payment', 'warehouse'], coreRegHost, coreRegPort))
    // .then(() => server.initInside(['silver-ins-core', 'silver-ins-common']))
    .then(() => server.start(require('./router'), require('./every')))
    .catch(error => {
        console.log(error);
        process.exit(-1);
    })
