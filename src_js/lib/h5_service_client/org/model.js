

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

module.exports = (client) => ({

    Info: {

        /**
        * @returns {OrgInfo}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {OrgInfo} object
        */
        set: function (object) {
            // Logger.debug(`Info set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|set',
                params: { object }
            });
        },

        /**
        * @returns {boolean}
        */
        has: function (id) {
            // Logger.debug(`Info has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|hasObject',
                params: { id }
            });
        },

    },

    MobileFrontendConfig: {

        /**
        * @returns {OrgMobileFrontendConfig}
        */
        get: function (id) {
            // Logger.debug(`MobileFrontendConfig get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'MobileFrontendConfig|get',
                params: { id }
            });
        },

        /**
        * @returns {OrgMobileFrontendConfig}
        */
        getDefaultValueIfNull: function (id) {
            // Logger.debug(`MobileFrontendConfig getDefaultValueIfNull ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'MobileFrontendConfig|getDefaultValueIfNull',
                params: { id }
            });
        },

        /**
        * @param {OrgMobileFrontendConfig} object
        */
        set: function (object) {
            // Logger.debug(`MobileFrontendConfig set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'MobileFrontendConfig|set',
                params: { object }
            });
        },

    },

    RecommendProduct: {

        /**
        * @returns {OrgRecommendProduct}
        */
        get: function (id) {
            // Logger.debug(`RecommendProduct get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'RecommendProduct|get',
                params: { id }
            });
        },

        /**
        * @returns {OrgRecommendProduct}
        */
        getDefaultValueIfNull: function (id) {
            // Logger.debug(`RecommendProduct getDefaultValueIfNull ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'RecommendProduct|getDefaultValueIfNull',
                params: { id }
            });
        },

        /**
        * @param {OrgRecommendProduct} object
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

    },

    WechatConfig: {

        /**
        * @returns {OrgWechatConfig}
        */
        get: function (id) {
            // Logger.debug(`WechatConfig get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatConfig|get',
                params: { id }
            });
        },

        /**
        * @param {OrgWechatConfig} object
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
