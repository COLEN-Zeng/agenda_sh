import * as opts from 'opts_v2';
import * as uuid from 'uuid/v4'

export const uuid = () => uuid().replace(/-/g, '').toUpperCase();

export const parseServerName = name => name.replace(/^[a-z]|\.[a-z]|_[a-z]/g, match => match.replace(/\.|_/, '').toUpperCase());

export const requireServiceInfo = (additionalParams = []) => {
    opts.add([
        { long: 'service-name', description: 'service-name', value: true, required: true, type: 'string' },
        { long: 'host', description: 'host to listen', value: true, required: true, type: 'string' },
        { long: 'port', description: 'port to listen', value: true, required: true, type: 'integer' },
        { long: 'reg-host', description: 'host of registry service', value: true, required: true, type: 'string' },
        { long: 'reg-port', description: 'port of registry service', value: true, required: true, type: 'integer' },
        { long: 'config-host', description: 'host of config service', value: true, required: true, type: 'string' },
        { long: 'config-port', description: 'port of config service', value: true, required: true, type: 'integer' },
        { long: 'core-reg-host', description: 'host of core registry service', value: true, required: true, type: 'string' },
        { long: 'core-reg-port', description: 'port of core registry service', value: true, required: true, type: 'integer' },
        { long: 'h5-reg-host', description: 'host of h5 registry service', value: true, required: true, type: 'string' },
        { long: 'h5-reg-port', description: 'port of h5 registry service', value: true, required: true, type: 'integer' },
    ].concat(additionalParams));

    return Object.assign(
        {
            host: opts.get('host'),
            port: Number(opts.get('port')),
            regHost: opts.get('reg-host'),
            regPort: Number(opts.get('reg-port')),
            coreRegHost: opts.get('core-reg-host'),
            coreRegPort: Number(opts.get('core-reg-port')),
            configHost: opts.get('config-host'),
            configPort: Number(opts.get('config-port'))
        },
        ...additionalParams.map(_ => ({
            [_.long.replace(/^_[a-z]|-[a-z]/g, (match) => match.replace(/_|-/, '').toUpperCase())]: _.type == 'integer' ? Number(opts.get(_.long)) : opts.get(_.long)
        }))
    );
};
