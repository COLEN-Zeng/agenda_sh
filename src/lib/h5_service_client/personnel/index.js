
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * 更新人员的佣金比例
    *
    * 接口会去校验当前险种ID是否存在，不存在则报错
    * @param {H5PersonnelCommissionPromotionRateChangeRequest} request
    * @returns {Promise<H5PersonnelCommissionPromotionRateChangeResponse>}
    */
    commissionPromotionRateChange: function (request = null, timeout = 10) {
        return client.call('commission_promotion_rate.change', request, timeout);
    },

    /**
    *
    * 入库客户来访数据
    * @param {H5PersonnelCustomerVisitRecordAddRequest} request
    * @returns {Promise<H5PersonnelCustomerVisitRecordAddResponse>}
    */
    customerVisitRecordAdd: function (request = null, timeout = 10) {
        return client.call('customer.visit_record.add', request, timeout);
    },

    /**
    * 执行每日微信消息推送任务
    * @param {H5PersonnelDailyWechatMsgSendRequest} request
    * @returns {Promise<H5PersonnelDailyWechatMsgSendResponse>}
    */
    dailyWechatMsgSend: function (request = null, timeout = 10) {
        return client.call('daily_wechat_msg.send', request, timeout);
    },

    /**
    * 生成工号
    * @param {H5PersonnelEmployeeIdGenRequest} request
    * @returns {Promise<H5PersonnelEmployeeIdGenResponse>}
    */
    employeeIdGen: function (request = null, timeout = 10) {
        return client.call('employee_id.gen', request, timeout);
    },

    /**
    * 保单承保增加收入
    *
    * 预约类险种不通过订阅器自动添加收入记录（订阅器会去核心查询推广费，目前预约类险种不支持从核心查推广费）
    * @param {H5PersonnelIncomeRecordAddRequest} request
    * @returns {Promise<H5PersonnelIncomeRecordAddResponse>}
    */
    incomeRecordAdd: function (request = null, timeout = 10) {
        return client.call('income_record.add', request, timeout);
    },

    /**
    * 更新收入记录
    * @param {H5PersonnelIncomeRecordChangeRequest} request
    * @returns {Promise<H5PersonnelIncomeRecordChangeResponse>}
    */
    incomeRecordChange: function (request = null, timeout = 10) {
        return client.call('income_record.change', request, timeout);
    },

    /**
    * 查询收入记录
    * @param {H5PersonnelIncomeRecordFindRequest} request
    * @returns {Promise<H5PersonnelIncomeRecordFindResponse>}
    */
    incomeRecordFind: function (request = null, timeout = 10) {
        return client.call('income_record.find', request, timeout);
    },

    /**
    * 查询收入记录
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
    * 获取机构下的代理人信息
    *
    * 获取该机构下的, 所有子机构的直属成员
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
    * 获取人员的佣金
    * @param {H5PersonnelPromotionGetRequest} request
    * @returns {Promise<H5PersonnelPromotionGetResponse>}
    */
    promotionGet: function (request = null, timeout = 10) {
        return client.call('promotion.get', request, timeout);
    },

    /**
    *
    * 入库用户分享数据
    * @param {H5PersonnelShareAddRequest} request
    * @returns {Promise<H5PersonnelShareAddResponse>}
    */
    shareAdd: function (request = null, timeout = 10) {
        return client.call('share.add', request, timeout);
    },

    /**
    *
    * 获取个人商城配置
    * @param {H5PersonnelShopConfigGetRequest} request
    * @returns {Promise<H5PersonnelShopConfigGetResponse>}
    */
    shopConfigGet: function (request = null, timeout = 10) {
        return client.call('shop.config.get', request, timeout);
    },

    /**
    *
    * 统计-获取
    * @param {H5PersonnelStatisticGetRequest} request
    * @returns {Promise<H5PersonnelStatisticGetResponse>}
    */
    statisticGet: function (request = null, timeout = 10) {
        return client.call('statistic.get', request, timeout);
    },

    /**
    *
    * 统计-原子操作-新增直属成员
    * @param {H5PersonnelStatisticNewMemberIncreaseRequest} request
    * @returns {Promise<H5PersonnelStatisticNewMemberIncreaseResponse>}
    */
    statisticNewMemberIncrease: function (request = null, timeout = 10) {
        return client.call('statistic.new_member.increase', request, timeout);
    },

    /**
    * 获取人员直属下级列表
    *
    * 根据 mode 来判断 id 是 userId 还是 coreAccountId
    * @param {H5PersonnelSubGetRequest} request
    * @returns {Promise<H5PersonnelSubGetResponse>}
    */
    subGet: function (request = null, timeout = 10) {
        return client.call('sub.get', request, timeout);
    },

    /**
    * 获取微信信息
    * @param {H5PersonnelWechatGetRequest} request
    * @returns {Promise<H5PersonnelWechatGetResponse>}
    */
    wechatGet: function (request = null, timeout = 10) {
        return client.call('wechat.get', request, timeout);
    },

    /**
    * 设置微信信息
    *
    * 虽然 openId 和 unionId 都是可选，但至少传一个
    * @param {H5PersonnelWechatSetRequest} request
    * @returns {Promise<H5PersonnelWechatSetResponse>}
    */
    wechatSet: function (request = null, timeout = 10) {
        return client.call('wechat.set', request, timeout);
    },

    /**
    * 拉取微信用户头像昵称信息
    *
    * 如果用户信息里没有头像昵称则用微信用户信息替代
    * @param {H5PersonnelWechatUserInfoPullRequest} request
    * @returns {Promise<H5PersonnelWechatUserInfoPullResponse>}
    */
    wechatUserInfoPull: function (request = null, timeout = 10) {
        return client.call('wechat.user.info.pull', request, timeout);
    },

    /**
    * 添加(更新)提现记录
    *
    * null
    * @param {H5PersonnelWithdrawalRecordAddRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordAddResponse>}
    */
    withdrawalRecordAdd: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.add', request, timeout);
    },

    /**
    * 处理提现记录
    *
    * null
    * @param {H5PersonnelWithdrawalRecordChangeRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordChangeResponse>}
    */
    withdrawalRecordChange: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.change', request, timeout);
    },

    /**
    * 获取当前的提现记录
    *
    * null
    * @param {H5PersonnelWithdrawalRecordCurrentGetRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordCurrentGetResponse>}
    */
    withdrawalRecordCurrentGet: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.current.get', request, timeout);
    },

    /**
    * 获取所有记录
    * @param {H5PersonnelWithdrawalRecordFindRequest} request
    * @returns {Promise<H5PersonnelWithdrawalRecordFindResponse>}
    */
    withdrawalRecordFind: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.find', request, timeout);
    },

    Model: require('./model')(client)
});
