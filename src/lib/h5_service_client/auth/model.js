

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

module.exports = (client) => ({

    CustomerSession: {

        /**
        * @returns {Promise<H5AuthCustomerSession>}
        */
        get: function (id) {
            // Logger.debug(`CustomerSession get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerSession|get',
                params: { id }
            });
        },

        /**
        * @param {H5AuthCustomerSession} object
        */
        set: function (object) {
            // Logger.debug(`CustomerSession set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerSession|set',
                params: { object }
            });
        },

    },

    UserIdSessionId: {

        /**
        * @returns {Promise<H5AuthUserIdSessionId>}
        */
        get: function (id) {
            // Logger.debug(`UserIdSessionId get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserIdSessionId|get',
                params: { id }
            });
        },

    },

    WechatAccessToken: {

        /**
        * @returns {Promise<H5AuthWechatAccessToken>}
        */
        get: function (id) {
            // Logger.debug(`WechatAccessToken get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatAccessToken|get',
                params: { id }
            });
        },

        /**
        * @param {H5AuthWechatAccessToken} object
        */
        set: function (object) {
            // Logger.debug(`WechatAccessToken set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatAccessToken|set',
                params: { object }
            });
        },

    },

});
