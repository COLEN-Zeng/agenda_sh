

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改
/// <reference path = "orm.d.ts" />

module.exports = (client) => ({

    Application: {

        /**
        * @returns {CertificationApplication}
        */
        get: function (id) {
            // Logger.debug(`Application get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Application|get',
                params: { id }
            });
        },

        /**
        * @param {CertificationApplication} object
        */
        set: function (object) {
            // Logger.debug(`Application set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Application|set',
                params: { object }
            });
        },

        del: function (id) {
            // Logger.debug(`Application del ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Application|del',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {CertificationApplication[]}
        */
        find: function ({ where, sort, limit } = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Application|find',
                params: Object.assign(
                    {},

                    where !== undefined ? { where: where.toJson() } : {},
                    sort !== undefined ? { sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson() } : {},
                    limit !== undefined ? { limit: limit.toJson() } : {},
                )
            });
        },

    },

    Info: {

        /**
        * @returns {CertificationInfo}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {CertificationInfo} object
        */
        set: function (object) {
            // Logger.debug(`Info set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|set',
                params: { object }
            });
        },

        del: function (id) {
            // Logger.debug(`Info del ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|del',
                params: { id }
            });
        },

    },

});
