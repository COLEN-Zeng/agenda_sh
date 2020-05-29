

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

module.exports = (client) => ({

    CustomerSession: {

        /**
        * @returns {AuthCustomerSession}
        */
        get: function (id) {
            // Logger.debug(`CustomerSession get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerSession|get',
                params: { id }
            });
        },

        /**
        * @param {AuthCustomerSession} object
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
        * @returns {AuthUserIdSessionId}
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
        * @returns {AuthWechatAccessToken}
        */
        get: function (id) {
            // Logger.debug(`WechatAccessToken get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatAccessToken|get',
                params: { id }
            });
        },

        /**
        * @param {AuthWechatAccessToken} object
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
