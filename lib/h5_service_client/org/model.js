

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

module.exports = (client) => ({

    Info: {

        /**
        * @returns {Promise<H5OrgInfo>}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {H5OrgInfo} object
        */
        set: function (object) {
            // Logger.debug(`Info set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`Info has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|hasObject',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<H5OrgInfo[]>}
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

    InsurancePoster: {

        /**
        * @returns {Promise<H5OrgInsurancePoster>}
        */
        get: function (id) {
            // Logger.debug(`InsurancePoster get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'InsurancePoster|get',
                params: { id }
            });
        },

        /**
        * @param {H5OrgInsurancePoster} object
        */
        set: function (object) {
            // Logger.debug(`InsurancePoster set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'InsurancePoster|set',
                params: { object }
            });
        },

    },

    WechatConfig: {

        /**
        * @returns {Promise<H5OrgWechatConfig>}
        */
        get: function (id) {
            // Logger.debug(`WechatConfig get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatConfig|get',
                params: { id }
            });
        },

        /**
        * @param {H5OrgWechatConfig} object
        */
        set: function (object) {
            // Logger.debug(`WechatConfig set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatConfig|set',
                params: { object }
            });
        },

    },

});
