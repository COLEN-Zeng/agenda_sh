
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {PersonnelCommissionPromotionRateChangeRequest} request
    * @returns {PersonnelCommissionPromotionRateChangeResponse}
    */
    commissionPromotionRateChange: function (request = null, timeout = 10) {
        return client.call('commission_promotion_rate.change', request, timeout);
    },

    /**
    * @param {PersonnelEmployeeIdGenRequest} request
    * @returns {PersonnelEmployeeIdGenResponse}
    */
    employeeIdGen: function (request = null, timeout = 10) {
        return client.call('employee_id.gen', request, timeout);
    },

    /**
    * @param {PersonnelIncomeRecordAddRequest} request
    * @returns {PersonnelIncomeRecordAddResponse}
    */
    incomeRecordAdd: function (request = null, timeout = 10) {
        return client.call('income_record.add', request, timeout);
    },

    /**
    * @param {PersonnelIncomeRecordChangeRequest} request
    * @returns {PersonnelIncomeRecordChangeResponse}
    */
    incomeRecordChange: function (request = null, timeout = 10) {
        return client.call('income_record.change', request, timeout);
    },

    /**
    * @param {PersonnelIncomeRecordFindRequest} request
    * @returns {PersonnelIncomeRecordFindResponse}
    */
    incomeRecordFind: function (request = null, timeout = 10) {
        return client.call('income_record.find', request, timeout);
    },

    /**
    * @param {PersonnelInfoGetRequest} request
    * @returns {PersonnelInfoGetResponse}
    */
    infoGet: function (request = null, timeout = 10) {
        return client.call('info.get', request, timeout);
    },

    /**
    * @param {PersonnelInfoGetByAccountIdRequest} request
    * @returns {PersonnelInfoGetByAccountIdResponse}
    */
    infoGetByAccountId: function (request = null, timeout = 10) {
        return client.call('info.get_by_accountId', request, timeout);
    },

    /**
    * @param {PersonnelJobRankGetRequest} request
    * @returns {PersonnelJobRankGetResponse}
    */
    jobRankGet: function (request = null, timeout = 10) {
        return client.call('job_rank.get', request, timeout);
    },

    /**
    * @param {PersonnelOrgPersonnelInfoGetRequest} request
    * @returns {PersonnelOrgPersonnelInfoGetResponse}
    */
    orgPersonnelInfoGet: function (request = null, timeout = 10) {
        return client.call('org_personnel_info.get', request, timeout);
    },

    /**
    * @param {PersonnelPlatformMsgPushRequest} request
    * @returns {PersonnelPlatformMsgPushResponse}
    */
    platformMsgPush: function (request = null, timeout = 10) {
        return client.call('platform_msg.push', request, timeout);
    },

    /**
    * @param {PersonnelPromotionGetRequest} request
    * @returns {PersonnelPromotionGetResponse}
    */
    promotionGet: function (request = null, timeout = 10) {
        return client.call('promotion.get', request, timeout);
    },

    /**
    * @param {PersonnelProposalStashDelRequest} request
    * @returns {PersonnelProposalStashDelResponse}
    */
    proposalStashDel: function (request = null, timeout = 10) {
        return client.call('proposal.stash.del', request, timeout);
    },

    /**
    * @param {PersonnelProposalStashGetRequest} request
    * @returns {PersonnelProposalStashGetResponse}
    */
    proposalStashGet: function (request = null, timeout = 10) {
        return client.call('proposal.stash.get', request, timeout);
    },

    /**
    * @param {PersonnelProposalStashRequest} request
    * @returns {PersonnelProposalStashResponse}
    */
    proposalStash: function (request = null, timeout = 10) {
        return client.call('proposal.stash', request, timeout);
    },

    /**
    * @param {PersonnelProposalIdAddRequest} request
    * @returns {PersonnelProposalIdAddResponse}
    */
    proposalIdAdd: function (request = null, timeout = 10) {
        return client.call('proposal_id.add', request, timeout);
    },

    /**
    * @param {PersonnelProposalIdDelRequest} request
    * @returns {PersonnelProposalIdDelResponse}
    */
    proposalIdDel: function (request = null, timeout = 10) {
        return client.call('proposal_id.del', request, timeout);
    },

    /**
    * @param {PersonnelProposalIdListRequest} request
    * @returns {PersonnelProposalIdListResponse}
    */
    proposalIdList: function (request = null, timeout = 10) {
        return client.call('proposal_id.list', request, timeout);
    },

    /**
    * @param {PersonnelQuotationIdAddRequest} request
    * @returns {PersonnelQuotationIdAddResponse}
    */
    quotationIdAdd: function (request = null, timeout = 10) {
        return client.call('quotation_id.add', request, timeout);
    },

    /**
    * @param {PersonnelQuotationIdDelRequest} request
    * @returns {PersonnelQuotationIdDelResponse}
    */
    quotationIdDel: function (request = null, timeout = 10) {
        return client.call('quotation_id.del', request, timeout);
    },

    /**
    * @param {PersonnelQuotationIdListRequest} request
    * @returns {PersonnelQuotationIdListResponse}
    */
    quotationIdList: function (request = null, timeout = 10) {
        return client.call('quotation_id.list', request, timeout);
    },

    /**
    * @param {PersonnelRecommendProductUpdateRequest} request
    * @returns {PersonnelRecommendProductUpdateResponse}
    */
    recommendProductUpdate: function (request = null, timeout = 10) {
        return client.call('recommend_product.update', request, timeout);
    },

    /**
    * @param {PersonnelStatisticGetRequest} request
    * @returns {PersonnelStatisticGetResponse}
    */
    statisticGet: function (request = null, timeout = 10) {
        return client.call('statistic.get', request, timeout);
    },

    /**
    * @param {PersonnelStatisticNewMemberIncreaseRequest} request
    * @returns {PersonnelStatisticNewMemberIncreaseResponse}
    */
    statisticNewMemberIncrease: function (request = null, timeout = 10) {
        return client.call('statistic.new_member.increase', request, timeout);
    },

    /**
    * @param {PersonnelSubGetRequest} request
    * @returns {PersonnelSubGetResponse}
    */
    subGet: function (request = null, timeout = 10) {
        return client.call('sub.get', request, timeout);
    },

    /**
    * @param {PersonnelWechatGetRequest} request
    * @returns {PersonnelWechatGetResponse}
    */
    wechatGet: function (request = null, timeout = 10) {
        return client.call('wechat.get', request, timeout);
    },

    /**
    * @param {PersonnelWechatSetRequest} request
    * @returns {PersonnelWechatSetResponse}
    */
    wechatSet: function (request = null, timeout = 10) {
        return client.call('wechat.set', request, timeout);
    },

    /**
    * @param {PersonnelWechatUserInfoPullRequest} request
    * @returns {PersonnelWechatUserInfoPullResponse}
    */
    wechatUserInfoPull: function (request = null, timeout = 10) {
        return client.call('wechat.user.info.pull', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordAddRequest} request
    * @returns {PersonnelWithdrawalRecordAddResponse}
    */
    withdrawalRecordAdd: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.add', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordChangeRequest} request
    * @returns {PersonnelWithdrawalRecordChangeResponse}
    */
    withdrawalRecordChange: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.change', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordCurrentGetRequest} request
    * @returns {PersonnelWithdrawalRecordCurrentGetResponse}
    */
    withdrawalRecordCurrentGet: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.current.get', request, timeout);
    },

    /**
    * @param {PersonnelWithdrawalRecordFindRequest} request
    * @returns {PersonnelWithdrawalRecordFindResponse}
    */
    withdrawalRecordFind: function (request = null, timeout = 10) {
        return client.call('withdrawal_record.find', request, timeout);
    },

    Model: require('./model')(client)
});
