import * as opts from 'opts_v2';
// import { v4 as Uuid } from 'uuid'
import { v4 as Uuid } from 'uuid'
// import opts = require('opts_v2');
// import uuid = require('uuid/v4')
import defaultCmdOpt = require('./default_cmd_opt');

export const uuid = () => Uuid().replace(/-/g, '').toUpperCase();

export const parseServerName = name => name.replace(/^[a-z]|\.[a-z]|_[a-z]/g, match => match.replace(/\.|_/, '').toUpperCase());

export const requireServiceInfo = (additionalParams = []) => {
    opts.add(defaultCmdOpt.concat(additionalParams));

    return Object.assign(
        {
            host: opts.get('host'),
            port: Number(opts.get('port')),
            regHost: opts.get('reg-host'),
            regPort: Number(opts.get('reg-port')),
            configHost: opts.get('config-host'),
            configPort: Number(opts.get('config-port')),
            serviceName: opts.get('service-name'),
        },
        ...additionalParams.map(_ => ({
            [_.long.replace(/^_[a-z]|-[a-z]/g, (match) => match.replace(/_|-/, '').toUpperCase())]: _.type == 'integer' ? Number(opts.get(_.long)) : opts.get(_.long)
        }))
    );
};
