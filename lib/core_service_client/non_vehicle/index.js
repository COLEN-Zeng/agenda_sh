
// 本文件由toolchain/code_generator/service/build脚本自动生成
/// <reference path = "global.d.ts" />
const mutex = require('process-key-mutex');

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {NonVehicleClaimApplyRequest} request
    * @returns {Promise<NonVehicleClaimApplyResponse>}
    */
    claimApply: function (request = null, timeout = 30) {
        return client.call('claim.apply', request, timeout);
    },

    /**
    * @param {NonVehicleEndorsementApplyRequest} request
    * @returns {Promise<NonVehicleEndorsementApplyResponse>}
    */
    endorsementApply: function (request = null, timeout = 30) {
        return client.call('endorsement.apply', request, timeout);
    },

    /**
    * @param {NonVehicleEndorsementFinalizeRequest} request
    * @returns {Promise<NonVehicleEndorsementFinalizeResponse>}
    */
    endorsementFinalize: function (request = null, timeout = 30) {
        return client.call('endorsement.finalize', request, timeout);
    },

    /**
    * @param {NonVehicleEndorsementInsureRequest} request
    * @returns {Promise<NonVehicleEndorsementInsureResponse>}
    */
    endorsementInsure: function (request = null, timeout = 30) {
        return client.call('endorsement.insure', request, timeout);
    },

    /**
    * @param {NonVehicleEndorsementPaidConfirmRequest} request
    * @returns {Promise<NonVehicleEndorsementPaidConfirmResponse>}
    */
    endorsementPaidConfirm: function (request = null, timeout = 30) {
        return client.call('endorsement.paid_confirm', request, timeout);
    },

    /**
    * @param {NonVehicleEndorsementRefundConfirmRequest} request
    * @returns {Promise<NonVehicleEndorsementRefundConfirmResponse>}
    */
    endorsementRefundConfirm: function (request = null, timeout = 30) {
        return client.call('endorsement.refund_confirm', request, timeout);
    },

    /**
    * @param {NonVehicleIntelligentUnderwriteCallbackRequest} request
    * @returns {Promise<NonVehicleIntelligentUnderwriteCallbackResponse>}
    */
    intelligentUnderwriteCallback: function (request = null, timeout = 30) {
        return client.call('intelligent_underwrite.callback', request, timeout);
    },

    /**
    * @param {NonVehicleIntelligentUnderwriteRedirectRequest} request
    * @returns {Promise<NonVehicleIntelligentUnderwriteRedirectResponse>}
    */
    intelligentUnderwriteRedirect: function (request = null, timeout = 30) {
        return client.call('intelligent_underwrite.redirect', request, timeout);
    },

    /**
    * @param {NonVehicleNegotiationApplyRequest} request
    * @returns {Promise<NonVehicleNegotiationApplyResponse>}
    */
    negotiationApply: function (request = null, timeout = 30) {
        return client.call('negotiation.apply', request, timeout);
    },

    /**
    * @param {NonVehicleNegotiationFinalizeRequest} request
    * @returns {Promise<NonVehicleNegotiationFinalizeResponse>}
    */
    negotiationFinalize: function (request = null, timeout = 30) {
        return client.call('negotiation.finalize', request, timeout);
    },

    /**
    * @param {NonVehicleNegotiationGetRequest} request
    * @returns {Promise<NonVehicleNegotiationGetResponse>}
    */
    negotiationGet: function (request = null, timeout = 30) {
        return client.call('negotiation.get', request, timeout);
    },

    /**
    * @param {NonVehicleNegotiationInfoSupplyRequest} request
    * @returns {Promise<NonVehicleNegotiationInfoSupplyResponse>}
    */
    negotiationInfoSupply: function (request = null, timeout = 30) {
        return client.call('negotiation.info.supply', request, timeout);
    },

    /**
    * @param {NonVehicleNegotiationListRequest} request
    * @returns {Promise<NonVehicleNegotiationListResponse>}
    */
    negotiationList: function (request = null, timeout = 30) {
        return client.call('negotiation.list', request, timeout);
    },

    /**
    * @param {NonVehiclePaymentSubmitRequest} request
    * @returns {Promise<NonVehiclePaymentSubmitResponse>}
    */
    paymentSubmit: function (request = null, timeout = 30) {
        return client.call('payment.submit', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyCancelCallbackRequest} request
    * @returns {Promise<NonVehiclePolicyCancelCallbackResponse>}
    */
    policyCancelCallback: function (request = null, timeout = 30) {
        return client.call('policy.cancel_callback', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyClaimCallbackRequest} request
    * @returns {Promise<NonVehiclePolicyClaimCallbackResponse>}
    */
    policyClaimCallback: function (request = null, timeout = 30) {
        return client.call('policy.claim_callback', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyElectronicCallbackRequest} request
    * @returns {Promise<NonVehiclePolicyElectronicCallbackResponse>}
    */
    policyElectronicCallback: function (request = null, timeout = 30) {
        return client.call('policy.electronic_callback', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyInfoSupplyRequest} request
    * @returns {Promise<NonVehiclePolicyInfoSupplyResponse>}
    */
    policyInfoSupply: function (request = null, timeout = 30) {
        return client.call('policy.info.supply', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyInsureRequest} request
    * @returns {Promise<NonVehiclePolicyInsureResponse>}
    */
    policyInsure: function (request = null, timeout = 30) {
        return client.call('policy.insure', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyInsureCallbackRequest} request
    * @returns {Promise<NonVehiclePolicyInsureCallbackResponse>}
    */
    policyInsureCallback: function (request = null, timeout = 30) {
        return client.call('policy.insure_callback', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyPayRequest} request
    * @returns {Promise<NonVehiclePolicyPayResponse>}
    */
    policyPay: function (request = null, timeout = 30) {
        return client.call('policy.pay', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyPayCallbackRequest} request
    * @returns {Promise<NonVehiclePolicyPayCallbackResponse>}
    */
    policyPayCallback: function (request = null, timeout = 30) {
        return client.call('policy.pay_callback', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyRenewRequest} request
    * @returns {Promise<NonVehiclePolicyRenewResponse>}
    */
    policyRenew: function (request = null, timeout = 30) {
        return client.call('policy.renew', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyRevisitCallbackRequest} request
    * @returns {Promise<NonVehiclePolicyRevisitCallbackResponse>}
    */
    policyRevisitCallback: function (request = null, timeout = 30) {
        return client.call('policy.revisit_callback', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyUnderwriteFinalizeRequest} request
    * @returns {Promise<NonVehiclePolicyUnderwriteFinalizeResponse>}
    */
    policyUnderwriteFinalize: function (request = null, timeout = 30) {
        return client.call('policy.underwrite.finalize', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyUnderwriteInfoSupplyRequest} request
    * @returns {Promise<NonVehiclePolicyUnderwriteInfoSupplyResponse>}
    */
    policyUnderwriteInfoSupply: function (request = null, timeout = 30) {
        return client.call('policy.underwrite.info.supply', request, timeout);
    },

    /**
    * @param {NonVehiclePolicyWithdrawRequest} request
    * @returns {Promise<NonVehiclePolicyWithdrawResponse>}
    */
    policyWithdraw: function (request = null, timeout = 30) {
        return client.call('policy.withdraw', request, timeout);
    },

    /**
    * @param {NonVehiclePremiumCalcRequest} request
    * @returns {Promise<NonVehiclePremiumCalcResponse>}
    */
    premiumCalc: function (request = null, timeout = 30) {
        return client.call('premium.calc', request, timeout);
    },

    /**
    * @param {NonVehiclePromotionGetRequest} request
    * @returns {Promise<NonVehiclePromotionGetResponse>}
    */
    promotionGet: function (request = null, timeout = 30) {
        return client.call('promotion.get', request, timeout);
    },

    /**
    * @param {NonVehicleProposalUnderwriteRequest} request
    * @returns {Promise<NonVehicleProposalUnderwriteResponse>}
    */
    proposalUnderwrite: function (request = null, timeout = 30) {
        return client.call('proposal.underwrite', request, timeout);
    },

    /**
    * @param {NonVehicleProviderMiddlewareHandleRequest} request
    * @returns {Promise<NonVehicleProviderMiddlewareHandleResponse>}
    */
    providerMiddlewareHandle: function (request = null, timeout = 30) {
        return client.call('provider_middleware.handle', request, timeout);
    },

    /**
    * @param {NonVehicleQuotationCreateRequest} request
    * @returns {Promise<NonVehicleQuotationCreateResponse>}
    */
    quotationCreate: function (request = null, timeout = 30) {
        return client.call('quotation.create', request, timeout);
    },

    /**
    * @param {NonVehicleQuotationGetRequest} request
    * @returns {Promise<NonVehicleQuotationGetResponse>}
    */
    quotationGet: function (request = null, timeout = 30) {
        return client.call('quotation.get', request, timeout);
    },

    /**
    * @param {NonVehicleQuotationQuoteRequest} request
    * @returns {Promise<NonVehicleQuotationQuoteResponse>}
    */
    quotationQuote: function (request = null, timeout = 30) {
        return client.call('quotation.quote', request, timeout);
    },

    /**
    * @param {NonVehicleReceiptSubmitRequest} request
    * @returns {Promise<NonVehicleReceiptSubmitResponse>}
    */
    receiptSubmit: function (request = null, timeout = 30) {
        return client.call('receipt.submit', request, timeout);
    },

    /**
    * @param {NonVehicleRevisitSubmitRequest} request
    * @returns {Promise<NonVehicleRevisitSubmitResponse>}
    */
    revisitSubmit: function (request = null, timeout = 30) {
        return client.call('revisit.submit', request, timeout);
    },

    /**
    * @param {NonVehicleSurrenderRequest} request
    * @returns {Promise<NonVehicleSurrenderResponse>}
    */
    surrender: function (request = null, timeout = 30) {
        return client.call('surrender', request, timeout);
    },

    /**
    * @param {NonVehicleThirdPartyProductPageRedirectRequest} request
    * @returns {Promise<NonVehicleThirdPartyProductPageRedirectResponse>}
    */
    thirdPartyProductPageRedirect: function (request = null, timeout = 30) {
        return client.call('third_party.product_page.redirect', request, timeout);
    },

    /**
    * @param {NonVehicleTraceAddRequest} request
    * @returns {Promise<NonVehicleTraceAddResponse>}
    */
    traceAdd: function (request = null, timeout = 30) {
        return client.call('trace.add', request, timeout);
    },

    /**
    * @param {NonVehicleTraceGetRequest} request
    * @returns {Promise<NonVehicleTraceGetResponse>}
    */
    traceGet: function (request = null, timeout = 30) {
        return client.call('trace.get', request, timeout);
    },

    /**
    * @param {NonVehicleWithholdingApplyRequest} request
    * @returns {Promise<NonVehicleWithholdingApplyResponse>}
    */
    withholdingApply: function (request = null, timeout = 30) {
        return client.call('withholding.apply', request, timeout);
    },

    /**
    * @param {NonVehicleWithholdingSubmitRequest} request
    * @returns {Promise<NonVehicleWithholdingSubmitResponse>}
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
