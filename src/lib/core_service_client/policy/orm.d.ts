// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/fun自动生成,请勿手动修改

interface CorePolicyClaim {
  /**
   * claimId
   */
  id: string;
  reportor: {
    /**
     * 报案人
     */
    name: string;
    /**
     * 报案人联系方式
     */
    contactNumber: string;
  };
  payee: {
    /**
     * 领款人名字
     */
    name: string;
    /**
     * 证件类型
     */
    identityType: number;
    identity: string;
    /**
     * 领款人私有属性
     */
    extraData: {
      [k: string]: any;
    };
  };
  extraData: {
    [k: string]: any;
  };
  /**
   * 保单id
   */
  policyId: string;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 最近修改时间
   */
  modifiedAt: number;
  /**
   * 理赔状态
   */
  status: number;
  /**
   * 支付失败原因
   */
  claimFailedReason?: string;
  /**
   * 险种id
   */
  insuranceId: string;
  accountId: string;
  [k: string]: any;
}

interface CorePolicyEndorsement {
  id: string;
  /**
   * 入口id
   */
  entranceId?: string;
  insuranceType: string;
  insuranceId: string;
  policyId: string;
  policyNo: string;
  companyId: string;
  accountId: string;
  traceId?: string;
  /**
   * 批改内容
   */
  extraData: {
    [k: string]: any;
  };
  createdAt: number;
  modifiedAt: number;
  /**
   * 支付id
   */
  paymentId?: string;
  /**
   * 支付时间
   */
  paidAt?: number;
  /**
   * 退款时间
   */
  refundAt?: number;
  /**
   * 退款id
   */
  refundId?: string;
  /**
   * 批单号
   */
  no?: string;
  electronic?: {
    /**
     * {"IMAGE":0,"PDF":1,"URL":2}
     */
    type: 0 | 1 | 2;
    /**
     * 链接数组
     */
    list: string[];
  };
  status: 0 | 1 | 2 | 3 | 4;
  [k: string]: any;
}

