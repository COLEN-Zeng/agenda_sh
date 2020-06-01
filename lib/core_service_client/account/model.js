

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改
/// <reference path = "orm.d.ts" />
module.exports = (client) => ({

    Info: {

        /**
        * @returns {Promise<AccountInfo>}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<AccountInfo[]>}
        */
        find: function ({ where, sort, limit } = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Info|find',
                params: Object.assign(
                    {},
                    where !== undefined ? { where: where.toJson() } : {},
                    sort !== undefined ? { sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson() } : {},
                    limit !== undefined ? { limit: limit.toJson() } : {},
                )
            });
        },

    },

    JobRank: {

        /**
        * @returns {Promise<AccountJobRank>}
        */
        get: function (id) {
            // Logger.debug(`JobRank get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'JobRank|get',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<AccountJobRank[]>}
        */
        find: function ({ where, sort, limit } = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'JobRank|find',
                params: Object.assign(
                    {},
                    where !== undefined ? { where: where.toJson() } : {},
                    sort !== undefined ? { sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson() } : {},
                    limit !== undefined ? { limit: limit.toJson() } : {},
                )
            });
        },

    },

    PersonnelInfo: {

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<AccountPersonnelInfo[]>}
        */
        find: function ({ where, sort, limit } = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'PersonnelInfo|find',
                params: Object.assign(
                    {},
                    where !== undefined ? { where: where.toJson() } : {},
                    sort !== undefined ? { sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson() } : {},
                    limit !== undefined ? { limit: limit.toJson() } : {},
                )
            });
        },

        /**
        * @param where 过滤条件
        * @returns {Promise<number>}
        */
        count: function (where) {
            // Logger.debug(`PersonnelInfo count ${JSON.stringify(where)}`);
            return client.call('model.operate', {
                modelAndOperation: 'PersonnelInfo|countObject',
                params: Object.assign(
                    {},
                    where !== undefined ? { where: where.toJson() } : {}
                )
            });
        },

    },

});
