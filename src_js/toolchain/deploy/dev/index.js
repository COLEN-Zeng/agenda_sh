const path = require('path');
const fs = require('fs');

const ENV = 'dev';
const REGISTER_HOST = '0.0.0.0';
const REGISTER_PORT = 2731;
const CORE_REGISTER_HOST = 'project-core';
const CORE_REGISTER_PORT = 2371;
const CONFIG_HOST = '0.0.0.0';
const CONFIG_PORT = 2732;
const SERVICE_HOST = 'project-h5';
let SERVICE_START_PORT = 2473;

const AGENT_API_HOST = '0.0.0.0';
const AGENT_API_PORT = 2730;
const MANAGEMENT_API_HOST = '0.0.0.0';
const MANAGEMENT_API_PORT = 2729;
const PROXY_HOST = '0.0.0.0';
const PROXY_PORT = 8004;
const WECHAT_HOST = '10.10.5.30';
const WECHAT_PORT = 8003;

const RABBITMQ_HOST = 'rabbit-mq-master';
const RABBITMQ_PORT = 5672;
const RABBITMQ_LOGIN = 'admin';
const RABBITMQ_PASSWORD = 'admin';

const GIT_BRANCH = 'dev';
const REMOTE_DIR = '/home/test/projects/bgm';
const SSH_USER = 'test';
const SSH_HOST = '10.10.4.87';
const SSH_PORT = 22;

const NAME_PREFIX = `${ENV}/${require('../../../package.json').name}/`;
const PROJECT_ROOT = `${__dirname}/../../..`;
const SERVICE_ROOT = `${PROJECT_ROOT}/service/`;

/**
 *  各微服务运行额外所需参数填写于此
 */
let additionalArguments = {
    personnel: {
        'mq-host': RABBITMQ_HOST,
        'mq-port': RABBITMQ_PORT,
        'mq-login': RABBITMQ_LOGIN,
        'mq-password': RABBITMQ_PASSWORD,
        'wechat-host': WECHAT_HOST,
        'wechat-port': WECHAT_PORT,
    },
    'guest_article': {
        'wechat-host': WECHAT_HOST,
        'wechat-port': WECHAT_PORT,
    },
    org: {
        'wechat-host': WECHAT_HOST,
        'wechat-port': WECHAT_PORT,
        'core-reg-host': CORE_REGISTER_HOST,
        'core-reg-port': CORE_REGISTER_PORT,
    },
    certification: {
        'mq-host': RABBITMQ_HOST,
        'mq-port': RABBITMQ_PORT,
        'mq-login': RABBITMQ_LOGIN,
        'mq-password': RABBITMQ_PASSWORD,
    }
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
    {
        namePrefix: NAME_PREFIX,
        name: 'basic/config',
        script: `${PROJECT_ROOT}/node_modules/.bin/config_service`,
        args: {
            host: CONFIG_HOST,
            port: CONFIG_PORT,
            'config-path': `${PROJECT_ROOT}/config`,
            'log-path': `${PROJECT_ROOT}/logs/basic/config`,
        },
        env: { ENV, TZ: 'Asia/Shanghai' },
        nodeArgs: {
            'max-old-space-size': '4096',
        },
    },
    {
        namePrefix: NAME_PREFIX,
        name: 'api/agent',
        script: `${PROJECT_ROOT}/api/agent`,
        args: {
            host: AGENT_API_HOST,
            port: AGENT_API_PORT,
            'reg-host': REGISTER_HOST,
            'reg-port': REGISTER_PORT,
            'config-host': CONFIG_HOST,
            'config-port': CONFIG_PORT,
            'wechat-host': WECHAT_HOST,
            'wechat-port': WECHAT_PORT,
            'core-reg-host': CORE_REGISTER_HOST,
            'core-reg-port': CORE_REGISTER_PORT,
            'mq-host': RABBITMQ_HOST,
            'mq-port': RABBITMQ_PORT,
            'mq-login': RABBITMQ_LOGIN,
            'mq-password': RABBITMQ_PASSWORD,
        },
        env: { ENV, TZ: 'Asia/Shanghai' },
        nodeArgs: {
            'max-old-space-size': '4096',
        },
    },
    {
        namePrefix: NAME_PREFIX,
        name: 'api/management',
        script: `${PROJECT_ROOT}/api/management`,
        args: {
            host: MANAGEMENT_API_HOST,
            port: MANAGEMENT_API_PORT,
            'reg-host': REGISTER_HOST,
            'reg-port': REGISTER_PORT,
            'config-host': CONFIG_HOST,
            'config-port': CONFIG_PORT,
            'core-reg-host': CORE_REGISTER_HOST,
            'core-reg-port': CORE_REGISTER_PORT,
            'mq-host': RABBITMQ_HOST,
            'mq-port': RABBITMQ_PORT,
            'mq-login': RABBITMQ_LOGIN,
            'mq-password': RABBITMQ_PASSWORD,
        },
        env: { ENV, TZ: 'Asia/Shanghai' },
        nodeArgs: {
            'max-old-space-size': '4096',
        },
    },
    {
        namePrefix: NAME_PREFIX,
        name: 'proxy',
        script: `${PROJECT_ROOT}/proxy/index.js`,
        args: {
            host: PROXY_HOST,
            port: PROXY_PORT,
            'reg-host': REGISTER_HOST,
            'reg-port': REGISTER_PORT,
            'config-host': CONFIG_HOST,
            'config-port': CONFIG_PORT,
            'wechat-host': WECHAT_HOST,
            'wechat-port': WECHAT_PORT,
            'core-reg-host': CORE_REGISTER_HOST,
            'core-reg-port': CORE_REGISTER_PORT,
        },
        env: { ENV, TZ: 'Asia/Shanghai' },
        nodeArgs: {
            'max-old-space-size': '4096',
        },
    },
    ...fs
        .readdirSync(SERVICE_ROOT)
        .filter(dir => fs.lstatSync(path.join(SERVICE_ROOT, dir)).isDirectory())
        .map(service => {
            let commonArgs = {
                host: SERVICE_HOST,
                port: SERVICE_START_PORT++,
                'reg-host': REGISTER_HOST,
                'reg-port': REGISTER_PORT,
                'config-host': CONFIG_HOST,
                'config-port': CONFIG_PORT,
                'service-name': service,
                'core-reg-host': CORE_REGISTER_HOST,
                'core-reg-port': CORE_REGISTER_PORT,
            };
            return {
                namePrefix: NAME_PREFIX,
                name: `service/${service}`,
                script: `${SERVICE_ROOT}/${service}`,
                args: Object.assign(commonArgs, additionalArguments[service]),
                env: { ENV, TZ: 'Asia/Shanghai' },
                nodeArgs: {
                    'max-old-space-size': '4096',
                },
                minAliveTime: 10000,
                restartLimitBeforeAlive: 2
            };
        })
);

module.exports = {
    apps,
};
