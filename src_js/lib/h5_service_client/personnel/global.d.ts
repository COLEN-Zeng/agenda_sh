// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

interface PersonnelCommissionPromotionRateChangeRequest {
  /**
   * 人员ID
   */
  id: string;
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * 百分比
   */
  rate: number;
}

type PersonnelCommissionPromotionRateChangeResponse = null;

/**
 * 人员ID
 */
type PersonnelEmployeeIdGenRequest = string;

/**
 * 工号
 */
type PersonnelEmployeeIdGenResponse = string;

interface PersonnelIncomeRecordAddRequest {
  policy: {
    /**
     * uuid
     */
    id?: string;
    /**
     * 0:单个保单号单(simple), 2:组合单(combination)
     */
    structure?: 0;
    /**
     * 保单来自的平台
     */
    from?: 0 | 1 | 2 | 3;
    /**
     * 保单类型
     */
    type?: 0 | 1 | 2 | 3 | 4;
    /**
     * 险种id
     */
    insuranceId?: string;
    /**
     * 入口id
     */
    entranceId?: string;
    frontendProcessId?: string;
    /**
     * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"ANNUITIES":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
     */
    insuranceType?: string;
    /**
     * 保单号
     */
    no?: string;
    companyId?: string;
    /**
     * 保险(分)公司所在地, 可选
     */
    companyArea?: string;
    /**
     * 跟踪id
     */
    traceId?: string;
    /**
     * 投保人
     */
    applicant?: {
      /**
       * 0:个人, 1:公司
       */
      type: number;
      /**
       * 投保人名字
       */
      name: string;
      /**
       * {"ID_CARD":0,"PASSPORT":1,"ORGANIZATION":2,"BUSINESS_LICENSE":3,"TAX":4,"COMPANY_UNION_ID":5,"OTHER":6,"MILITARY":7,"BIRTH":8,"RETURN":9,"TEMP_ID_CARD":10,"POLICE":11,"TAIWAN":12,"HOUSEHOLD":13,"FOREIGNER_RESIDENCE_PERMIT_IN_CHINA":14,"HK_MACAO_TW_RESIDENCE_PERMIT_IN_CHINA":15,"HK_MACAO_ENTRY_AND_EXIT_PERMIT":16,"TW_ENTRY_AND_EXIT_PERMIT":17,"DRIVE":18,"MANAGEMENT_LICENCE":19,"WORK":20,"SOLDIER":21,"STUDENT":22}
       */
      identityType:
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22;
      /**
       * 证件号码
       */
      identity: string;
      /**
       * 手机号
       */
      mobile?: string;
      /**
       * 性别:{"MALE":0,"FEMALE":1}
       */
      gender?: 0 | 1;
      birth?: string;
      /**
       * 投保人私有属性
       */
      extraData: {
        [k: string]: any;
      };
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
       * {"ID_CARD":0,"PASSPORT":1,"ORGANIZATION":2,"BUSINESS_LICENSE":3,"TAX":4,"COMPANY_UNION_ID":5,"OTHER":6,"MILITARY":7,"BIRTH":8,"RETURN":9,"TEMP_ID_CARD":10,"POLICE":11,"TAIWAN":12,"HOUSEHOLD":13,"FOREIGNER_RESIDENCE_PERMIT_IN_CHINA":14,"HK_MACAO_TW_RESIDENCE_PERMIT_IN_CHINA":15,"HK_MACAO_ENTRY_AND_EXIT_PERMIT":16,"TW_ENTRY_AND_EXIT_PERMIT":17,"DRIVE":18,"MANAGEMENT_LICENCE":19,"WORK":20,"SOLDIER":21,"STUDENT":22}
       */
      identityType:
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22;
      /**
       * 证件号码
       */
      identity: string;
      /**
       * 要么为空，要么为正确的手机号
       */
      mobile?: string | string;
      /**
       * 性别:{"MALE":0,"FEMALE":1}
       */
      gender?: 0 | 1;
      birth?: string;
      /**
       * 每个被保人私有属性
       */
      extraData: {
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    /**
     * 保单状态
     */
    status?: 0 | 1 | 2 | 4 | 5 | 6 | 7 | 9;
    /**
     * 保单子状态
     */
    subStatus?: 0 | 11 | 12 | 13 | 10 | 16 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 14 | 8 | 9 | 17 | 15 | 98 | 99 | 100;
    /**
     * 自有的支付单ID
     */
    paymentId?: string;
    /**
     * 操作者账户id
     */
    accountId?: string;
    /**
     * 保费
     */
    premium?: number;
    /**
     * 保费
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
     * 生效时间
     */
    effectedAt?: number;
    /**
     * 失效时间
     */
    expiredAt?: number;
    /**
     * 回执时间
     */
    receiptAt?: number;
    /**
     * 回访时间
     */
    revisitAt?: number;
    /**
     * 最近修改时间
     */
    modifiedAt?: number;
    /**
     * 退保时间
     */
    surrenderAt?: number;
    quotePlan?: {
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
    quotationId?: string;
    extraData?: {
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
         * 街道
         */
        street: string;
      };
    };
    beneficiary?: {
      /**
       * 是否是法定受益人
       */
      isStatutoryBeneficiary: boolean;
      list?: {
        /**
         * 与被保人关系
         */
        relationWithInsured: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 11 | 12 | 13;
        /**
         * 投保人名字
         */
        name: string;
        /**
         * {"ID_CARD":0,"PASSPORT":1,"ORGANIZATION":2,"BUSINESS_LICENSE":3,"TAX":4,"COMPANY_UNION_ID":5,"OTHER":6,"MILITARY":7,"BIRTH":8,"RETURN":9,"TEMP_ID_CARD":10,"POLICE":11,"TAIWAN":12,"HOUSEHOLD":13,"FOREIGNER_RESIDENCE_PERMIT_IN_CHINA":14,"HK_MACAO_TW_RESIDENCE_PERMIT_IN_CHINA":15,"HK_MACAO_ENTRY_AND_EXIT_PERMIT":16,"TW_ENTRY_AND_EXIT_PERMIT":17,"DRIVE":18,"MANAGEMENT_LICENCE":19,"WORK":20,"SOLDIER":21,"STUDENT":22}
         */
        identityType:
          | 0
          | 1
          | 2
          | 3
          | 4
          | 5
          | 6
          | 7
          | 8
          | 9
          | 10
          | 11
          | 12
          | 13
          | 14
          | 15
          | 16
          | 17
          | 18
          | 19
          | 20
          | 21
          | 22;
        /**
         * 证件号码
         */
        identity: string;
        /**
         * 性别:{"MALE":0,"FEMALE":1}
         */
        gender?: 0 | 1;
        birth?: string;
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
     * 投保单号
     */
    proposalNo?: string;
    /**
     * 支付失败原因
     */
    payFailedReason?: string;
    /**
     * 承保失败原因
     */
    insureFailedReason?: string;
    /**
     * 退保
     */
    surrender?: {
      /**
       * 退保类型：1: 犹豫期退保, 2:普通退保
       */
      type?: number;
      /**
       * 退还保费
       */
      refundPremium?: number;
      /**
       * 退保材料
       */
      material?: any[];
      [k: string]: any;
    };
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
      /**
       * 续期记录信息,后期加上的字段，默认为空
       */
      record?: {
        /**
         * 所缴费期数 年/月
         */
        payPeriodNum?: number;
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
       * 代扣银行卡信息
       */
      payment?: {
        /**
         * 持卡人名字
         */
        holderName?: string;
        /**
         * 开户行id
         */
        bankId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;
        /**
         * 银行账户
         */
        bankCardNo: string;
        /**
         * 银行卡预留证件类型
         */
        identityType?:
          | 0
          | 1
          | 2
          | 3
          | 4
          | 5
          | 6
          | 7
          | 8
          | 9
          | 10
          | 11
          | 12
          | 13
          | 14
          | 15
          | 16
          | 17
          | 18
          | 19
          | 20
          | 21
          | 22;
        /**
         * 银行卡预留证件号码
         */
        identity?: string;
        /**
         * 银行预留手机号
         */
        mobile?: string;
        bankDistrict?: {
          /**
           * 银行开户省
           */
          province: string;
          /**
           * 银行开户市
           */
          city: string;
        };
        /**
         * 银行代码-保险公司
         */
        bankCode?: string;
      };
    };
    [k: string]: any;
  };
  promotionMoney: number | number[];
}

type PersonnelIncomeRecordAddResponse = null;

interface PersonnelIncomeRecordChangeRequest {
  /**
   * 收入ID
   */
  id: string;
  /**
   * uuid
   */
  userId: string;
  coreAccountId: string;
  /**
   * {"PROMOTION":1,"INVITER_AWARD":2,"UN_CERTIFICATION_PROMOTION":3}
   */
  type: 1 | 2 | 3;
  /**
   * {"UN_SETTABLE":1,"SETTABLE":2,"SETTLED":3,"FROZEN":4,"SURRENDER_HESITANT_PERIOD":5,"SURRENDER_NORMAL":6,"SURRENDER_OVERDUE":7}
   */
  status: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * 保费
   */
  premium: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 是否可用,意健险/寿险单会预先写入第2,3年的佣金记录,但先设为不可用,续期确认再打开
   */
  enabled: boolean;
  specificId: string;
  specificType: string;
  description: string;
  /**
   * 推广费
   */
  promotionMoney: number;
  /**
   * 保单来自的平台
   */
  from: 0 | 1 | 2 | 3;
  /**
   * 对账时间: 默认到下个月的25日
   */
  auditedAt?: number;
  [k: string]: any;
}

type PersonnelIncomeRecordChangeResponse = null;

interface PersonnelIncomeRecordFindRequest {
  id: string;
  /**
   * {"USER_ID":1,"SPECIFIC_ID":3,"USER_ID_AND_SHOW_FROZEN":4,"USER_ID_AND_NOT_SHOW_SURRENDER":5}
   */
  mode: 1 | 3 | 4 | 5;
  [k: string]: any;
}

type PersonnelIncomeRecordFindResponse = {
  /**
   * 收入ID
   */
  id: string;
  /**
   * uuid
   */
  userId: string;
  coreAccountId: string;
  /**
   * {"PROMOTION":1,"INVITER_AWARD":2,"UN_CERTIFICATION_PROMOTION":3}
   */
  type: 1 | 2 | 3;
  /**
   * {"UN_SETTABLE":1,"SETTABLE":2,"SETTLED":3,"FROZEN":4,"SURRENDER_HESITANT_PERIOD":5,"SURRENDER_NORMAL":6,"SURRENDER_OVERDUE":7}
   */
  status: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * 保费
   */
  premium: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 是否可用,意健险/寿险单会预先写入第2,3年的佣金记录,但先设为不可用,续期确认再打开
   */
  enabled: boolean;
  specificId: string;
  specificType: string;
  description: string;
  /**
   * 推广费
   */
  promotionMoney: number;
  /**
   * 保单来自的平台
   */
  from: 0 | 1 | 2 | 3;
  /**
   * 对账时间: 默认到下个月的25日
   */
  auditedAt?: number;
  [k: string]: any;
}[];

interface PersonnelInfoGetRequest {
  /**
   * 用户id
   */
  id: string;
}

type PersonnelInfoGetResponse = null | {
  /**
   * 人员ID
   */
  id: string;
  coreAccountId: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 账户状态,0-正常，1-冻结，2-不可用，例如密码过期
   */
  status: 0 | 1 | 2 | 3;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 身份证号码
   */
  idNumber?: string;
  /**
   * 证件类型
   */
  idType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
  /**
   * 工号
   */
  employeeId?: string;
  /**
   * 性别:{"MALE":0,"FEMALE":1}
   */
  gender?: 0 | 1;
  resource?: {
    /**
     * 身份证正面
     */
    idCardFront?: string;
    /**
     * 身份证反面
     */
    idCardBack?: string;
    /**
     * 银行卡正面
     */
    bankCardFront?: string;
    /**
     * 个人半身免冠照
     */
    avatar?: string;
    [k: string]: any;
  };
  bankCard?: {
    /**
     * 开户行名称
     */
    bankName?: string;
    /**
     * 银行卡号
     */
    number?: string;
    area?: {
      /**
       * 银行卡所属省
       */
      province?: string;
      /**
       * 银行卡所属市
       */
      city?: string;
      /**
       * 银行卡所属区
       */
      country?: string;
      [k: string]: any;
    };
    /**
     * 开户行所在支行
     */
    subBankName?: string;
    [k: string]: any;
  };
  inviter?: {
    /**
     * 邀请者ID
     */
    userId: string;
    coreAccountId: string;
  };
  superiorOrg: {
    /**
     * 机构ID
     */
    userId: string;
    coreAccountId: string;
  };
  /**
   * 学历
   */
  education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
  /**
   * 机构人员类型
   */
  type?: "salesman" | "office_staff";
  /**
   * 创建时间
   */
  createdAt?: number;
  [k: string]: any;
};

interface PersonnelInfoGetByAccountIdRequest {
  /**
   * 用户id
   */
  coreAccountId: string;
}

type PersonnelInfoGetByAccountIdResponse = null | {
  /**
   * 人员ID
   */
  id: string;
  coreAccountId: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 账户状态,0-正常，1-冻结，2-不可用，例如密码过期
   */
  status: 0 | 1 | 2 | 3;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 身份证号码
   */
  idNumber?: string;
  /**
   * 证件类型
   */
  idType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
  /**
   * 工号
   */
  employeeId?: string;
  /**
   * 性别:{"MALE":0,"FEMALE":1}
   */
  gender?: 0 | 1;
  resource?: {
    /**
     * 身份证正面
     */
    idCardFront?: string;
    /**
     * 身份证反面
     */
    idCardBack?: string;
    /**
     * 银行卡正面
     */
    bankCardFront?: string;
    /**
     * 个人半身免冠照
     */
    avatar?: string;
    [k: string]: any;
  };
  bankCard?: {
    /**
     * 开户行名称
     */
    bankName?: string;
    /**
     * 银行卡号
     */
    number?: string;
    area?: {
      /**
       * 银行卡所属省
       */
      province?: string;
      /**
       * 银行卡所属市
       */
      city?: string;
      /**
       * 银行卡所属区
       */
      country?: string;
      [k: string]: any;
    };
    /**
     * 开户行所在支行
     */
    subBankName?: string;
    [k: string]: any;
  };
  inviter?: {
    /**
     * 邀请者ID
     */
    userId: string;
    coreAccountId: string;
  };
  superiorOrg: {
    /**
     * 机构ID
     */
    userId: string;
    coreAccountId: string;
  };
  /**
   * 学历
   */
  education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
  /**
   * 机构人员类型
   */
  type?: "salesman" | "office_staff";
  /**
   * 创建时间
   */
  createdAt?: number;
  [k: string]: any;
};

interface PersonnelJobRankGetRequest {
  /**
   * 人员ID
   */
  id: string;
}

/**
 * 职级
 */
interface PersonnelJobRankGetResponse {
  id?: string;
  /**
   * 当前职级
   */
  jobRank:
    | "unverified"
    | "director"
    | "agent"
    | "juniorPartner"
    | "intermediatePartner"
    | "seniorPartner"
    | "salesGeneralManager"
    | "salesDirector"
    | "salesManager"
    | "salesCounselor";
  previous?: {
    /**
     * 入司职级
     */
    jobRank?:
      | "unverified"
      | "director"
      | "agent"
      | "juniorPartner"
      | "intermediatePartner"
      | "seniorPartner"
      | "salesGeneralManager"
      | "salesDirector"
      | "salesManager"
      | "salesCounselor";
    [k: string]: any;
  };
  /**
   * 总监团队
   */
  directorTeam?: {
    /**
     * 代码
     */
    no?: string;
    /**
     * 名称
     */
    name?: string;
    [k: string]: any;
  };
  /**
   * 合伙人团队
   */
  partnerTeam?: {
    /**
     * 代码
     */
    no?: string;
    /**
     * 名称
     */
    name?: string;
    [k: string]: any;
  };
  /**
   * 是否离职
   */
  resign: boolean;
  /**
   * 当前职级起始时间
   */
  presentJobRankStartAt?: number;
  /**
   * 入司时间
   */
  joinAt?: number;
  /**
   * 离司时间
   */
  resignAt?: number;
  [k: string]: any;
}

interface PersonnelOrgPersonnelInfoGetRequest {
  /**
   * 机构人员类型
   */
  type?: "salesman" | "office_staff";
  id: string;
  mode: 1 | 2;
  /**
   * 用户姓名
   */
  userName?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 状态
   */
  status?: 0 | 1 | 2 | 3;
  [k: string]: any;
}

type PersonnelOrgPersonnelInfoGetResponse = {
  /**
   * 人员ID
   */
  id: string;
  coreAccountId: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 账户状态,0-正常，1-冻结，2-不可用，例如密码过期
   */
  status: 0 | 1 | 2 | 3;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 身份证号码
   */
  idNumber?: string;
  /**
   * 证件类型
   */
  idType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
  /**
   * 工号
   */
  employeeId?: string;
  /**
   * 性别:{"MALE":0,"FEMALE":1}
   */
  gender?: 0 | 1;
  resource?: {
    /**
     * 身份证正面
     */
    idCardFront?: string;
    /**
     * 身份证反面
     */
    idCardBack?: string;
    /**
     * 银行卡正面
     */
    bankCardFront?: string;
    /**
     * 个人半身免冠照
     */
    avatar?: string;
    [k: string]: any;
  };
  bankCard?: {
    /**
     * 开户行名称
     */
    bankName?: string;
    /**
     * 银行卡号
     */
    number?: string;
    area?: {
      /**
       * 银行卡所属省
       */
      province?: string;
      /**
       * 银行卡所属市
       */
      city?: string;
      /**
       * 银行卡所属区
       */
      country?: string;
      [k: string]: any;
    };
    /**
     * 开户行所在支行
     */
    subBankName?: string;
    [k: string]: any;
  };
  inviter?: {
    /**
     * 邀请者ID
     */
    userId: string;
    coreAccountId: string;
  };
  superiorOrg: {
    /**
     * 机构ID
     */
    userId: string;
    coreAccountId: string;
  };
  /**
   * 学历
   */
  education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
  /**
   * 机构人员类型
   */
  type?: "salesman" | "office_staff";
  /**
   * 创建时间
   */
  createdAt?: number;
  [k: string]: any;
}[];

interface PersonnelPlatformMsgPushRequest {
  /**
   * 人员ID
   */
  userId: string;
  templateName:
    | "BARGAIN_COMPLETED"
    | "PENDING_PAYMENT"
    | "POLICY_INSURED"
    | "POLICY_RENEWED_REMINDED"
    | "PROPOSAL_UNDERWROTE"
    | "CERTIFICATION_EXAMINE"
    | "CUSTOMER_VISIT"
    | "APPOINTMENT_DISTRIBUTING"
    | "POLICY_SURRENDER"
    | "POLICY_RENEW"
    | "POLICY_RENEW_FAILED"
    | "GUEST_ARTICLE_PUSH";
  /**
   * 不做任何限制
   */
  modelData: {
    [k: string]: any;
  };
  /**
   * 跳转链接
   */
  url?: string;
  [k: string]: any;
}

/**
 * 推送成功, 则返回 true, 推送失败(例如没有存openId), 则返回 false
 */
type PersonnelPlatformMsgPushResponse = boolean;

type PersonnelPromotionGetRequest =
  | {
      settleMode: 0;
      /**
       * 人员ID
       */
      id: string;
      /**
       * 产品入口id
       */
      entranceId: string;
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
      [k: string]: any;
    }
  | {
      settleMode: 1;
      /**
       * 产品入口id
       */
      entranceId: string;
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
      /**
       * 人员ID
       */
      id: string;
      [k: string]: any;
    };

type PersonnelPromotionGetResponse =
  | {
      settleMode: 0;
      /**
       * 钱
       */
      toAgent: number;
      [k: string]: any;
    }
  | {
      settleMode: 1;
      toAgent: number[];
      [k: string]: any;
    };

/**
 * 投保单id
 */
type PersonnelProposalStashDelRequest = string;

type PersonnelProposalStashDelResponse = null;

/**
 * 投保单id
 */
type PersonnelProposalStashGetRequest = string;

type PersonnelProposalStashGetResponse = null | {
  [k: string]: any;
};

interface PersonnelProposalStashRequest {
  /**
   * 投保单id
   */
  id: string;
  data: {
    [k: string]: any;
  };
}

type PersonnelProposalStashResponse = null;

interface PersonnelProposalIdAddRequest {
  /**
   * userId
   */
  userId: string;
  /**
   * uuid
   */
  proposalId: string;
}

type PersonnelProposalIdAddResponse = null;

interface PersonnelProposalIdDelRequest {
  /**
   * userId
   */
  userId: string;
  /**
   * uuid
   */
  proposalId: string;
}

type PersonnelProposalIdDelResponse = null;

interface PersonnelProposalIdListRequest {
  /**
   * uuid
   */
  userId: string;
}

type PersonnelProposalIdListResponse = string[];

type PersonnelQuotationIdAddRequest = {
  /**
   * userId
   */
  userId: string;
  /**
   * uuid
   */
  quotationId: string;
};

type PersonnelQuotationIdAddResponse = null;

interface PersonnelQuotationIdDelRequest {
  /**
   * userId
   */
  userId: string;
  /**
   * uuid
   */
  quotationId: string;
}

type PersonnelQuotationIdDelResponse = null;

interface PersonnelQuotationIdListRequest {
  /**
   * userId
   */
  userId: string;
}

type PersonnelQuotationIdListResponse = string[];

interface PersonnelRecommendProductUpdateRequest {
  /**
   * 机构accountId
   */
  id: string;
  [k: string]: any;
}

type PersonnelRecommendProductUpdateResponse = null;

interface PersonnelStatisticGetRequest {
  /**
   * userId
   */
  personnelId: string;
  date: string;
}

interface PersonnelStatisticGetResponse {
  /**
   * 直属成员人数
   */
  memberAmount: number;
  statistic: {
    currMonth: {
      /**
       * 本月个人业绩
       */
      myAchievement: number;
      /**
       * 本月团队业绩
       */
      teamAchievement: number;
      /**
       * 本月新增成员
       */
      newMember: number;
    };
  };
  memberList: {
    /**
     * 推荐人个人信息
     */
    info: {
      /**
       * 人员ID
       */
      id: string;
      coreAccountId: string;
      /**
       * 手机号
       */
      mobile: string;
      /**
       * 账户状态,0-正常，1-冻结，2-不可用，例如密码过期
       */
      status: 0 | 1 | 2 | 3;
      /**
       * 头像
       */
      avatar: string;
      /**
       * 姓名
       */
      name: string;
      /**
       * 身份证号码
       */
      idNumber?: string;
      /**
       * 证件类型
       */
      idType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
      /**
       * 工号
       */
      employeeId?: string;
      /**
       * 性别:{"MALE":0,"FEMALE":1}
       */
      gender?: 0 | 1;
      resource?: {
        /**
         * 身份证正面
         */
        idCardFront?: string;
        /**
         * 身份证反面
         */
        idCardBack?: string;
        /**
         * 银行卡正面
         */
        bankCardFront?: string;
        /**
         * 个人半身免冠照
         */
        avatar?: string;
        [k: string]: any;
      };
      bankCard?: {
        /**
         * 开户行名称
         */
        bankName?: string;
        /**
         * 银行卡号
         */
        number?: string;
        area?: {
          /**
           * 银行卡所属省
           */
          province?: string;
          /**
           * 银行卡所属市
           */
          city?: string;
          /**
           * 银行卡所属区
           */
          country?: string;
          [k: string]: any;
        };
        /**
         * 开户行所在支行
         */
        subBankName?: string;
        [k: string]: any;
      };
      inviter?: {
        /**
         * 邀请者ID
         */
        userId: string;
        coreAccountId: string;
      };
      superiorOrg: {
        /**
         * 机构ID
         */
        userId: string;
        coreAccountId: string;
      };
      /**
       * 学历
       */
      education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
      /**
       * 机构人员类型
       */
      type?: "salesman" | "office_staff";
      /**
       * 创建时间
       */
      createdAt?: number;
      [k: string]: any;
    };
    statistic: {
      currMonth: {
        /**
         * 本月个人业绩
         */
        myAchievement: number;
        /**
         * 本月新增成员
         */
        newMember: number;
      };
    };
  }[];
}

interface PersonnelStatisticNewMemberIncreaseRequest {
  /**
   * userId
   */
  personnelId: string;
}

type PersonnelStatisticNewMemberIncreaseResponse = null;

interface PersonnelSubGetRequest {
  /**
   * 机构ID
   */
  id: string;
  /**
   * 1-userId, 2-coreAccountId
   */
  type: 1 | 2;
  [k: string]: any;
}

type PersonnelSubGetResponse = {
  /**
   * 人员ID
   */
  id: string;
  coreAccountId: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 账户状态,0-正常，1-冻结，2-不可用，例如密码过期
   */
  status: 0 | 1 | 2 | 3;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 身份证号码
   */
  idNumber?: string;
  /**
   * 证件类型
   */
  idType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
  /**
   * 工号
   */
  employeeId?: string;
  /**
   * 性别:{"MALE":0,"FEMALE":1}
   */
  gender?: 0 | 1;
  resource?: {
    /**
     * 身份证正面
     */
    idCardFront?: string;
    /**
     * 身份证反面
     */
    idCardBack?: string;
    /**
     * 银行卡正面
     */
    bankCardFront?: string;
    /**
     * 个人半身免冠照
     */
    avatar?: string;
    [k: string]: any;
  };
  bankCard?: {
    /**
     * 开户行名称
     */
    bankName?: string;
    /**
     * 银行卡号
     */
    number?: string;
    area?: {
      /**
       * 银行卡所属省
       */
      province?: string;
      /**
       * 银行卡所属市
       */
      city?: string;
      /**
       * 银行卡所属区
       */
      country?: string;
      [k: string]: any;
    };
    /**
     * 开户行所在支行
     */
    subBankName?: string;
    [k: string]: any;
  };
  inviter?: {
    /**
     * 邀请者ID
     */
    userId: string;
    coreAccountId: string;
  };
  superiorOrg: {
    /**
     * 机构ID
     */
    userId: string;
    coreAccountId: string;
  };
  /**
   * 学历
   */
  education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
  /**
   * 机构人员类型
   */
  type?: "salesman" | "office_staff";
  /**
   * 创建时间
   */
  createdAt?: number;
  [k: string]: any;
}[];

interface PersonnelWechatGetRequest {
  id: string;
  /**
   * {"PERSONNEL_ID":1,"OPEN_ID":2,"UNION_ID":3}
   */
  type: 1 | 2 | 3;
  [k: string]: any;
}

type PersonnelWechatGetResponse = null | {
  /**
   * 人员ID
   */
  id: string;
  /**
   * openId
   */
  openId: string;
  /**
   * unionId
   */
  unionId: string;
  [k: string]: any;
};

interface PersonnelWechatSetRequest {
  /**
   * 人员ID
   */
  id: string;
  /**
   * openId
   */
  openId?: string;
  /**
   * unionId
   */
  unionId?: string;
  [k: string]: any;
}

type PersonnelWechatSetResponse = null;

/**
 * 人员ID
 */
type PersonnelWechatUserInfoPullRequest = string;

type PersonnelWechatUserInfoPullResponse = null;

interface PersonnelWithdrawalRecordAddRequest {
  /**
   * 提现记录ID
   */
  id: string;
  /**
   * uuid
   */
  userId: string;
  coreAccountId: string;
  /**
   * 状态
   */
  status: number;
  /**
   * 申请提现金额
   */
  amount: number;
  /**
   * 实际提现金额
   */
  actualAmount?: number;
  /**
   * 税
   */
  tax?: number;
  createdAt: number;
  paymentAt?: number;
  [k: string]: any;
}

type PersonnelWithdrawalRecordAddResponse = null;

interface PersonnelWithdrawalRecordChangeRequest {
  /**
   * 人员ID
   */
  id: string;
  /**
   * 钱
   */
  actualAmount?: number;
  /**
   * 钱
   */
  tax: number;
  [k: string]: any;
}

type PersonnelWithdrawalRecordChangeResponse = boolean;

/**
 * 人员ID
 */
type PersonnelWithdrawalRecordCurrentGetRequest = string;

type PersonnelWithdrawalRecordCurrentGetResponse = null | {
  /**
   * 提现记录ID
   */
  id: string;
  /**
   * uuid
   */
  userId: string;
  coreAccountId: string;
  /**
   * 状态
   */
  status: number;
  /**
   * 申请提现金额
   */
  amount: number;
  /**
   * 实际提现金额
   */
  actualAmount?: number;
  /**
   * 税
   */
  tax?: number;
  createdAt: number;
  paymentAt?: number;
  [k: string]: any;
};

interface PersonnelWithdrawalRecordFindRequest {
  id: string;
  /**
   * {"USER_ID":1}
   */
  mode: 1;
  [k: string]: any;
}

type PersonnelWithdrawalRecordFindResponse = {
  /**
   * 提现记录ID
   */
  id: string;
  /**
   * uuid
   */
  userId: string;
  coreAccountId: string;
  /**
   * 状态
   */
  status: number;
  /**
   * 申请提现金额
   */
  amount: number;
  /**
   * 实际提现金额
   */
  actualAmount?: number;
  /**
   * 税
   */
  tax?: number;
  createdAt: number;
  paymentAt?: number;
  [k: string]: any;
}[];

