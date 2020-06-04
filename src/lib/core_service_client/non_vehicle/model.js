

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/fun自动生成,请勿手动修改

module.exports = (client) => ({

    KeyCache: {

        /**
        * @returns {Promise<CoreNonVehicleKeyCache>}
        */
        get: function (id) {
            // Logger.debug(`KeyCache get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'KeyCache|get',
                params: { id }
            });
        },

        /**
        * @param {CoreNonVehicleKeyCache} object
        */
        set: function (object) {
            // Logger.debug(`KeyCache set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'KeyCache|set',
                params: { object }
            });
        },

    },

    Quotation: {

        /**
        * @returns {Promise<CoreNonVehicleQuotation>}
        */
        get: function (id) {
            // Logger.debug(`Quotation get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Quotation|get',
                params: { id }
            });
        },

        /**
        * @param {CoreNonVehicleQuotation} object
        */
        set: function (object) {
            // Logger.debug(`Quotation set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Quotation|set',
                params: { object }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<CoreNonVehicleQuotation[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Quotation|find',
                params: Object.assign(
                    {},
                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    SalesVolume: {

        /**
        * @returns {Promise<CoreNonVehicleSalesVolume>}
        */
        get: function (id) {
            // Logger.debug(`SalesVolume get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'SalesVolume|get',
                params: { id }
            });
        },

        /**
        * @returns {Promise<CoreNonVehicleSalesVolume>}
        */
        getDefaultValueIfNull: function (id) {
            // Logger.debug(`SalesVolume getDefaultValueIfNull ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'SalesVolume|getDefaultValueIfNull',
                params: { id }
            });
        },

    },

});
