// 本文件由toolchain/code_generator/h5_serivce_ts/build脚本自动生成

declare const H5: {
    Account: {
        infoGet: (request: H5AccountInfoGetRequest) => Promise<H5AccountInfoGetResponse>
        login: (request: H5AccountLoginRequest) => Promise<H5AccountLoginResponse>
        passwordReset: (request: H5AccountPasswordResetRequest) => Promise<H5AccountPasswordResetResponse>
        register: (request: H5AccountRegisterRequest) => Promise<H5AccountRegisterResponse>
        searchBySpecificId: (request: H5AccountSearchBySpecificIdRequest) => Promise<H5AccountSearchBySpecificIdResponse>
        superiorChange: (request: H5AccountSuperiorChangeRequest) => Promise<H5AccountSuperiorChangeResponse>
        userNameReset: (request: H5AccountUserNameResetRequest) => Promise<H5AccountUserNameResetResponse>
    }
    Auth: {
        sessionDel: (request: H5AuthSessionDelRequest) => Promise<H5AuthSessionDelResponse>
        sessionGet: (request: H5AuthSessionGetRequest) => Promise<H5AuthSessionGetResponse>
        sessionSet: (request: H5AuthSessionSetRequest) => Promise<H5AuthSessionSetResponse>
        tokenGenerate: (request: H5AuthTokenGenerateRequest) => Promise<H5AuthTokenGenerateResponse>
        tokenPermissionAdd: (request: H5AuthTokenPermissionAddRequest) => Promise<H5AuthTokenPermissionAddResponse>
        tokenPermissionGet: (request: H5AuthTokenPermissionGetRequest) => Promise<H5AuthTokenPermissionGetResponse>
    }
    Certification: {
        applicationFinalize: (request: H5CertificationApplicationFinalizeRequest) => Promise<H5CertificationApplicationFinalizeResponse>
        applicationList: (request: H5CertificationApplicationListRequest) => Promise<H5CertificationApplicationListResponse>
        apply: (request: H5CertificationApplyRequest) => Promise<H5CertificationApplyResponse>
        electronicContractUpdate: (request: H5CertificationElectronicContractUpdateRequest) => Promise<H5CertificationElectronicContractUpdateResponse>
        idIsDuplicateCheck: (request: H5CertificationIdIsDuplicateCheckRequest) => Promise<H5CertificationIdIsDuplicateCheckResponse>
        realNameAuthenticateCallback: (request: H5CertificationRealNameAuthenticateCallbackRequest) => Promise<H5CertificationRealNameAuthenticateCallbackResponse>
        realNameAuthenticate: (request: H5CertificationRealNameAuthenticateRequest) => Promise<H5CertificationRealNameAuthenticateResponse>
    }
    GuestArticle: {
        infoDuplicate: (request: H5GuestArticleInfoDuplicateRequest) => Promise<H5GuestArticleInfoDuplicateResponse>
        infoGet: (request: H5GuestArticleInfoGetRequest) => Promise<H5GuestArticleInfoGetResponse>
        infoList: (request: H5GuestArticleInfoListRequest) => Promise<H5GuestArticleInfoListResponse>
        infoSet: (request: H5GuestArticleInfoSetRequest) => Promise<H5GuestArticleInfoSetResponse>
        infoUpload: (request: H5GuestArticleInfoUploadRequest) => Promise<H5GuestArticleInfoUploadResponse>
        readingVolumeAdd: (request: H5GuestArticleReadingVolumeAddRequest) => Promise<H5GuestArticleReadingVolumeAddResponse>
        userLibraryGet: (request: H5GuestArticleUserLibraryGetRequest) => Promise<H5GuestArticleUserLibraryGetResponse>
        userLibraryList: (request: H5GuestArticleUserLibraryListRequest) => Promise<H5GuestArticleUserLibraryListResponse>
        userLibrarySet: (request: H5GuestArticleUserLibrarySetRequest) => Promise<H5GuestArticleUserLibrarySetResponse>
    }
    InsurancePlan: {
        infoDel: (request: H5InsurancePlanInfoDelRequest) => Promise<H5InsurancePlanInfoDelResponse>
        infoGet: (request: H5InsurancePlanInfoGetRequest) => Promise<H5InsurancePlanInfoGetResponse>
        infoList: (request: H5InsurancePlanInfoListRequest) => Promise<H5InsurancePlanInfoListResponse>
        infoSet: (request: H5InsurancePlanInfoSetRequest) => Promise<H5InsurancePlanInfoSetResponse>
        readingVolumeAdd: (request: H5InsurancePlanReadingVolumeAddRequest) => Promise<H5InsurancePlanReadingVolumeAddResponse>
    }
    Org: {
        appointmentCreate: (request: H5OrgAppointmentCreateRequest) => Promise<H5OrgAppointmentCreateResponse>
        appointmentGet: (request: H5OrgAppointmentGetRequest) => Promise<H5OrgAppointmentGetResponse>
        appointmentList: (request: H5OrgAppointmentListRequest) => Promise<H5OrgAppointmentListResponse>
        appointmentUpdate: (request: H5OrgAppointmentUpdateRequest) => Promise<H5OrgAppointmentUpdateResponse>
        configInitFromSuperiorOrg: (request: H5OrgConfigInitFromSuperiorOrgRequest) => Promise<H5OrgConfigInitFromSuperiorOrgResponse>
        entranceList: (request: H5OrgEntranceListRequest) => Promise<H5OrgEntranceListResponse>
        finalMobileFrontendConfigGet: (request: H5OrgFinalMobileFrontendConfigGetRequest) => Promise<H5OrgFinalMobileFrontendConfigGetResponse>
        rawMobileFrontendConfigGet: (request: H5OrgRawMobileFrontendConfigGetRequest) => Promise<H5OrgRawMobileFrontendConfigGetResponse>
        rawMobileFrontendConfigSet: (request: H5OrgRawMobileFrontendConfigSetRequest) => Promise<H5OrgRawMobileFrontendConfigSetResponse>
        subGet: (request: H5OrgSubGetRequest) => Promise<H5OrgSubGetResponse>
        wechatConfigGet: (request: H5OrgWechatConfigGetRequest) => Promise<H5OrgWechatConfigGetResponse>
    }
    Permission: {
        orgDefaultPerAdd: (request: H5PermissionOrgDefaultPerAddRequest) => Promise<H5PermissionOrgDefaultPerAddResponse>
        orgPermissionUpdate: (request: H5PermissionOrgPermissionUpdateRequest) => Promise<H5PermissionOrgPermissionUpdateResponse>
        orgRoleAdd: (request: H5PermissionOrgRoleAddRequest) => Promise<H5PermissionOrgRoleAddResponse>
        orgRoleDelete: (request: H5PermissionOrgRoleDeleteRequest) => Promise<H5PermissionOrgRoleDeleteResponse>
        orgRoleGet: (request: H5PermissionOrgRoleGetRequest) => Promise<H5PermissionOrgRoleGetResponse>
        orgRoleUpdate: (request: H5PermissionOrgRoleUpdateRequest) => Promise<H5PermissionOrgRoleUpdateResponse>
        permissionGet: (request: H5PermissionPermissionGetRequest) => Promise<H5PermissionPermissionGetResponse>
        userRoleAdd: (request: H5PermissionUserRoleAddRequest) => Promise<H5PermissionUserRoleAddResponse>
        userRoleClear: (request: H5PermissionUserRoleClearRequest) => Promise<H5PermissionUserRoleClearResponse>
        userRoleDelete: (request: H5PermissionUserRoleDeleteRequest) => Promise<H5PermissionUserRoleDeleteResponse>
        userRoleGet: (request: H5PermissionUserRoleGetRequest) => Promise<H5PermissionUserRoleGetResponse>
        userRoleUpdate: (request: H5PermissionUserRoleUpdateRequest) => Promise<H5PermissionUserRoleUpdateResponse>
    }
    Personnel: {
        commissionPromotionRateChange: (request: H5PersonnelCommissionPromotionRateChangeRequest) => Promise<H5PersonnelCommissionPromotionRateChangeResponse>
        customerVisitRecordAdd: (request: H5PersonnelCustomerVisitRecordAddRequest) => Promise<H5PersonnelCustomerVisitRecordAddResponse>
        dailyWechatMsgSend: (request: H5PersonnelDailyWechatMsgSendRequest) => Promise<H5PersonnelDailyWechatMsgSendResponse>
        employeeIdGen: (request: H5PersonnelEmployeeIdGenRequest) => Promise<H5PersonnelEmployeeIdGenResponse>
        incomeRecordAdd: (request: H5PersonnelIncomeRecordAddRequest) => Promise<H5PersonnelIncomeRecordAddResponse>
        incomeRecordChange: (request: H5PersonnelIncomeRecordChangeRequest) => Promise<H5PersonnelIncomeRecordChangeResponse>
        incomeRecordFind: (request: H5PersonnelIncomeRecordFindRequest) => Promise<H5PersonnelIncomeRecordFindResponse>
        incomeRecordQuery: (request: H5PersonnelIncomeRecordQueryRequest) => Promise<H5PersonnelIncomeRecordQueryResponse>
        infoGetByAccountId: (request: H5PersonnelInfoGetByAccountIdRequest) => Promise<H5PersonnelInfoGetByAccountIdResponse>
        orgPersonnelInfoGet: (request: H5PersonnelOrgPersonnelInfoGetRequest) => Promise<H5PersonnelOrgPersonnelInfoGetResponse>
        platformMsgPush: (request: H5PersonnelPlatformMsgPushRequest) => Promise<H5PersonnelPlatformMsgPushResponse>
        promotionGet: (request: H5PersonnelPromotionGetRequest) => Promise<H5PersonnelPromotionGetResponse>
        shareAdd: (request: H5PersonnelShareAddRequest) => Promise<H5PersonnelShareAddResponse>
        shopConfigGet: (request: H5PersonnelShopConfigGetRequest) => Promise<H5PersonnelShopConfigGetResponse>
        statisticGet: (request: H5PersonnelStatisticGetRequest) => Promise<H5PersonnelStatisticGetResponse>
        statisticNewMemberIncrease: (request: H5PersonnelStatisticNewMemberIncreaseRequest) => Promise<H5PersonnelStatisticNewMemberIncreaseResponse>
        subGet: (request: H5PersonnelSubGetRequest) => Promise<H5PersonnelSubGetResponse>
        wechatGet: (request: H5PersonnelWechatGetRequest) => Promise<H5PersonnelWechatGetResponse>
        wechatSet: (request: H5PersonnelWechatSetRequest) => Promise<H5PersonnelWechatSetResponse>
        wechatUserInfoPull: (request: H5PersonnelWechatUserInfoPullRequest) => Promise<H5PersonnelWechatUserInfoPullResponse>
        withdrawalRecordAdd: (request: H5PersonnelWithdrawalRecordAddRequest) => Promise<H5PersonnelWithdrawalRecordAddResponse>
        withdrawalRecordChange: (request: H5PersonnelWithdrawalRecordChangeRequest) => Promise<H5PersonnelWithdrawalRecordChangeResponse>
        withdrawalRecordCurrentGet: (request: H5PersonnelWithdrawalRecordCurrentGetRequest) => Promise<H5PersonnelWithdrawalRecordCurrentGetResponse>
        withdrawalRecordFind: (request: H5PersonnelWithdrawalRecordFindRequest) => Promise<H5PersonnelWithdrawalRecordFindResponse>
    }
    Statistics: {
        premiumCustomUnitGet: (request: H5StatisticsPremiumCustomUnitGetRequest) => Promise<H5StatisticsPremiumCustomUnitGetResponse>
        summaryCustomUnitGet: (request: H5StatisticsSummaryCustomUnitGetRequest) => Promise<H5StatisticsSummaryCustomUnitGetResponse>
        visitCustomUnitGet: (request: H5StatisticsVisitCustomUnitGetRequest) => Promise<H5StatisticsVisitCustomUnitGetResponse>
    }
}
