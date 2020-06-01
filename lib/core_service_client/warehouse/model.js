

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改
/// <reference path = "orm.d.ts" />

module.exports = (client) => ({

    Entrance: {

        /**
        * @param {WarehouseEntrance} object
        */
        set: function (object) {
            // Logger.debug(`Entrance set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Entrance|set',
                params: { object }
            });
        },

    },

});
