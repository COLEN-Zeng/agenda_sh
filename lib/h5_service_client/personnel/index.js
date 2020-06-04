
// 本文件由toolchain/code_generator/h5_service_client/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {H5PersonnelCommissionPromotionRateChangeRequest} request
    * @returns {Promise<H5PersonnelCommissionPromotionRateChangeResponse>}
    */
    commissionPromotionRateChange: function (request = null, timeout = 10) {
        return client.call('commission_promotion_rate.change', request, timeout);
    },

    /**
    * @param {H5PersonnelCustomerVisitRecordAddRequest} request
    * @returns {Promise<H5PersonnelCustomerVisitRecordAddResponse>}
    */
    customerVisitRecordAdd: function (request = null, timeout = 10) {
        return client.call('customer.visit_record.add', request, timeout);
    },

    /**
    * @param {H5PersonnelDailyWechatMsgSendRequest} request
    * @returns {Promise<H5PersonnelDailyWechatMsgSendResponse>}
    */
    dailyWechatMsgSend: function (request = null, timeout = 10) {
        return client.call('daily_wechat_msg.send', request, timeout);
    },

    /**
    * @param {H5PersonnelEmployeeIdGenRequest} request
    * @returns {Promise<H5PersonnelEmployeeIdGenResponse>}
    */
    employeeIdGen: function (request = null, timeout = 10) {
        return client.call('employee_id.gen', request, timeout);
    },

    /**
    * @param {H5PersonnelIncomeRecordAddRequest} request
    * @returns {Promise<H5PersonnelIncomeRecordAddResponse>}
    */
    incomeRecordAdd: function (request = null, timeout = 10) {
        return client.call('income_record.add', request, timeout);
    },

    /**
    * @param {H5PersonnelIncomeRecordChangeRequest} request
    * @returns {Promise<H5PersonnelIncomeRecordChangeResponse>}
    */
    incomeRecordChange: function (request = null, timeout = 10) {
        return client.call('income_record.change', request, timeout);
    },

    /**
    * @param {H5PersonnelIncomeRecordFindRequest} request
    * @returns {Promise<H5PersonnelIncomeRecordFindResponse>}
    */
    incomeRecordFind: function (request = null, timeout = 10) {
        return client.call('income_record.find', request, timeout);
    },

    /**
    * @param {H5PersonnelIncomeRecordQueryRequest} request
    * @returns {Promise<H5PersonnelIncomeRecordQueryResponse>}
    */
    incomeRecordQuery: function (request = null, timeout = 10) {
        return client.call('income_record.query', request, timeout);
    },

    /**
    * @param {H5PersonnelInfoGetByAccountIdRequest} request
    * @returns {Promise<H5PersonnelInfoGetByAccountIdResponse>}
    */
    infoGetByAccountId: function (request = null, timeout = 10) {
        return client.call('info.get_by_accountId', request, timeout);
    },

    /**
    * @param {H5PersonnelOrgPersonnelInfoGetRequest} request
    * @returns {Promise<H5PersonnelOrgPersonnelInfoGetResponse>}
    */
    orgPersonnelInfoGet: function (request = null, timeout = 10) {
        return client.call('org_personnel_info.get', request, timeout);
    },

    /**
    * @param {H5PersonnelPlatformMsgPushRequest} request
    * @returns {Promise<H5PersonnelPlatformMsgPushResponse>}
    */
    platformMsgPush: function (request = null, timeout = 10) {
        return client.call('platform_msg.push', request, timeout);
    },

    /**
    * @param {H5PersonnelPromotionGetRequest} request
    * @returns {Promise<H5PersonnelPromotionGetResponse>}
    */
    promotionGet: function (request = null, timeout = 10) {
        return client.call('promotion.get', request, timeout);
    },

    /**
    * @param {H5PersonnelShareAddRequest} request
    * @returns {Promise<H5PersonnelShareAddResponse>}
    */
    shareAdd: function (request = null, timeout = 10) {
        return client.call('share.add', request, timeout);
    },

    /**
    * @param {H5PersonnelShopConfigGetRequest} request
    * @returns {Promise<H5PersonnelShopConfigGetResponse>}
    */
    shopConfigGet: function (request = null, timeout = 10) {
        return client.call('shop.config.get', request, timeout);
    },

    /**
    * @param {H5PersonnelStatisticGetRequest} request
    * @returns {Promise<H5PersonnelStatisticGetResponse>}
    */
    statisticGet: function (request = null, timeout = 10) {
        return client.call('statistic.get', request, timeout);
    },

    /**
    * @param {H5PersonnelStatisticNewMemberIncreaseRequest} request
    * @returns {Promise<H5PersonnelStatisticNewMemberIncreaseResponse>}
    */
    statisticNewMemberIncrease: function (request = null, timeout = 10) {
        return client.call('statistic.new_member.increase', request, timeout);
    },

    /**
    * @param {H5PersonnelSubGetRequest} request
    * @returns {Promise<H5PersonnelSubGetResponse>}
    */
    subGet: function (request = null, timeout = 10) {
        return client.call('sub.get', request, timeout);
    },

    /**
    * @param {H5PersonnelWechatGetRequest} request
    * @returns {Promise<H5PersonnelWechatGetResponse>}
    */
    wechatGet: function (request = null, timeout = 10) {
        return client.call('wechat.get', request, timeout);
    },

    /**
    * @param {H5PersonnelWechatSetRequest} request
    * @returns {Promise<H5PersonnelWechatSetResponse>}
    */
    wechatSet: function (request = null, timeout = 10) {
        return client.call('wechat.set', request, timeout);
    },

    /**
    * @param {H5PersonnelWechatUserInfoPullRequest} request
    * @returns {Promise<H5PersonnelWechatUserInfoPullResponse>}
    */
    wechatUserInfoPull: function (request = null, timeout = 10) {
        return client.call('wechat.user.info.pull', request, timeout);
    },

    /**
    * @param {H5PersonnelWithdrawalRecordAddRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordAddResponse>}
    */
    withdrawalRecordAdd: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.add', request, timeout);
    },

    /**
    * @param {H5PersonnelWithdrawalRecordChangeRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordChangeResponse>}
    */
    withdrawalRecordChange: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.change', request, timeout);
    },

    /**
    * @param {H5PersonnelWithdrawalRecordCurrentGetRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordCurrentGetResponse>}
    */
    withdrawalRecordCurrentGet: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.current.get', request, timeout);
    },

    /**
    * @param {H5PersonnelWithdrawalRecordFindRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordFindResponse>}
    */
    withdrawalRecordFind: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.find', request, timeout);
    },

    Model: require('./model')(client)
});
