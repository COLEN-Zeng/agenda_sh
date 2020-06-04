

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/fun自动生成,请勿手动修改

module.exports = (client) => ({

    Info: {

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<CorePolicyInfo[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Info|find',
                params: Object.assign(
                    {},
                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

        /**
        * @param where 过滤条件
        * @returns {Promise<number>}
        */
        count: function (where) {
            // Logger.debug(`Info count ${JSON.stringify(where)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|countObject',
                params: Object.assign(
                    {},
                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

    },

});
