

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

module.exports = (client) => ({

    Info: {

        /**
        * @returns {Promise<H5AccountInfo>}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {H5AccountInfo} object
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
        * @returns {Promise<H5AccountInfo[]>}
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

    },

    RecommendProduct: {

        /**
        * @returns {Promise<H5AccountRecommendProduct>}
        */
        get: function (id) {
            // Logger.debug(`RecommendProduct get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'RecommendProduct|get',
                params: { id }
            });
        },

        /**
        * @param {H5AccountRecommendProduct} object
        */
        set: function (object) {
            // Logger.debug(`RecommendProduct set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'RecommendProduct|set',
                params: { object }
            });
        },

        del: function (id) {
            // Logger.debug(`RecommendProduct del ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'RecommendProduct|del',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<H5AccountRecommendProduct[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'RecommendProduct|find',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

});
