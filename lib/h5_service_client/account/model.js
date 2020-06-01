

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改
/// <reference path = "orm.d.ts" />

module.exports = (client) => ({

    Info: {

        /**
        * @returns {AccountInfo}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {AccountInfo} object
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

});
