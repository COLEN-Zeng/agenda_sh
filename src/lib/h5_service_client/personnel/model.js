

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

module.exports = (client) => ({

    CustomerVisitRecord: {

        /**
        * @returns {Promise<PersonnelCustomerVisitRecord>}
        */
        get: function (id) {
            // Logger.debug(`CustomerVisitRecord get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerVisitRecord|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelCustomerVisitRecord} object
        */
        set: function (object) {
            // Logger.debug(`CustomerVisitRecord set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerVisitRecord|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`CustomerVisitRecord has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerVisitRecord|hasObject',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelCustomerVisitRecord[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'CustomerVisitRecord|find',
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
            // Logger.debug(`CustomerVisitRecord count ${JSON.stringify(where)}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerVisitRecord|countObject',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

    },

    IncomeRecord: {

        /**
        * @returns {Promise<PersonnelIncomeRecord>}
        */
        get: function (id) {
            // Logger.debug(`IncomeRecord get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'IncomeRecord|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelIncomeRecord} object
        */
        set: function (object) {
            // Logger.debug(`IncomeRecord set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'IncomeRecord|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`IncomeRecord has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'IncomeRecord|hasObject',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelIncomeRecord[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'IncomeRecord|find',
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
            // Logger.debug(`IncomeRecord count ${JSON.stringify(where)}`);
            return client.call('model.operate', {
                modelAndOperation: 'IncomeRecord|countObject',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

    },

    Info: {

        /**
        * @returns {Promise<PersonnelInfo>}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelInfo} object
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
        * @returns {Promise<PersonnelInfo[]>}
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

    JobRank: {

        /**
        * @returns {Promise<PersonnelJobRank>}
        */
        get: function (id) {
            // Logger.debug(`JobRank get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'JobRank|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelJobRank} object
        */
        set: function (object) {
            // Logger.debug(`JobRank set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'JobRank|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`JobRank has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'JobRank|hasObject',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelJobRank[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'JobRank|find',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    Note: {

        /**
        * @returns {Promise<PersonnelNote>}
        */
        get: function (id) {
            // Logger.debug(`Note get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Note|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelNote} object
        */
        set: function (object) {
            // Logger.debug(`Note set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Note|set',
                params: { object }
            });
        },

    },

    Proposal: {

        /**
        * @returns {Promise<PersonnelProposal>}
        */
        get: function (id) {
            // Logger.debug(`Proposal get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Proposal|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelProposal} object
        */
        set: function (object) {
            // Logger.debug(`Proposal set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Proposal|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`Proposal has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Proposal|hasObject',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelProposal[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Proposal|find',
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
            // Logger.debug(`Proposal count ${JSON.stringify(where)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Proposal|countObject',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

    },

    Share: {

        /**
        * @returns {Promise<PersonnelShare>}
        */
        get: function (id) {
            // Logger.debug(`Share get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Share|get',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelShare[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Share|find',
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
            // Logger.debug(`Share count ${JSON.stringify(where)}`);
            return client.call('model.operate', {
                modelAndOperation: 'Share|countObject',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

    },

    ShopConfig: {

        /**
        * @returns {Promise<PersonnelShopConfig>}
        */
        get: function (id) {
            // Logger.debug(`ShopConfig get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'ShopConfig|get',
                params: { id }
            });
        },

        /**
        * @returns {Promise<PersonnelShopConfig>}
        */
        getDefaultValueIfNull: function (id) {
            // Logger.debug(`ShopConfig getDefaultValueIfNull ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'ShopConfig|getDefaultValueIfNull',
                params: { id }
            });
        },

        /**
        * @param {PersonnelShopConfig} object
        */
        set: function (object) {
            // Logger.debug(`ShopConfig set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'ShopConfig|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`ShopConfig has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'ShopConfig|hasObject',
                params: { id }
            });
        },

    },

    Statistic: {

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelStatistic[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Statistic|find',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    TmpProposal: {

        /**
        * @returns {Promise<PersonnelTmpProposal>}
        */
        get: function (id) {
            // Logger.debug(`TmpProposal get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'TmpProposal|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelTmpProposal} object
        */
        set: function (object) {
            // Logger.debug(`TmpProposal set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'TmpProposal|set',
                params: { object }
            });
        },

        del: function (id) {
            // Logger.debug(`TmpProposal del ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'TmpProposal|del',
                params: { id }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`TmpProposal has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'TmpProposal|hasObject',
                params: { id }
            });
        },

    },

    VisitingCard: {

        /**
        * @returns {Promise<PersonnelVisitingCard>}
        */
        get: function (id) {
            // Logger.debug(`VisitingCard get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'VisitingCard|get',
                params: { id }
            });
        },

        /**
        * @returns {Promise<PersonnelVisitingCard>}
        */
        getDefaultValueIfNull: function (id) {
            // Logger.debug(`VisitingCard getDefaultValueIfNull ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'VisitingCard|getDefaultValueIfNull',
                params: { id }
            });
        },

        /**
        * @param {PersonnelVisitingCard} object
        */
        set: function (object) {
            // Logger.debug(`VisitingCard set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'VisitingCard|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`VisitingCard has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'VisitingCard|hasObject',
                params: { id }
            });
        },

    },

    Wechat: {

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelWechat[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'Wechat|find',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    WechatInfo: {

        /**
        * @returns {Promise<PersonnelWechatInfo>}
        */
        get: function (id) {
            // Logger.debug(`WechatInfo get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatInfo|get',
                params: { id }
            });
        },

        /**
        * @param {PersonnelWechatInfo} object
        */
        set: function (object) {
            // Logger.debug(`WechatInfo set ${JSON.stringify(object)}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatInfo|set',
                params: { object }
            });
        },

        /**
        * @returns {Promise<boolean>}
        */
        has: function (id) {
            // Logger.debug(`WechatInfo has ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatInfo|hasObject',
                params: { id }
            });
        },

    },

    WithdrawalRecord: {

        /**
        * @returns {Promise<PersonnelWithdrawalRecord>}
        */
        get: function (id) {
            // Logger.debug(`WithdrawalRecord get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WithdrawalRecord|get',
                params: { id }
            });
        },

        /**
        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件
        * @returns {Promise<PersonnelWithdrawalRecord[]>}
        */
        find: function ({where, sort, limit} = {}) {
            return client.call('model.operate', {
                modelAndOperation: 'WithdrawalRecord|find',
                params: Object.assign(
                    {},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    CustomerInfo: {

        /**
        * @param subject

        * @param object

        * @returns {Promise<PersonnelCustomerInfo>}
        */
        fetch: function (subject, object) {
            // Logger.debug(`CustomerInfo fetch ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerInfo|fetch',
                params: { subject, object }
            });
        },

        /**
        * @param {PersonnelCustomerInfo} relation
        */
        put: function (relation) {
            // Logger.debug(`CustomerInfo del ${JSON.stringify(relation)}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerInfo|put',
                params: { relation }
            });
        },

        /**
        * @param subject

        * @param object

        * @returns {Promise<boolean>}
        */
        has: function (subject, object) {
            // Logger.debug(`CustomerInfo has ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerInfo|hasRelation',
                params: { subject, object }
            });
        },

        /**
        * @param subject

        * @param where 过滤条件
        * @returns {Promise<number>}
        */
        count: function (subject, where = undefined) {
            // Logger.debug(`CustomerInfo count ${JSON.stringify({subject, where})}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerInfo|countRelation',
                params: Object.assign(
                    {subject},

                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

        /**
        * @param subject

        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件,
        * @returns {PromisePersonnelCustomerInfo[]>}
        */
        list: function (subject, {where, sort, limit} = {}) {
            // Logger.debug(`CustomerInfo del ${JSON.stringify({subject, options})}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerInfo|list',
                params: Object.assign(
                    {subject},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    CustomerPolicy: {

        /**
        * @param {PersonnelCustomerPolicy} relation
        */
        put: function (relation) {
            // Logger.debug(`CustomerPolicy del ${JSON.stringify(relation)}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerPolicy|put',
                params: { relation }
            });
        },

        /**
        * @param subject

        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件,
        * @returns {PromisePersonnelCustomerPolicy[]>}
        */
        list: function (subject, {where, sort, limit} = {}) {
            // Logger.debug(`CustomerPolicy del ${JSON.stringify({subject, options})}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerPolicy|list',
                params: Object.assign(
                    {subject},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    UserProposal: {

        /**
        * @param subject

        * @param object

        * @returns {Promise<PersonnelUserProposal>}
        */
        fetch: function (subject, object) {
            // Logger.debug(`UserProposal fetch ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|fetch',
                params: { subject, object }
            });
        },

        /**
        * @param {PersonnelUserProposal} relation
        */
        put: function (relation) {
            // Logger.debug(`UserProposal del ${JSON.stringify(relation)}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|put',
                params: { relation }
            });
        },

        /**
        * @param subject

        * @param object

        * @returns {Promise<boolean>}
        */
        has: function (subject, object) {
            // Logger.debug(`UserProposal has ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|hasRelation',
                params: { subject, object }
            });
        },

        /**
        * @param subject

        * @param object

        */
        remove: function (subject, object) {
            // Logger.debug(`UserProposal remove ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|remove',
                params: { subject, object }
            });
        },

        /**
        * @param subject

        */
        clear: function (subject) {
            // Logger.debug(`UserProposal clear ${subject}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|clear',
                params: { subject }
            });
        },

        /**
        * @param subject

        * @param where 过滤条件
        * @returns {Promise<number>}
        */
        count: function (subject, where = undefined) {
            // Logger.debug(`UserProposal count ${JSON.stringify({subject, where})}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|countRelation',
                params: Object.assign(
                    {subject},

                    where !== undefined ? {where: where.toJson()} : {}
                )
            });
        },

        /**
        * @param subject

        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件,
        * @returns {PromisePersonnelUserProposal[]>}
        */
        list: function (subject, {where, sort, limit} = {}) {
            // Logger.debug(`UserProposal del ${JSON.stringify({subject, options})}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|list',
                params: Object.assign(
                    {subject},

                    where !== undefined ? {where: where.toJson()} : {},
                    sort !== undefined ? {sort: Array.isArray(sort) ? sort.map(_ => _.toJson()) : sort.toJson()} : {},
                    limit !== undefined ? {limit: limit.toJson()} : {},
                )
            });
        },

    },

    UserQuotation: {

        /**
        * @param {PersonnelUserQuotation} relation
        */
        put: function (relation) {
            // Logger.debug(`UserQuotation del ${JSON.stringify(relation)}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserQuotation|put',
                params: { relation }
            });
        },

        /**
        * @param subject

        * @param object

        */
        remove: function (subject, object) {
            // Logger.debug(`UserQuotation remove ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserQuotation|remove',
                params: { subject, object }
            });
        },

        /**
        * @param subject

        */
        clear: function (subject) {
            // Logger.debug(`UserQuotation clear ${subject}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserQuotation|clear',
                params: { subject }
            });
        },

        /**
        * @param subject

        * @param {Object} options            - 选项
        * @param {Object|Array} options.sort       - 排序的字段
        * @param {Object} options.limit      - 分页的字段
        * @param {Object} options.where      - 过滤条件,
        * @returns {PromisePersonnelUserQuotation[]>}
        */
        list: function (subject, {where, sort, limit} = {}) {
            // Logger.debug(`UserQuotation del ${JSON.stringify({subject, options})}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserQuotation|list',
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