interface CorePolicyInfo {
  id?: string;
  /**
   * 0:单个保单号单(simple), 2:组合单(combination)
   */
  structure?: number;
  policies?: string[];
  from?: number;
  /**
   * 险种id
   */
  insuranceId?: string;
  /**
   * 险种类型
   */
  insuranceType?: string;
  /**
   * 入口id
   */
  entranceId?: string;
  /**
   * 流程id
   */
  frontendProcessId?: string;
  traceId?: string;
  /**
   * 保单类型
   */
  type?: number;
  /**
   * 保单号
   */
  no?: string;
  companyId?: string;
  /**
   * 投保人
   */
  applicant?: {
    /**
     * 0:个人, 1:机构
     */
    type: number;
    /**
     * 投保人名字
     */
    name: string;
    /**
     * 证件类型
     */
    identityType: number;
    identity: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 性别
     */
    gender?: number;
    birth?: string;
    /**
     * 投保人私有属性
     */
    extraData: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  beneficiary?: {
    /**
     * 是否是法定受益人
     */
    isStatutoryBeneficiary: boolean;
    list?: {
      /**
       * 受益人名字
       */
      name: string;
      /**
       * 证件类型
       */
      identityType: number;
      identity: string;
      /**
       * 性别
       */
      gender?: number;
      birth?: string;
      /**
       * 与被保人关系
       */
      relationWithInsured: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 11 | 12 | 13;
      /**
       * 受益比例
       */
      rate: number;
      /**
       * 受益顺序
       */
      grade: 1 | 2 | 3;
      /**
       * 受益人私有属性
       */
      extraData: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  /**
   * 被保人
   */
  insuredList?: {
    /**
     * 被保人名字
     */
    name: string;
    /**
     * 证件类型
     */
    identityType: number;
    identity: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 性别
     */
    gender?: number;
    birth?: string;
    /**
     * 投保人私有属性
     */
    extraData: {
      [k: string]: any;
    };
    [k: string]: any;
  }[];
  /**
   * 保单状态,粗状态
   */
  status?: number;
  /**
   * 保单子状态
   */
  subStatus?: number;
  /**
   * 支付单号
   */
  paymentId?: string;
  /**
   * 退款单号
   */
  refundId?: string;
  accountId?: string;
  /**
   * 所属机构id
   */
  orgAccountId?: string;
  /**
   * 保费
   */
  premium?: number;
  /**
   * 首期保费
   */
  firstPremium?: number;
  /**
   * 创建时间
   */
  createdAt?: number;
  /**
   * 支付时间
   */
  paidAt?: number;
  /**
   * 承保时间
   */
  insuredAt?: number;
  /**
   * 退款时间
   */
  refundAt?: number;
  /**
   * 回执时间
   */
  receiptAt?: number;
  /**
   * 回访时间
   */
  revisitAt?: number;
  /**
   * 生效时间
   */
  effectedAt?: number;
  /**
   * 失效时间
   */
  expiredAt?: number;
  /**
   * 最近修改时间
   */
  modifiedAt?: number;
  /**
   * 退保时间
   */
  surrenderAt?: number;
  electronic?: {
    /**
     * {"IMAGE":0,"PDF":1,"URL":2}
     */
    type: 0 | 1 | 2;
    /**
     * 链接数组
     */
    list: string[];
  };
  /**
   * 报价单id
   */
  quotationId?: string;
  extraData?: {
    [k: string]: any;
  };
  quotePlan?: {
    id?: string;
    insuranceId?: string;
    /**
     * 公司id
     */
    companyId?: string;
    status?: number;
    plan?: {
      [k: string]: any;
    };
    /**
     * 总保费
     */
    premium?: number;
    /**
     * 保险公司给机构的佣金比例
     */
    commissionRate?: number;
    /**
     * 报价详情，可存储报价结果相关东西
     */
    quoteDetail?: {
      [k: string]: any;
    };
    /**
     * 生效时间
     */
    effectedAt?: number;
    /**
     * 失效时间
     */
    expiredAt?: number;
    /**
     * 修改时间
     */
    modifiedAt?: number;
    /**
     * 保障期限
     */
    period?: number;
    /**
     * 保障期限单位
     */
    periodUnit?: string;
    /**
     * 缴费期限
     */
    payPeriod?: number;
    /**
     * 缴费期限单位
     */
    payPeriodUnit?: string;
    /**
     * 首期保费
     */
    firstPremium?: number;
    [k: string]: any;
  };
  delivery?: {
    /**
     * 收件人
     */
    name: string;
    /**
     * 手机号
     */
    mobile: string;
    address: {
      /**
       * 省
       */
      province: string;
      /**
       * 市
       */
      city: string;
      /**
       * 区
       */
      country: string;
      /**
       * 详细信息
       */
      street: string;
    };
  };
  /**
   * 支付失败原因
   */
  payFailedReason?: string;
  /**
   * 核保失败原因
   */
  underwriteFailedReason?: string;
  /**
   * 承保失败原因
   */
  insureFailedReason?: string;
  /**
   * 投保单号
   */
  proposalNo?: string;
  /**
   * 保障期限
   */
  period?: number;
  /**
   * 保障期限单位
   */
  periodUnit?: string;
  /**
   * 缴费期限
   */
  payPeriod?: number;
  /**
   * 缴费期限单位
   */
  payPeriodUnit?: string;
  /**
   * 续期/续保信息
   */
  renewal?: {
    record?: {
      /**
       * 收取保费时间
       */
      renewalAt?: number;
      /**
       * 实收保费
       */
      premium?: number;
      [k: string]: any;
    }[];
    /**
     * 自动续保支付信息
     */
    payment?: {
      /**
       * 持卡人名字
       */
      holderName?: string;
      /**
       * 开户行id
       */
      bankId: number;
      /**
       * 银行账户
       */
      bankCardNo: string;
      /**
       * 银行卡预留证件类型
       */
      identityType?: number;
      /**
       * 银行卡预留证件号码
       */
      identity?: string;
      /**
       * 银行预留手机号
       */
      mobile?: string;
      [k: string]: any;
    };
  };
  [k: string]: any;
}

interface CorePolicyReceipt {
  /**
   * policyId
   */
  id?: string;
  images?: string[];
  [k: string]: any;
}

