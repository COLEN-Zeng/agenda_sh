// 本文件由toolchain/code_generator/service/fun自动生成,请勿手动修改

interface CoreNonVehicleClaimApplyRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

/**
 * 理赔单id
 */
type CoreNonVehicleClaimApplyResponse = string;

interface CoreNonVehicleEndorsementApplyRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

/**
 * uuid
 */
type CoreNonVehicleEndorsementApplyResponse = string;

interface CoreNonVehicleEndorsementFinalizeRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleEndorsementFinalizeResponse = null;

interface CoreNonVehicleEndorsementInsureRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleEndorsementInsureResponse = null;

interface CoreNonVehicleEndorsementPaidConfirmRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleEndorsementPaidConfirmResponse = null;

interface CoreNonVehicleEndorsementRefundConfirmRequest {
  /**
   * uuid
   */
  id: string;
  /**
   * 自有的支付单ID
   */
  refundId: string;
  /**
   * 第三方支付ID
   */
  paymentNo: string;
}

type CoreNonVehicleEndorsementRefundConfirmResponse = null;

interface CoreNonVehicleIntelligentUnderwriteCallbackRequest {
  /**
   * 险种id
   */
  insuranceId: string;
  frontendProcessId: string;
  mode: "normal" | "race" | "third_party_h5";
  data: {
    [k: string]: any;
  };
}

interface CoreNonVehicleIntelligentUnderwriteCallbackResponse {
  [k: string]: any;
}

interface CoreNonVehicleIntelligentUnderwriteQuizAnswerRequest {
  /**
   * 报价单id
   */
  quotationId: string;
  /**
   * 报价方案id
   */
  quoteId: string;
  data: {
    [k: string]: any;
  };
}

interface CoreNonVehicleIntelligentUnderwriteQuizAnswerResponse {
  [k: string]: any;
}

interface CoreNonVehicleIntelligentUnderwriteQuizGetRequest {
  /**
   * 报价单id
   */
  quotationId: string;
  /**
   * 报价方案id
   */
  quoteId: string;
  data?: {
    [k: string]: any;
  };
}

interface CoreNonVehicleIntelligentUnderwriteQuizGetResponse {
  [k: string]: any;
}

interface CoreNonVehicleIntelligentUnderwriteRedirectRequest {
  /**
   * 入口id
   */
  entranceId: string;
  /**
   * 智能核保后跳转url
   */
  callback: string;
  data: {
    [k: string]: any;
  };
}

interface CoreNonVehicleIntelligentUnderwriteRedirectResponse {
  mode: 0 | 1 | 2;
  /**
   * 跳转内容
   */
  data: string;
}

interface CoreNonVehicleNegotiationApplyRequest {
  /**
   * 报价单id
   */
  quotationId: string;
  /**
   * 报价方案id
   */
  quoteId: string;
  data: {
    [k: string]: any;
  };
}

/**
 * uuid
 */
type CoreNonVehicleNegotiationApplyResponse = string;

interface CoreNonVehicleNegotiationFinalizeRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleNegotiationFinalizeResponse = null;

/**
 * uuid
 */
type CoreNonVehicleNegotiationGetRequest = string;

interface CoreNonVehicleNegotiationGetResponse {
  /**
   * uuid
   */
  id: string;
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000","PRODUCT":"202001"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
   */
  insuranceType: string;
  /**
   * 报价单id
   */
  quotationId: string;
  /**
   * 报价方案id
   */
  quoteId: string;
  /**
   * 跟踪id
   */
  traceId: string;
  companyId: string;
  /**
   * 操作者账户id
   */
  accountId: string;
  extraData: {
    [k: string]: any;
  };
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  modifiedAt: number;
  /**
   * 0:未处理, 1:已处理
   */
  status: 0 | 1;
}

interface CoreNonVehicleNegotiationInfoSupplyRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleNegotiationInfoSupplyResponse = null;

