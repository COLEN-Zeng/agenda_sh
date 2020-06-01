

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改
/// <reference path = "orm.d.ts" />

module.exports = (client) => ({

    ArticleExponent: {

        /**
        * @returns {GuestArticleArticleExponent}
        */
        get: function (id) {
            // Logger.debug(`ArticleExponent get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'ArticleExponent|get',
                params: { id }
            });
        },

        /**
        * @param {GuestArticleArticleExponent} object
        */
        set: function (object) {
            // Logger.debug(`ArticleExponent set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'ArticleExponent|set',
                params: { object }
            });
        },

    },

    Info: {

        /**
        * @returns {GuestArticleInfo}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {GuestArticleInfo} object
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

    Push: {

        /**
        * @returns {GuestArticlePush}
        */
        get: function (id) {
            // Logger.debug(`Push get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Push|get',
                params: { id }
            });
        },

        /**
        * @param {GuestArticlePush} object
        */
        set: function (object) {
            // Logger.debug(`Push set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Push|set',
                params: { object }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {GuestArticlePush[]}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Push|find',
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
        * @returns {number}
        */
        count: function (where) {
            // Logger.debug(`Push count ${JSON.stringify(where)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Push|countObject',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

    },

    ArticleReadingRecord: {

        /**
        * @param {GuestArticleArticleReadingRecord} relation
        */
        put: function (relation) {
            // Logger.debug(`ArticleReadingRecord del ${JSON.stringify(relation)}`);
            return client.call('model.operate', {
                modelAndOperation: 'ArticleReadingRecord|put',
                params: { relation }
            });
        },

        /**
        * @param subject

        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件,
        * @returns {GuestArticleArticleReadingRecord[]}
        */
        list: function (subject, {where, sort, limit} = {}) {
            // Logger.debug(`ArticleReadingRecord del ${JSON.stringify({subject, options})}`);
            return client.call('model.operate', {
                modelAndOperation: 'ArticleReadingRecord|list',
                params: Object.assign(
                    {subject},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

});
