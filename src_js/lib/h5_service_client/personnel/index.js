
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {PersonnelCommissionPromotionRateChangeRequest} request
    * @returns {Promise<PersonnelCommissionPromotionRateChangeResponse>}
    */
    commissionPromotionRateChange: function (request = null, timeout = 10) {
        return client.call('commission_promotion_rate.change', request, timeout);
    },

    /**
    * @param {PersonnelCustomerVisitRecordAddRequest} request
    * @returns {Promise<PersonnelCustomerVisitRecordAddResponse>}
    */
    customerVisitRecordAdd: function (request = null, timeout = 10) {
        return client.call('customer.visit_record.add', request, timeout);
    },

    /**
    * @param {PersonnelDailyWechatMsgSendRequest} request
    * @returns {Promise<PersonnelDailyWechatMsgSendResponse>}
    */
    dailyWechatMsgSend: function (request = null, timeout = 10) {
        return client.call('daily_wechat_msg.send', request, timeout);
    },

    /**
    * @param {PersonnelEmployeeIdGenRequest} request
    * @returns {Promise<PersonnelEmployeeIdGenResponse>}
    */
    employeeIdGen: function (request = null, timeout = 10) {
        return client.call('employee_id.gen', request, timeout);
    },

    /**
    * @param {PersonnelIncomeRecordAddRequest} request
    * @returns {Promise<PersonnelIncomeRecordAddResponse>}
    */
    incomeRecordAdd: function (request = null, timeout = 10) {
        return client.call('income_record.add', request, timeout);
    },

    /**
    * @param {PersonnelIncomeRecordChangeRequest} request
    * @returns {Promise<PersonnelIncomeRecordChangeResponse>}
    */
    incomeRecordChange: function (request = null, timeout = 10) {
        return client.call('income_record.change', request, timeout);
    },

    /**
    * @param {PersonnelIncomeRecordFindRequest} request
    * @returns {Promise<PersonnelIncomeRecordFindResponse>}
    */
    incomeRecordFind: function (request = null, timeout = 10) {
        return client.call('income_record.find', request, timeout);
    },

    /**
    * @param {PersonnelIncomeRecordQueryRequest} request
    * @returns {Promise<PersonnelIncomeRecordQueryResponse>}
    */
    incomeRecordQuery: function (request = null, timeout = 10) {
        return client.call('income_record.query', request, timeout);
    },

    /**
    * @param {PersonnelInfoGetByAccountIdRequest} request
    * @returns {Promise<PersonnelInfoGetByAccountIdResponse>}
    */
    infoGetByAccountId: function (request = null, timeout = 10) {
        return client.call('info.get_by_accountId', request, timeout);
    },

    /**
    * @param {PersonnelOrgPersonnelInfoGetRequest} request
    * @returns {Promise<PersonnelOrgPersonnelInfoGetResponse>}
    */
    orgPersonnelInfoGet: function (request = null, timeout = 10) {
        return client.call('org_personnel_info.get', request, timeout);
    },

    /**
    * @param {PersonnelPlatformMsgPushRequest} request
    * @returns {Promise<PersonnelPlatformMsgPushResponse>}
    */
    platformMsgPush: function (request = null, timeout = 10) {
        return client.call('platform_msg.push', request, timeout);
    },

    /**
    * @param {PersonnelPromotionGetRequest} request
    * @returns {Promise<PersonnelPromotionGetResponse>}
    */
    promotionGet: function (request = null, timeout = 10) {
        return client.call('promotion.get', request, timeout);
    },

    /**
    * @param {PersonnelShareAddRequest} request
    * @returns {Promise<PersonnelShareAddResponse>}
    */
    shareAdd: function (request = null, timeout = 10) {
        return client.call('share.add', request, timeout);
    },

    /**
    * @param {PersonnelShopConfigGetRequest} request
    * @returns {Promise<PersonnelShopConfigGetResponse>}
    */
    shopConfigGet: function (request = null, timeout = 10) {
        return client.call('shop.config.get', request, timeout);
    },

    /**
    * @param {PersonnelStatisticGetRequest} request
    * @returns {Promise<PersonnelStatisticGetResponse>}
    */
    statisticGet: function (request = null, timeout = 10) {
        return client.call('statistic.get', request, timeout);
    },

    /**
    * @param {PersonnelStatisticNewMemberIncreaseRequest} request
    * @returns {Promise<PersonnelStatisticNewMemberIncreaseResponse>}
    */
    statisticNewMemberIncrease: function (request = null, timeout = 10) {
        return client.call('statistic.new_member.increase', request, timeout);
    },

    /**
    * @param {PersonnelSubGetRequest} request
    * @returns {Promise<PersonnelSubGetResponse>}
    */
    subGet: function (request = null, timeout = 10) {
        return client.call('sub.get', request, timeout);
    },

    /**
    * @param {PersonnelWechatGetRequest} request
    * @returns {Promise<PersonnelWechatGetResponse>}
    */
    wechatGet: function (request = null, timeout = 10) {
        return client.call('wechat.get', request, timeout);
    },

    /**
    * @param {PersonnelWechatSetRequest} request
    * @returns {Promise<PersonnelWechatSetResponse>}
    */
    wechatSet: function (request = null, timeout = 10) {
        return client.call('wechat.set', request, timeout);
    },

    /**
    * @param {PersonnelWechatUserInfoPullRequest} request
    * @returns {Promise<PersonnelWechatUserInfoPullResponse>}
    */
    wechatUserInfoPull: function (request = null, timeout = 10) {
        return client.call('wechat.user.info.pull', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordAddRequest} request
    * @returns {Promise<PersonnelWithdrawalRecordAddResponse>}
    */
    withdrawalRecordAdd: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.add', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordChangeRequest} request
    * @returns {Promise<PersonnelWithdrawalRecordChangeResponse>}
    */
    withdrawalRecordChange: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.change', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordCurrentGetRequest} request
    * @returns {Promise<PersonnelWithdrawalRecordCurrentGetResponse>}
    */
    withdrawalRecordCurrentGet: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.current.get', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordFindRequest} request
    * @returns {Promise<PersonnelWithdrawalRecordFindResponse>}
    */
    withdrawalRecordFind: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.find', request, timeout);
    },

    Model: require('./model')(client)
});