interface CoreNonVehicleNegotiationListRequest {
  /**
   * 公司id
   */
  companyId?:
    | "ping_an"
    | "tai_ping"
    | "heng_qin"
    | "kun_lun"
    | "an_bang"
    | "qian_hai"
    | "bei_bu_wan"
    | "tai_ping_yang"
    | "mei_ya"
    | "hua_an"
    | "an_lian"
    | "xing_fu"
    | "fu_de"
    | "ya_tai"
    | "ren_bao_property"
    | "ping_an_property"
    | "hua_gui"
    | "dong_hai"
    | "xin_mei"
    | "guo_shou_cai"
    | "fu_xing"
    | "yang_guang_life"
    | "du_bang"
    | "jin_tai"
    | "ping_an_dong_guan"
    | "xin_tai"
    | "da_di"
    | "zhao_shang_ren_he"
    | "tong_fang_ren_shou"
    | "fu_de_sheng_ming"
    | "lu_jia_zui_guo_tai"
    | "rui_tai_ren_shou"
    | "bai_nian_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  insuranceType?: {
    /**
     * 0: 全匹配， 1:模糊匹配
     */
    mode: 0 | 1;
    /**
     * 值
     */
    value: string;
  };
  /**
   * 险种id
   */
  insuranceId?: string;
  /**
   * 创建时间范围
   */
  createdAtRange?: {
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    from: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    to: number;
    [k: string]: any;
  };
  status?: (0 | 1)[];
  /**
   * ORM Logic Json
   */
  accountId?: {
    [k: string]: any;
  };
  page: number;
  pageSize: number;
  [k: string]: any;
}

interface CoreNonVehicleNegotiationListResponse {
  data: {
    /**
     * uuid
     */
    id: string;
    /**
     * 险种id
     */
    insuranceId: string;
    /**
     * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000","PRODUCT":"202001"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
     */
    insuranceType: string;
    /**
     * 报价单id
     */
    quotationId: string;
    /**
     * 报价方案id
     */
    quoteId: string;
    /**
     * 跟踪id
     */
    traceId: string;
    companyId: string;
    /**
     * 操作者账户id
     */
    accountId: string;
    extraData: {
      [k: string]: any;
    };
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    createdAt: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    modifiedAt: number;
    /**
     * 0:未处理, 1:已处理
     */
    status: 0 | 1;
  }[];
  totalCount: number;
}

interface CoreNonVehiclePaymentSubmitRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

interface CoreNonVehiclePaymentSubmitResponse {
  mode: 0 | 1 | 2;
  /**
   * 跳转内容
   */
  data: string;
  /**
   * 指定返回文本的字符编码,不指定默认为UTF8
   */
  charset?: "GBK";
  [k: string]: any;
}

interface CoreNonVehiclePolicyCancelCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyCancelCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyClaimCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyClaimCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyElectronicCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyElectronicCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyInfoSupplyRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehiclePolicyInfoSupplyResponse = null;

