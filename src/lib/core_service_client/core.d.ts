// 本文件由toolchain/code_generator/core_serivce_ts/build脚本自动生成

declare const Core: {
    Account: {
        create: (request: CoreAccountCreateRequest) => Promise<CoreAccountCreateResponse>
    }
    NonVehicle: {
        claimApply: (request: CoreNonVehicleClaimApplyRequest) => Promise<CoreNonVehicleClaimApplyResponse>
        endorsementApply: (request: CoreNonVehicleEndorsementApplyRequest) => Promise<CoreNonVehicleEndorsementApplyResponse>
        endorsementFinalize: (request: CoreNonVehicleEndorsementFinalizeRequest) => Promise<CoreNonVehicleEndorsementFinalizeResponse>
        endorsementInsure: (request: CoreNonVehicleEndorsementInsureRequest) => Promise<CoreNonVehicleEndorsementInsureResponse>
        endorsementPaidConfirm: (request: CoreNonVehicleEndorsementPaidConfirmRequest) => Promise<CoreNonVehicleEndorsementPaidConfirmResponse>
        endorsementRefundConfirm: (request: CoreNonVehicleEndorsementRefundConfirmRequest) => Promise<CoreNonVehicleEndorsementRefundConfirmResponse>
        intelligentUnderwriteCallback: (request: CoreNonVehicleIntelligentUnderwriteCallbackRequest) => Promise<CoreNonVehicleIntelligentUnderwriteCallbackResponse>
        intelligentUnderwriteQuizAnswer: (request: CoreNonVehicleIntelligentUnderwriteQuizAnswerRequest) => Promise<CoreNonVehicleIntelligentUnderwriteQuizAnswerResponse>
        intelligentUnderwriteQuizGet: (request: CoreNonVehicleIntelligentUnderwriteQuizGetRequest) => Promise<CoreNonVehicleIntelligentUnderwriteQuizGetResponse>
        intelligentUnderwriteRedirect: (request: CoreNonVehicleIntelligentUnderwriteRedirectRequest) => Promise<CoreNonVehicleIntelligentUnderwriteRedirectResponse>
        negotiationApply: (request: CoreNonVehicleNegotiationApplyRequest) => Promise<CoreNonVehicleNegotiationApplyResponse>
        negotiationFinalize: (request: CoreNonVehicleNegotiationFinalizeRequest) => Promise<CoreNonVehicleNegotiationFinalizeResponse>
        negotiationGet: (request: CoreNonVehicleNegotiationGetRequest) => Promise<CoreNonVehicleNegotiationGetResponse>
        negotiationInfoSupply: (request: CoreNonVehicleNegotiationInfoSupplyRequest) => Promise<CoreNonVehicleNegotiationInfoSupplyResponse>
        negotiationList: (request: CoreNonVehicleNegotiationListRequest) => Promise<CoreNonVehicleNegotiationListResponse>
        paymentSubmit: (request: CoreNonVehiclePaymentSubmitRequest) => Promise<CoreNonVehiclePaymentSubmitResponse>
        policyCancelCallback: (request: CoreNonVehiclePolicyCancelCallbackRequest) => Promise<CoreNonVehiclePolicyCancelCallbackResponse>
        policyClaimCallback: (request: CoreNonVehiclePolicyClaimCallbackRequest) => Promise<CoreNonVehiclePolicyClaimCallbackResponse>
        policyElectronicCallback: (request: CoreNonVehiclePolicyElectronicCallbackRequest) => Promise<CoreNonVehiclePolicyElectronicCallbackResponse>
        policyInfoSupply: (request: CoreNonVehiclePolicyInfoSupplyRequest) => Promise<CoreNonVehiclePolicyInfoSupplyResponse>
        policyInsure: (request: CoreNonVehiclePolicyInsureRequest) => Promise<CoreNonVehiclePolicyInsureResponse>
        policyInsureCallback: (request: CoreNonVehiclePolicyInsureCallbackRequest) => Promise<CoreNonVehiclePolicyInsureCallbackResponse>
        policyPay: (request: CoreNonVehiclePolicyPayRequest) => Promise<CoreNonVehiclePolicyPayResponse>
        policyPayCallback: (request: CoreNonVehiclePolicyPayCallbackRequest) => Promise<CoreNonVehiclePolicyPayCallbackResponse>
        policyRenew: (request: CoreNonVehiclePolicyRenewRequest) => Promise<CoreNonVehiclePolicyRenewResponse>
        policyRenewal: (request: CoreNonVehiclePolicyRenewalRequest) => Promise<CoreNonVehiclePolicyRenewalResponse>
        policyRevisitCallback: (request: CoreNonVehiclePolicyRevisitCallbackRequest) => Promise<CoreNonVehiclePolicyRevisitCallbackResponse>
        policyUnderwriteFinalize: (request: CoreNonVehiclePolicyUnderwriteFinalizeRequest) => Promise<CoreNonVehiclePolicyUnderwriteFinalizeResponse>
        policyUnderwriteInfoSupply: (request: CoreNonVehiclePolicyUnderwriteInfoSupplyRequest) => Promise<CoreNonVehiclePolicyUnderwriteInfoSupplyResponse>
        policyWithdraw: (request: CoreNonVehiclePolicyWithdrawRequest) => Promise<CoreNonVehiclePolicyWithdrawResponse>
        premiumCalc: (request: CoreNonVehiclePremiumCalcRequest) => Promise<CoreNonVehiclePremiumCalcResponse>
        promotionGet: (request: CoreNonVehiclePromotionGetRequest) => Promise<CoreNonVehiclePromotionGetResponse>
        proposalUnderwrite: (request: CoreNonVehicleProposalUnderwriteRequest) => Promise<CoreNonVehicleProposalUnderwriteResponse>
        providerMiddlewareHandle: (request: CoreNonVehicleProviderMiddlewareHandleRequest) => Promise<CoreNonVehicleProviderMiddlewareHandleResponse>
        quotationCreate: (request: CoreNonVehicleQuotationCreateRequest) => Promise<CoreNonVehicleQuotationCreateResponse>
        quotationGet: (request: CoreNonVehicleQuotationGetRequest) => Promise<CoreNonVehicleQuotationGetResponse>
        quotationQuote: (request: CoreNonVehicleQuotationQuoteRequest) => Promise<CoreNonVehicleQuotationQuoteResponse>
        receiptSubmit: (request: CoreNonVehicleReceiptSubmitRequest) => Promise<CoreNonVehicleReceiptSubmitResponse>
        revisitSubmit: (request: CoreNonVehicleRevisitSubmitRequest) => Promise<CoreNonVehicleRevisitSubmitResponse>
        surrender: (request: CoreNonVehicleSurrenderRequest) => Promise<CoreNonVehicleSurrenderResponse>
        thirdPartyProductPageRedirect: (request: CoreNonVehicleThirdPartyProductPageRedirectRequest) => Promise<CoreNonVehicleThirdPartyProductPageRedirectResponse>
        traceAdd: (request: CoreNonVehicleTraceAddRequest) => Promise<CoreNonVehicleTraceAddResponse>
        traceGet: (request: CoreNonVehicleTraceGetRequest) => Promise<CoreNonVehicleTraceGetResponse>
        withholdingApply: (request: CoreNonVehicleWithholdingApplyRequest) => Promise<CoreNonVehicleWithholdingApplyResponse>
        withholdingSubmit: (request: CoreNonVehicleWithholdingSubmitRequest) => Promise<CoreNonVehicleWithholdingSubmitResponse>
    }
    Payment: {
        infoCreate: (request: CorePaymentInfoCreateRequest) => Promise<CorePaymentInfoCreateResponse>
        infoGetByPolicyId: (request: CorePaymentInfoGetByPolicyIdRequest) => Promise<CorePaymentInfoGetByPolicyIdResponse>
        infoGet: (request: CorePaymentInfoGetRequest) => Promise<CorePaymentInfoGetResponse>
        infoStateChange: (request: CorePaymentInfoStateChangeRequest) => Promise<CorePaymentInfoStateChangeResponse>
        paymentCallback: (request: CorePaymentPaymentCallbackRequest) => Promise<CorePaymentPaymentCallbackResponse>
        withholdingInfoGet: (request: CorePaymentWithholdingInfoGetRequest) => Promise<CorePaymentWithholdingInfoGetResponse>
        withholdingInfoSet: (request: CorePaymentWithholdingInfoSetRequest) => Promise<CorePaymentWithholdingInfoSetResponse>
        withholdingSubmit: (request: CorePaymentWithholdingSubmitRequest) => Promise<CorePaymentWithholdingSubmitResponse>
    }
    Policy: {
        add: (request: CorePolicyAddRequest) => Promise<CorePolicyAddResponse>
        claimGet: (request: CorePolicyClaimGetRequest) => Promise<CorePolicyClaimGetResponse>
        claimList: (request: CorePolicyClaimListRequest) => Promise<CorePolicyClaimListResponse>
        claimSet: (request: CorePolicyClaimSetRequest) => Promise<CorePolicyClaimSetResponse>
        endorsementGet: (request: CorePolicyEndorsementGetRequest) => Promise<CorePolicyEndorsementGetResponse>
        endorsementList: (request: CorePolicyEndorsementListRequest) => Promise<CorePolicyEndorsementListResponse>
        endorsementSet: (request: CorePolicyEndorsementSetRequest) => Promise<CorePolicyEndorsementSetResponse>
        get: (request: CorePolicyGetRequest) => Promise<CorePolicyGetResponse>
        list: (request: CorePolicyListRequest) => Promise<CorePolicyListResponse>
        receiptGet: (request: CorePolicyReceiptGetRequest) => Promise<CorePolicyReceiptGetResponse>
        receiptSet: (request: CorePolicyReceiptSetRequest) => Promise<CorePolicyReceiptSetResponse>
        set: (request: CorePolicySetRequest) => Promise<CorePolicySetResponse>
    }
    Warehouse: {
        cacheClear: (request: CoreWarehouseCacheClearRequest) => Promise<CoreWarehouseCacheClearResponse>
        customEntranceList: (request: CoreWarehouseCustomEntranceListRequest) => Promise<CoreWarehouseCustomEntranceListResponse>
        customInsuranceAdd: (request: CoreWarehouseCustomInsuranceAddRequest) => Promise<CoreWarehouseCustomInsuranceAddResponse>
        customInsuranceUpdate: (request: CoreWarehouseCustomInsuranceUpdateRequest) => Promise<CoreWarehouseCustomInsuranceUpdateResponse>
        entranceGet: (request: CoreWarehouseEntranceGetRequest) => Promise<CoreWarehouseEntranceGetResponse>
        entranceHas: (request: CoreWarehouseEntranceHasRequest) => Promise<CoreWarehouseEntranceHasResponse>
        insuranceBackendGet: (request: CoreWarehouseInsuranceBackendGetRequest) => Promise<CoreWarehouseInsuranceBackendGetResponse>
        insuranceBackendList: (request: CoreWarehouseInsuranceBackendListRequest) => Promise<CoreWarehouseInsuranceBackendListResponse>
        insuranceBackendUpdate: (request: CoreWarehouseInsuranceBackendUpdateRequest) => Promise<CoreWarehouseInsuranceBackendUpdateResponse>
        insuranceFrontendGet: (request: CoreWarehouseInsuranceFrontendGetRequest) => Promise<CoreWarehouseInsuranceFrontendGetResponse>
        insuranceFrontendUpdate: (request: CoreWarehouseInsuranceFrontendUpdateRequest) => Promise<CoreWarehouseInsuranceFrontendUpdateResponse>
        insuranceDefaultBackendGet: (request: CoreWarehouseInsuranceDefaultBackendGetRequest) => Promise<CoreWarehouseInsuranceDefaultBackendGetResponse>
        insuranceMapBackendGet: (request: CoreWarehouseInsuranceMapBackendGetRequest) => Promise<CoreWarehouseInsuranceMapBackendGetResponse>
        promotionRateEffectTemplateGet: (request: CoreWarehousePromotionRateEffectTemplateGetRequest) => Promise<CoreWarehousePromotionRateEffectTemplateGetResponse>
        promotionRateGet: (request: CoreWarehousePromotionRateGetRequest) => Promise<CoreWarehousePromotionRateGetResponse>
        promotionRateTemplateCreate: (request: CoreWarehousePromotionRateTemplateCreateRequest) => Promise<CoreWarehousePromotionRateTemplateCreateResponse>
        promotionRateTemplateDelete: (request: CoreWarehousePromotionRateTemplateDeleteRequest) => Promise<CoreWarehousePromotionRateTemplateDeleteResponse>
        promotionRateTemplateGet: (request: CoreWarehousePromotionRateTemplateGetRequest) => Promise<CoreWarehousePromotionRateTemplateGetResponse>
        promotionRateTemplateInsuranceAdd: (request: CoreWarehousePromotionRateTemplateInsuranceAddRequest) => Promise<CoreWarehousePromotionRateTemplateInsuranceAddResponse>
        promotionRateTemplateInsuranceDelete: (request: CoreWarehousePromotionRateTemplateInsuranceDeleteRequest) => Promise<CoreWarehousePromotionRateTemplateInsuranceDeleteResponse>
        promotionRateTemplateList: (request: CoreWarehousePromotionRateTemplateListRequest) => Promise<CoreWarehousePromotionRateTemplateListResponse>
        promotionRateTemplateReset: (request: CoreWarehousePromotionRateTemplateResetRequest) => Promise<CoreWarehousePromotionRateTemplateResetResponse>
        promotionRateTemplateUpdate: (request: CoreWarehousePromotionRateTemplateUpdateRequest) => Promise<CoreWarehousePromotionRateTemplateUpdateResponse>
        promotionRateTemplateUse: (request: CoreWarehousePromotionRateTemplateUseRequest) => Promise<CoreWarehousePromotionRateTemplateUseResponse>
    }
}
