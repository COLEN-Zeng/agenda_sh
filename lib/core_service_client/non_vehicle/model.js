

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

module.exports = (client) => ({

    KeyCache: {

        /**
        * @returns {Promise<NonVehicleKeyCache>}
        */
        get: function (id) {
            // Logger.debug(`KeyCache get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'KeyCache|get',
                params: { id }
            });
        },

        /**
        * @param {NonVehicleKeyCache} object
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
        * @returns {Promise<NonVehicleQuotation>}
        */
        get: function (id) {
            // Logger.debug(`Quotation get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Quotation|get',
                params: { id }
            });
        },

        /**
        * @param {NonVehicleQuotation} object
        */
        set: function (object) {
            // Logger.debug(`Quotation set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Quotation|set',
                params: { object }
            });
        },

    },

    SalesVolume: {

        /**
        * @returns {Promise<NonVehicleSalesVolume>}
        */
        get: function (id) {
            // Logger.debug(`SalesVolume get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'SalesVolume|get',
                params: { id }
            });
        },

        /**
        * @returns {Promise<NonVehicleSalesVolume>}
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