interface CoreNonVehiclePolicyInsureRequest {
  /**
   * 保单id
   */
  id?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyInsureResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyInsureCallbackRequest {
  /**
   * 入口id
   */
  entranceId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyInsureCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyPayRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehiclePolicyPayResponse = null;

interface CoreNonVehiclePolicyPayCallbackRequest {
  /**
   * 入口id
   */
  entranceId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyPayCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyRenewRequest {
  /**
   * 保单id
   */
  policyId: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyRenewResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyRenewalRequest {
  /**
   * 保单id
   */
  lastPolicyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyRenewalResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyRevisitCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehiclePolicyRevisitCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface CoreNonVehiclePolicyUnderwriteFinalizeRequest {
  /**
   * 保单id
   */
  id: string;
  data:
    | {
        pass: true;
        /**
         * 修改后保费
         */
        modifiedPremium?: number;
        /**
         * 修改保费原因
         */
        modifyReason?: string;
        specialAgreement?: string[];
        offlinePayment: {
          /**
           * 户名
           */
          name: string;
          /**
           * 帐号
           */
          no: string;
          /**
           * 开户行
           */
          bank: string;
          /**
           * 备注
           */
          remark?: string;
          [k: string]: any;
        };
        [k: string]: any;
      }
    | {
        pass: false;
        /**
         * 允许再次核保
         */
        allowUnderwriteAgain?: boolean;
        /**
         * 不通过原因
         */
        failReason?: string;
        specialAgreement?: string[];
        [k: string]: any;
      };
}

type CoreNonVehiclePolicyUnderwriteFinalizeResponse = null;

interface CoreNonVehiclePolicyUnderwriteInfoSupplyRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehiclePolicyUnderwriteInfoSupplyResponse = null;

interface CoreNonVehiclePolicyWithdrawRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehiclePolicyWithdrawResponse = null;

type CoreNonVehiclePremiumCalcRequest =
  | {
      data: {
        [k: string]: any;
      };
      /**
       * 入口id
       */
      entranceId: string;
      /**
       * 想要进行保费试算的insuranceId
       */
      targetInsuranceId: string;
    }
  | {
      data: {
        [k: string]: any;
      };
      /**
       * 入口id
       */
      entranceId: string;
      /**
       * 想要进行保费试算的insuranceIds
       */
      targetInsuranceIds: string[];
    };

type CoreNonVehiclePremiumCalcResponse = {
  /**
   * 报价方案id
   */
  id: string;
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * 公司id
   */
  companyId: string;
  /**
   * 任务状态
   */
  status: number;
  plan?: {
    [k: string]: any;
  };
  /**
   * 总保费
   */
  premium: number;
  /**
   * 首期保费
   */
  firstPremium?: number;
  /**
   * 保险公司给机构的佣金比例
   */
  commissionRate?: number;
  /**
   * 生效时间
   */
  effectedAt: number;
  /**
   * 保险止期
   */
  expiredAt?: number;
  /**
   * 报价详情
   */
  quoteDetail?: {
    [k: string]: any;
  };
  /**
   * 错误信息
   */
  errorMessage?: string;
  /**
   * 修改时间
   */
  modifiedAt: number;
  /**
   * 保障期限
   */
  period: number;
  /**
   * 保障期限单位
   */
  periodUnit: string;
  /**
   * 缴费期限
   */
  payPeriod: number;
  /**
   * 缴费期限单位
   */
  payPeriodUnit: string;
  [k: string]: any;
}[];

interface CoreNonVehiclePromotionGetRequest {
  /**
   * 入口id
   */
  entranceId: string;
  /**
   * 操作者账户id
   */
  personalAccountId: string;
  /**
   * 操作者账户id
   */
  orgAccountId: string;
  quote: {
    /**
     * 报价方案id
     */
    id: string;
    /**
     * 险种id
     */
    insuranceId: string;
    /**
     * 公司id
     */
    companyId: string;
    /**
     * 任务状态
     */
    status: number;
    plan?: {
      [k: string]: any;
    };
    /**
     * 总保费
     */
    premium: number;
    /**
     * 首期保费
     */
    firstPremium?: number;
    /**
     * 保险公司给机构的佣金比例
     */
    commissionRate?: number;
    /**
     * 生效时间
     */
    effectedAt: number;
    /**
     * 保险止期
     */
    expiredAt?: number;
    /**
     * 报价详情
     */
    quoteDetail?: {
      [k: string]: any;
    };
    /**
     * 错误信息
     */
    errorMessage?: string;
    /**
     * 修改时间
     */
    modifiedAt: number;
    /**
     * 保障期限
     */
    period: number;
    /**
     * 保障期限单位
     */
    periodUnit: string;
    /**
     * 缴费期限
     */
    payPeriod: number;
    /**
     * 缴费期限单位
     */
    payPeriodUnit: string;
    [k: string]: any;
  };
}

type CoreNonVehiclePromotionGetResponse = number[];

interface CoreNonVehicleProposalUnderwriteRequest {
  /**
   * 报价单id
   */
  quotationId: string;
  /**
   * 报价方案id
   */
  quoteId: string;
  /**
   * 保单来自的平台
   */
  from: 0 | 1 | 2 | 3;
  data: {
    [k: string]: any;
  };
  /**
   * 第三方h5对接模式，渠道商业务参数
   */
  channelData?: string;
  [k: string]: any;
}

/**
 * 保单id
 */
type CoreNonVehicleProposalUnderwriteResponse = string;

interface CoreNonVehicleProviderMiddlewareHandleRequest {
  providerName: string;
  middlewareName: string;
  query: {
    [k: string]: any;
  };
  body:
    | {
        [k: string]: any;
      }
    | string;
}

interface CoreNonVehicleProviderMiddlewareHandleResponse {
  query: {
    [k: string]: any;
  };
  body:
    | {
        [k: string]: any;
      }
    | string;
}

type CoreNonVehicleQuotationCreateRequest =
  | {
      /**
       * 操作者账户id
       */
      accountId: string;
      /**
       * 入口id
       */
      entranceId: string;
      /**
       * 想要进行报价的insuranceId
       */
      targetInsuranceId: string;
      /**
       * 来自的平台
       */
      from?: 0 | 1 | 2 | 3;
      /**
       * 第三方h5对接模式，渠道商业务参数
       */
      channelData?: string;
      [k: string]: any;
    }
  | {
      /**
       * 操作者账户id
       */
      accountId: string;
      /**
       * 入口id
       */
      entranceId: string;
      /**
       * 想要进行报价的insuranceIds
       */
      targetInsuranceIds: string[];
      /**
       * 来自的平台
       */
      from?: 0 | 1 | 2 | 3;
      /**
       * 第三方h5对接模式，渠道商业务参数
       */
      channelData?: string;
      [k: string]: any;
    };

/**
 * 报价单id
 */
type CoreNonVehicleQuotationCreateResponse = string;

/**
 * 报价单id
 */
type CoreNonVehicleQuotationGetRequest = string;

/**
 * 报价任务数据
 */
interface CoreNonVehicleQuotationGetResponse {
  /**
   * 报价单id
   */
  id: string;
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 入口id
   */
  entranceId: string;
  frontendProcessId?: string;
  /**
   * 追踪ID
   */
  traceId?: string;
  /**
   * 来自的平台
   */
  from: 0 | 1 | 2 | 3;
  quoteList: {
    /**
     * 报价方案id
     */
    id: string;
    /**
     * 险种id
     */
    insuranceId: string;
    /**
     * 公司id
     */
    companyId: string;
    /**
     * 任务状态
     */
    status: number;
    plan?: {
      [k: string]: any;
    };
    /**
     * 总保费
     */
    premium: number;
    /**
     * 首期保费
     */
    firstPremium?: number;
    /**
     * 保险公司给机构的佣金比例
     */
    commissionRate?: number;
    /**
     * 生效时间
     */
    effectedAt: number;
    /**
     * 保险止期
     */
    expiredAt?: number;
    /**
     * 报价详情
     */
    quoteDetail?: {
      [k: string]: any;
    };
    /**
     * 错误信息
     */
    errorMessage?: string;
    /**
     * 修改时间
     */
    modifiedAt: number;
    /**
     * 保障期限
     */
    period: number;
    /**
     * 保障期限单位
     */
    periodUnit: string;
    /**
     * 缴费期限
     */
    payPeriod: number;
    /**
     * 缴费期限单位
     */
    payPeriodUnit: string;
    [k: string]: any;
  }[];
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  modifiedAt: number;
  extraData: {
    [k: string]: any;
  };
  [k: string]: any;
}

interface CoreNonVehicleQuotationQuoteRequest {
  /**
   * 报价单id
   */
  quotationId: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleQuotationQuoteResponse =
  | null
  | {
      /**
       * 报价方案id
       */
      id: string;
      /**
       * 险种id
       */
      insuranceId: string;
      /**
       * 公司id
       */
      companyId: string;
      /**
       * 任务状态
       */
      status: number;
      plan?: {
        [k: string]: any;
      };
      /**
       * 总保费
       */
      premium: number;
      /**
       * 首期保费
       */
      firstPremium?: number;
      /**
       * 保险公司给机构的佣金比例
       */
      commissionRate?: number;
      /**
       * 生效时间
       */
      effectedAt: number;
      /**
       * 保险止期
       */
      expiredAt?: number;
      /**
       * 报价详情
       */
      quoteDetail?: {
        [k: string]: any;
      };
      /**
       * 错误信息
       */
      errorMessage?: string;
      /**
       * 修改时间
       */
      modifiedAt: number;
      /**
       * 保障期限
       */
      period: number;
      /**
       * 保障期限单位
       */
      periodUnit: string;
      /**
       * 缴费期限
       */
      payPeriod: number;
      /**
       * 缴费期限单位
       */
      payPeriodUnit: string;
      [k: string]: any;
    }[];

interface CoreNonVehicleReceiptSubmitRequest {
  /**
   * 保单id
   */
  policyId: string;
  images: string[];
}

type CoreNonVehicleReceiptSubmitResponse = null;

interface CoreNonVehicleRevisitSubmitRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleRevisitSubmitResponse = null;

interface CoreNonVehicleSurrenderRequest {
  /**
   * 保单id
   */
  policyId: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type CoreNonVehicleSurrenderResponse = null;

interface CoreNonVehicleThirdPartyProductPageRedirectRequest {
  /**
   * 入口id
   */
  entranceId: string;
  /**
   * 智能核保后跳转url
   */
  callback: string;
  /**
   * 保单来自的平台
   */
  from: 0 | 1 | 2 | 3;
  /**
   * 业务员id
   */
  coreAccountId: string;
  data: {
    [k: string]: any;
  };
}

interface CoreNonVehicleThirdPartyProductPageRedirectResponse {
  mode: 0 | 1 | 2;
  /**
   * 跳转内容
   */
  data: string;
}

interface CoreNonVehicleTraceAddRequest {
  id: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 描述
   */
  description: string;
  /**
   * 创建时间，不传则自动使用系统当前时间
   */
  createdAt: number;
  coverOldRecordWithSameName?: boolean;
}

type CoreNonVehicleTraceAddResponse = null;

/**
 * traceId
 */
type CoreNonVehicleTraceGetRequest = string;

interface CoreNonVehicleTraceGetResponse {
  id: string;
  records: {
    /**
     * 名称
     */
    name: string;
    /**
     * 描述
     */
    description: string;
    /**
     * 创建时间，不传则自动使用系统当前时间
     */
    createdAt: number;
  }[];
}

interface CoreNonVehicleWithholdingApplyRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleWithholdingApplyResponse = null;

interface CoreNonVehicleWithholdingSubmitRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type CoreNonVehicleWithholdingSubmitResponse = null;

