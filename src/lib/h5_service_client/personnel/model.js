

// 本文件为微服务对外提供的ORM接口类
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

module.exports = (client) => ({

    CustomerVisitRecord: {

        /**
        * @returns {Promise<H5PersonnelCustomerVisitRecord>}
        */
        get: function (id) {
            // Logger.debug(`CustomerVisitRecord get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerVisitRecord|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelCustomerVisitRecord} object
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
        * @returns {Promise<H5PersonnelCustomerVisitRecord[]>}
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
        * @returns {Promise<H5PersonnelIncomeRecord>}
        */
        get: function (id) {
            // Logger.debug(`IncomeRecord get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'IncomeRecord|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelIncomeRecord} object
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
        * @returns {Promise<H5PersonnelIncomeRecord[]>}
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
        * @returns {Promise<H5PersonnelInfo>}
        */
        get: function (id) {
            // Logger.debug(`Info get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Info|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelInfo} object
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
        * @returns {Promise<H5PersonnelInfo[]>}
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
        * @returns {Promise<H5PersonnelJobRank>}
        */
        get: function (id) {
            // Logger.debug(`JobRank get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'JobRank|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelJobRank} object
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
        * @returns {Promise<H5PersonnelJobRank[]>}
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
        * @returns {Promise<H5PersonnelNote>}
        */
        get: function (id) {
            // Logger.debug(`Note get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Note|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelNote} object
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
        * @returns {Promise<H5PersonnelProposal>}
        */
        get: function (id) {
            // Logger.debug(`Proposal get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'Proposal|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelProposal} object
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
        * @returns {Promise<H5PersonnelProposal[]>}
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
        * @returns {Promise<H5PersonnelShare>}
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
        * @returns {Promise<H5PersonnelShare[]>}
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
        * @returns {Promise<H5PersonnelShopConfig>}
        */
        get: function (id) {
            // Logger.debug(`ShopConfig get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'ShopConfig|get',
                params: { id }
            });
        },

        /**
        * @returns {Promise<H5PersonnelShopConfig>}
        */
        getDefaultValueIfNull: function (id) {
            // Logger.debug(`ShopConfig getDefaultValueIfNull ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'ShopConfig|getDefaultValueIfNull',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelShopConfig} object
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
        * @returns {Promise<H5PersonnelStatistic[]>}
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
        * @returns {Promise<H5PersonnelTmpProposal>}
        */
        get: function (id) {
            // Logger.debug(`TmpProposal get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'TmpProposal|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelTmpProposal} object
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
        * @returns {Promise<H5PersonnelVisitingCard>}
        */
        get: function (id) {
            // Logger.debug(`VisitingCard get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'VisitingCard|get',
                params: { id }
            });
        },

        /**
        * @returns {Promise<H5PersonnelVisitingCard>}
        */
        getDefaultValueIfNull: function (id) {
            // Logger.debug(`VisitingCard getDefaultValueIfNull ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'VisitingCard|getDefaultValueIfNull',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelVisitingCard} object
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
        * @returns {Promise<H5PersonnelWechat[]>}
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
        * @returns {Promise<H5PersonnelWechatInfo>}
        */
        get: function (id) {
            // Logger.debug(`WechatInfo get ${id}`);
            return client.call('model.operate', {
                modelAndOperation: 'WechatInfo|get',
                params: { id }
            });
        },

        /**
        * @param {H5PersonnelWechatInfo} object
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
        * @returns {Promise<H5PersonnelWithdrawalRecord>}
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
        * @returns {Promise<H5PersonnelWithdrawalRecord[]>}
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

        * @returns {Promise<H5PersonnelCustomerInfo>}
        */
        fetch: function (subject, object) {
            // Logger.debug(`CustomerInfo fetch ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'CustomerInfo|fetch',
                params: { subject, object }
            });
        },

        /**
        * @param {H5PersonnelCustomerInfo} relation
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
        * @returns {PromiseH5PersonnelCustomerInfo[]>}
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
        * @param {H5PersonnelCustomerPolicy} relation
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
        * @returns {PromiseH5PersonnelCustomerPolicy[]>}
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

        * @returns {Promise<H5PersonnelUserProposal>}
        */
        fetch: function (subject, object) {
            // Logger.debug(`UserProposal fetch ${subject} ${object}`);
            return client.call('model.operate', {
                modelAndOperation: 'UserProposal|fetch',
                params: { subject, object }
            });
        },

        /**
        * @param {H5PersonnelUserProposal} relation
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
        * @returns {PromiseH5PersonnelUserProposal[]>}
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
        * @param {H5PersonnelUserQuotation} relation
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
        * @returns {PromiseH5PersonnelUserQuotation[]>}
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
