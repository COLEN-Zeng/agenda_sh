// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

interface NonVehicleClaimApplyRequest {
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
type NonVehicleClaimApplyResponse = string;

interface NonVehicleEndorsementApplyRequest {
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
type NonVehicleEndorsementApplyResponse = string;

interface NonVehicleEndorsementFinalizeRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleEndorsementFinalizeResponse = null;

interface NonVehicleEndorsementInsureRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleEndorsementInsureResponse = null;

interface NonVehicleEndorsementPaidConfirmRequest {
  /**
   * uuid
   */
  id: string;
  /**
   * 自有的支付单ID
   */
  paymentId: string;
  /**
   * 第三方支付ID
   */
  paymentNo: string;
}

type NonVehicleEndorsementPaidConfirmResponse = null;

interface NonVehicleEndorsementRefundConfirmRequest {
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

type NonVehicleEndorsementRefundConfirmResponse = null;

interface NonVehicleIntelligentUnderwriteCallbackRequest {
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

interface NonVehicleIntelligentUnderwriteCallbackResponse {
  [k: string]: any;
}

interface NonVehicleIntelligentUnderwriteRedirectRequest {
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

interface NonVehicleIntelligentUnderwriteRedirectResponse {
  mode: 0 | 1 | 2;
  /**
   * 跳转内容
   */
  data: string;
}

interface NonVehicleNegotiationApplyRequest {
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
type NonVehicleNegotiationApplyResponse = string;

interface NonVehicleNegotiationFinalizeRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleNegotiationFinalizeResponse = null;

/**
 * uuid
 */
type NonVehicleNegotiationGetRequest = string;

interface NonVehicleNegotiationGetResponse {
  /**
   * uuid
   */
  id: string;
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
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

interface NonVehicleNegotiationInfoSupplyRequest {
  /**
   * uuid
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleNegotiationInfoSupplyResponse = null;

interface NonVehicleNegotiationListRequest {
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
    | "guo_shou_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng";
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

interface NonVehicleNegotiationListResponse {
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
     * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
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

interface NonVehiclePaymentSubmitRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

interface NonVehiclePaymentSubmitResponse {
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

interface NonVehiclePolicyCancelCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyCancelCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyClaimCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyClaimCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyElectronicCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyElectronicCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyInfoSupplyRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type NonVehiclePolicyInfoSupplyResponse = null;

interface NonVehiclePolicyInsureRequest {
  /**
   * 保单id
   */
  id?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyInsureResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyInsureCallbackRequest {
  /**
   * 入口id
   */
  entranceId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyInsureCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyPayRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type NonVehiclePolicyPayResponse = null;

interface NonVehiclePolicyPayCallbackRequest {
  /**
   * 入口id
   */
  entranceId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyPayCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyRenewRequest {
  /**
   * 保单id
   */
  policyId: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyRenewResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyRevisitCallbackRequest {
  /**
   * 保单id
   */
  policyId?: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehiclePolicyRevisitCallbackResponse =
  | null
  | {
      [k: string]: any;
    }
  | string;

interface NonVehiclePolicyUnderwriteFinalizeRequest {
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

type NonVehiclePolicyUnderwriteFinalizeResponse = null;

interface NonVehiclePolicyUnderwriteInfoSupplyRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type NonVehiclePolicyUnderwriteInfoSupplyResponse = null;

interface NonVehiclePolicyWithdrawRequest {
  /**
   * 保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type NonVehiclePolicyWithdrawResponse = null;

type NonVehiclePremiumCalcRequest =
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

type NonVehiclePremiumCalcResponse = {
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

interface NonVehiclePromotionGetRequest {
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

type NonVehiclePromotionGetResponse = number[];

interface NonVehicleProposalUnderwriteRequest {
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
type NonVehicleProposalUnderwriteResponse = string;

interface NonVehicleProviderMiddlewareHandleRequest {
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

interface NonVehicleProviderMiddlewareHandleResponse {
  query: {
    [k: string]: any;
  };
  body:
    | {
        [k: string]: any;
      }
    | string;
}

type NonVehicleQuotationCreateRequest =
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
type NonVehicleQuotationCreateResponse = string;

/**
 * 报价单id
 */
type NonVehicleQuotationGetRequest = string;

/**
 * 报价任务数据
 */
interface NonVehicleQuotationGetResponse {
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

interface NonVehicleQuotationQuoteRequest {
  /**
   * 报价单id
   */
  quotationId: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleQuotationQuoteResponse =
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

interface NonVehicleReceiptSubmitRequest {
  /**
   * 保单id
   */
  policyId: string;
  images: string[];
}

type NonVehicleReceiptSubmitResponse = null;

interface NonVehicleRevisitSubmitRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleRevisitSubmitResponse = null;

interface NonVehicleSurrenderRequest {
  /**
   * 保单id
   */
  policyId: string;
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}

type NonVehicleSurrenderResponse = null;

interface NonVehicleThirdPartyProductPageRedirectRequest {
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

interface NonVehicleThirdPartyProductPageRedirectResponse {
  mode: 0 | 1 | 2;
  /**
   * 跳转内容
   */
  data: string;
}

interface NonVehicleTraceAddRequest {
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

type NonVehicleTraceAddResponse = null;

/**
 * traceId
 */
type NonVehicleTraceGetRequest = string;

interface NonVehicleTraceGetResponse {
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

interface NonVehicleWithholdingApplyRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleWithholdingApplyResponse = null;

interface NonVehicleWithholdingSubmitRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type NonVehicleWithholdingSubmitResponse = null;

