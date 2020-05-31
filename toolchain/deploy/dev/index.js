const path = require('path');
const fs = require('fs');

const ENV = 'dev';
const REGISTER_HOST = '0.0.0.0';
const REGISTER_PORT = 3471;
const CONFIG_HOST = '0.0.0.0';
const CONFIG_PORT = 3472;

const SERVICE_HOST = 'project-agenda';

const AGENDA_WEB_PORT = 3473;

let SERVICE_START_PORT = 3474;

const H5_REGISTER_HOST = 'project-h5';
const H5_REGISTER_PORT = 2731;
const CORE_REGISTER_HOST = 'project-core';
const CORE_REGISTER_PORT = 2371;

const WECHAT_HOST = '10.10.5.30';
const WECHAT_PORT = 8003;

const RABBITMQ_HOST = 'rabbit-mq-master';
const RABBITMQ_PORT = 5672;
const RABBITMQ_LOGIN = 'admin';
const RABBITMQ_PASSWORD = 'admin';

const MONGODB_HOST = 'mongo-master';
const MONGODB_PORT = 27017;
const MONGODB_USER = 'admin';
const MONGODB_PASSWORD = 'admin';

const NAME_PREFIX = `${ENV}/${require('../../../package.json').name}/`;
const PROJECT_ROOT = `${__dirname}/../../..`;

/**
 *  各微服务运行额外所需参数填写于此
 */
let additionalArguments = {
};

let apps = [].concat(
    {
        namePrefix: NAME_PREFIX,
        name: 'basic/registry',
        script: `${PROJECT_ROOT}/node_modules/.bin/registry_service`,
        args: {
            host: REGISTER_HOST,
            port: REGISTER_PORT,
            'log-path': `${PROJECT_ROOT}/logs/basic/registry`,
        },
        env: { ENV, TZ: 'Asia/Shanghai' },
        nodeArgs: {
            'max-old-space-size': '4096',
        },
    },
    // {
    //     namePrefix: NAME_PREFIX,
    //     name: 'basic/config',
    //     script: `${PROJECT_ROOT}/node_modules/.bin/config_service`,
    //     args: {
    //         host: CONFIG_HOST,
    //         port: CONFIG_PORT,
    //         'config-path': `${PROJECT_ROOT}/config`,
    //         'log-path': `${PROJECT_ROOT}/logs/basic/config`,
    //     },
    //     env: { ENV, TZ: 'Asia/Shanghai' },
    //     nodeArgs: {
    //         'max-old-space-size': '4096',
    //     },
    // },
    {
        namePrefix: NAME_PREFIX,
        name: 'agenda_web',
        script: `${PROJECT_ROOT}/src_js`,
        args: {
            host: SERVICE_HOST,
            port: AGENDA_WEB_PORT,
            'reg-host': REGISTER_HOST,
            'reg-port': REGISTER_PORT,
            'config-host': CONFIG_HOST,
            'config-port': CONFIG_PORT,
            'service-name': 'agenda_web',
            'core-reg-host': CORE_REGISTER_HOST,
            'core-reg-port': CORE_REGISTER_PORT,
            'h5-reg-host': H5_REGISTER_HOST,
            'h5-reg-port': H5_REGISTER_PORT,
            'wechat-host': WECHAT_HOST,
            'wechat-port': WECHAT_PORT,
            'mq-host': RABBITMQ_HOST,
            'mq-port': RABBITMQ_PORT,
            'mq-login': RABBITMQ_LOGIN,
            'mq-password': RABBITMQ_PASSWORD,
            'mongodb-host': MONGODB_HOST,
            'mongodb-port': MONGODB_PORT,
            'mongodb-user': MONGODB_USER,
            'mongodb-password': MONGODB_PASSWORD,
        },
        env: { ENV },
        nodeArgs: {
            'max-old-space-size': '4096',
        },
    },
    // ...fs
    //     .readdirSync(SERVICE_ROOT)
    //     .filter(dir => fs.lstatSync(path.join(SERVICE_ROOT, dir)).isDirectory())
    //     .map(service => {
    //         let commonArgs = {
    //             host: SERVICE_HOST,
    //             port: SERVICE_START_PORT++,
    //             'reg-host': REGISTER_HOST,
    //             'reg-port': REGISTER_PORT,
    //             'config-host': CONFIG_HOST,
    //             'config-port': CONFIG_PORT,
    //             'service-name': service,
    //             'core-reg-host': CORE_REGISTER_HOST,
    //             'core-reg-port': CORE_REGISTER_PORT,
    //             'h5-reg-host': H5_REGISTER_HOST,
    //             'h5-reg-port': H5_REGISTER_PORT,
    //         };
    //         return {
    //             namePrefix: NAME_PREFIX,
    //             name: `service/${service}`,
    //             script: `${SERVICE_ROOT}/${service}`,
    //             args: Object.assign(commonArgs, additionalArguments[service]),
    //             env: { ENV, TZ: 'Asia/Shanghai' },
    //             nodeArgs: {
    //                 'max-old-space-size': '4096',
    //             },
    //             minAliveTime: 10000,
    //             restartLimitBeforeAlive: 2
    //         };
    //     })
);

module.exports = {
    apps,
};
