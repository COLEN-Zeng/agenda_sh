
// 本文件由toolchain/code_generator/service/fun脚本自动生成
const mutex = require('process-key-mutex');

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {CoreNonVehicleClaimApplyRequest} request
    * @returns {Promise<CoreNonVehicleClaimApplyResponse>}
    */
    claimApply: function (request = null, timeout = 30) {
        return client.call('claim.apply', request, timeout);
    },

    /**
    * @param {CoreNonVehicleEndorsementApplyRequest} request
    * @returns {Promise<CoreNonVehicleEndorsementApplyResponse>}
    */
    endorsementApply: function (request = null, timeout = 30) {
        return client.call('endorsement.apply', request, timeout);
    },

    /**
    * @param {CoreNonVehicleEndorsementFinalizeRequest} request
    * @returns {Promise<CoreNonVehicleEndorsementFinalizeResponse>}
    */
    endorsementFinalize: function (request = null, timeout = 30) {
        return client.call('endorsement.finalize', request, timeout);
    },

    /**
    * @param {CoreNonVehicleEndorsementInsureRequest} request
    * @returns {Promise<CoreNonVehicleEndorsementInsureResponse>}
    */
    endorsementInsure: function (request = null, timeout = 30) {
        return client.call('endorsement.insure', request, timeout);
    },

    /**
    * @param {CoreNonVehicleEndorsementPaidConfirmRequest} request
    * @returns {Promise<CoreNonVehicleEndorsementPaidConfirmResponse>}
    */
    endorsementPaidConfirm: function (request = null, timeout = 30) {
        return client.call('endorsement.paid_confirm', request, timeout);
    },

    /**
    * @param {CoreNonVehicleEndorsementRefundConfirmRequest} request
    * @returns {Promise<CoreNonVehicleEndorsementRefundConfirmResponse>}
    */
    endorsementRefundConfirm: function (request = null, timeout = 30) {
        return client.call('endorsement.refund_confirm', request, timeout);
    },

    /**
    * @param {CoreNonVehicleIntelligentUnderwriteCallbackRequest} request
    * @returns {Promise<CoreNonVehicleIntelligentUnderwriteCallbackResponse>}
    */
    intelligentUnderwriteCallback: function (request = null, timeout = 30) {
        return client.call('intelligent_underwrite.callback', request, timeout);
    },

    /**
    * @param {CoreNonVehicleIntelligentUnderwriteQuizAnswerRequest} request
    * @returns {Promise<CoreNonVehicleIntelligentUnderwriteQuizAnswerResponse>}
    */
    intelligentUnderwriteQuizAnswer: function (request = null, timeout = 30) {
        return client.call('intelligent_underwrite.quiz.answer', request, timeout);
    },

    /**
    * @param {CoreNonVehicleIntelligentUnderwriteQuizGetRequest} request
    * @returns {Promise<CoreNonVehicleIntelligentUnderwriteQuizGetResponse>}
    */
    intelligentUnderwriteQuizGet: function (request = null, timeout = 30) {
        return client.call('intelligent_underwrite.quiz.get', request, timeout);
    },

    /**
    * @param {CoreNonVehicleIntelligentUnderwriteRedirectRequest} request
    * @returns {Promise<CoreNonVehicleIntelligentUnderwriteRedirectResponse>}
    */
    intelligentUnderwriteRedirect: function (request = null, timeout = 30) {
        return client.call('intelligent_underwrite.redirect', request, timeout);
    },

    /**
    * @param {CoreNonVehicleNegotiationApplyRequest} request
    * @returns {Promise<CoreNonVehicleNegotiationApplyResponse>}
    */
    negotiationApply: function (request = null, timeout = 30) {
        return client.call('negotiation.apply', request, timeout);
    },

    /**
    * @param {CoreNonVehicleNegotiationFinalizeRequest} request
    * @returns {Promise<CoreNonVehicleNegotiationFinalizeResponse>}
    */
    negotiationFinalize: function (request = null, timeout = 30) {
        return client.call('negotiation.finalize', request, timeout);
    },

    /**
    * @param {CoreNonVehicleNegotiationGetRequest} request
    * @returns {Promise<CoreNonVehicleNegotiationGetResponse>}
    */
    negotiationGet: function (request = null, timeout = 30) {
        return client.call('negotiation.get', request, timeout);
    },

    /**
    * @param {CoreNonVehicleNegotiationInfoSupplyRequest} request
    * @returns {Promise<CoreNonVehicleNegotiationInfoSupplyResponse>}
    */
    negotiationInfoSupply: function (request = null, timeout = 30) {
        return client.call('negotiation.info.supply', request, timeout);
    },

    /**
    * @param {CoreNonVehicleNegotiationListRequest} request
    * @returns {Promise<CoreNonVehicleNegotiationListResponse>}
    */
    negotiationList: function (request = null, timeout = 30) {
        return client.call('negotiation.list', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePaymentSubmitRequest} request
    * @returns {Promise<CoreNonVehiclePaymentSubmitResponse>}
    */
    paymentSubmit: function (request = null, timeout = 30) {
        return client.call('payment.submit', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyCancelCallbackRequest} request
    * @returns {Promise<CoreNonVehiclePolicyCancelCallbackResponse>}
    */
    policyCancelCallback: function (request = null, timeout = 30) {
        return client.call('policy.cancel_callback', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyClaimCallbackRequest} request
    * @returns {Promise<CoreNonVehiclePolicyClaimCallbackResponse>}
    */
    policyClaimCallback: function (request = null, timeout = 30) {
        return client.call('policy.claim_callback', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyElectronicCallbackRequest} request
    * @returns {Promise<CoreNonVehiclePolicyElectronicCallbackResponse>}
    */
    policyElectronicCallback: function (request = null, timeout = 30) {
        return client.call('policy.electronic_callback', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyInfoSupplyRequest} request
    * @returns {Promise<CoreNonVehiclePolicyInfoSupplyResponse>}
    */
    policyInfoSupply: function (request = null, timeout = 30) {
        return client.call('policy.info.supply', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyInsureRequest} request
    * @returns {Promise<CoreNonVehiclePolicyInsureResponse>}
    */
    policyInsure: function (request = null, timeout = 30) {
        return client.call('policy.insure', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyInsureCallbackRequest} request
    * @returns {Promise<CoreNonVehiclePolicyInsureCallbackResponse>}
    */
    policyInsureCallback: function (request = null, timeout = 30) {
        return client.call('policy.insure_callback', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyPayRequest} request
    * @returns {Promise<CoreNonVehiclePolicyPayResponse>}
    */
    policyPay: function (request = null, timeout = 30) {
        return client.call('policy.pay', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyPayCallbackRequest} request
    * @returns {Promise<CoreNonVehiclePolicyPayCallbackResponse>}
    */
    policyPayCallback: function (request = null, timeout = 30) {
        return client.call('policy.pay_callback', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyRenewRequest} request
    * @returns {Promise<CoreNonVehiclePolicyRenewResponse>}
    */
    policyRenew: function (request = null, timeout = 30) {
        return client.call('policy.renew', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyRenewalRequest} request
    * @returns {Promise<CoreNonVehiclePolicyRenewalResponse>}
    */
    policyRenewal: function (request = null, timeout = 30) {
        return client.call('policy.renewal', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyRevisitCallbackRequest} request
    * @returns {Promise<CoreNonVehiclePolicyRevisitCallbackResponse>}
    */
    policyRevisitCallback: function (request = null, timeout = 30) {
        return client.call('policy.revisit_callback', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyUnderwriteFinalizeRequest} request
    * @returns {Promise<CoreNonVehiclePolicyUnderwriteFinalizeResponse>}
    */
    policyUnderwriteFinalize: function (request = null, timeout = 30) {
        return client.call('policy.underwrite.finalize', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyUnderwriteInfoSupplyRequest} request
    * @returns {Promise<CoreNonVehiclePolicyUnderwriteInfoSupplyResponse>}
    */
    policyUnderwriteInfoSupply: function (request = null, timeout = 30) {
        return client.call('policy.underwrite.info.supply', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePolicyWithdrawRequest} request
    * @returns {Promise<CoreNonVehiclePolicyWithdrawResponse>}
    */
    policyWithdraw: function (request = null, timeout = 30) {
        return client.call('policy.withdraw', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePremiumCalcRequest} request
    * @returns {Promise<CoreNonVehiclePremiumCalcResponse>}
    */
    premiumCalc: function (request = null, timeout = 30) {
        return client.call('premium.calc', request, timeout);
    },

    /**
    * @param {CoreNonVehiclePromotionGetRequest} request
    * @returns {Promise<CoreNonVehiclePromotionGetResponse>}
    */
    promotionGet: function (request = null, timeout = 30) {
        return client.call('promotion.get', request, timeout);
    },

    /**
    * @param {CoreNonVehicleProposalUnderwriteRequest} request
    * @returns {Promise<CoreNonVehicleProposalUnderwriteResponse>}
    */
    proposalUnderwrite: function (request = null, timeout = 30) {
        return client.call('proposal.underwrite', request, timeout);
    },

    /**
    * @param {CoreNonVehicleProviderMiddlewareHandleRequest} request
    * @returns {Promise<CoreNonVehicleProviderMiddlewareHandleResponse>}
    */
    providerMiddlewareHandle: function (request = null, timeout = 30) {
        return client.call('provider_middleware.handle', request, timeout);
    },

    /**
    * @param {CoreNonVehicleQuotationCreateRequest} request
    * @returns {Promise<CoreNonVehicleQuotationCreateResponse>}
    */
    quotationCreate: function (request = null, timeout = 30) {
        return client.call('quotation.create', request, timeout);
    },

    /**
    * @param {CoreNonVehicleQuotationGetRequest} request
    * @returns {Promise<CoreNonVehicleQuotationGetResponse>}
    */
    quotationGet: function (request = null, timeout = 30) {
        return client.call('quotation.get', request, timeout);
    },

    /**
    * @param {CoreNonVehicleQuotationQuoteRequest} request
    * @returns {Promise<CoreNonVehicleQuotationQuoteResponse>}
    */
    quotationQuote: function (request = null, timeout = 30) {
        return client.call('quotation.quote', request, timeout);
    },

    /**
    * @param {CoreNonVehicleReceiptSubmitRequest} request
    * @returns {Promise<CoreNonVehicleReceiptSubmitResponse>}
    */
    receiptSubmit: function (request = null, timeout = 30) {
        return client.call('receipt.submit', request, timeout);
    },

    /**
    * @param {CoreNonVehicleRevisitSubmitRequest} request
    * @returns {Promise<CoreNonVehicleRevisitSubmitResponse>}
    */
    revisitSubmit: function (request = null, timeout = 30) {
        return client.call('revisit.submit', request, timeout);
    },

    /**
    * @param {CoreNonVehicleSurrenderRequest} request
    * @returns {Promise<CoreNonVehicleSurrenderResponse>}
    */
    surrender: function (request = null, timeout = 30) {
        return client.call('surrender', request, timeout);
    },

    /**
    * @param {CoreNonVehicleThirdPartyProductPageRedirectRequest} request
    * @returns {Promise<CoreNonVehicleThirdPartyProductPageRedirectResponse>}
    */
    thirdPartyProductPageRedirect: function (request = null, timeout = 30) {
        return client.call('third_party.product_page.redirect', request, timeout);
    },

    /**
    * @param {CoreNonVehicleTraceAddRequest} request
    * @returns {Promise<CoreNonVehicleTraceAddResponse>}
    */
    traceAdd: function (request = null, timeout = 30) {
        return client.call('trace.add', request, timeout);
    },

    /**
    * @param {CoreNonVehicleTraceGetRequest} request
    * @returns {Promise<CoreNonVehicleTraceGetResponse>}
    */
    traceGet: function (request = null, timeout = 30) {
        return client.call('trace.get', request, timeout);
    },

    /**
    * @param {CoreNonVehicleWithholdingApplyRequest} request
    * @returns {Promise<CoreNonVehicleWithholdingApplyResponse>}
    */
    withholdingApply: function (request = null, timeout = 30) {
        return client.call('withholding.apply', request, timeout);
    },

    /**
    * @param {CoreNonVehicleWithholdingSubmitRequest} request
    * @returns {Promise<CoreNonVehicleWithholdingSubmitResponse>}
    */
    withholdingSubmit: function (request = null, timeout = 30) {
        return client.call('withholding.submit', request, timeout);
    },

    objectSafeUpdate: async function (...args) {
        let objectName, id, updater, timeout = 30;
        if (typeof args[1] === "function") {
            [id, updater, timeout = 30] = args;
        }
        else {
            [objectName, id, updater, timeout = 30] = args;
        }

        if (!id) throw new Error(`${__dirname} objectSafeUpdate fail: invalid id`);

        return await mutex.lock(`service_safe_update_${objectName}_${id}`, async() => {
            let object = await this.call(objectName === undefined ? 'get' : `${objectName}.get`, id, timeout);
            let returnValue = await updater(object);
            await this.call(objectName === undefined ? 'set' : `${objectName}.set`, object, timeout);
            return returnValue;
        });
    },

    Model: require('./model')(client)
});
