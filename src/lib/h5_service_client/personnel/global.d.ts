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

interface PersonnelCustomerVisitRecordAddRequest {
  /**
   * 用户id
   */
  agentId?: string;
  /**
   * 客户id
   */
  customerId?: string;
  visitType?:
    | "insurance"
    | "visiting_card"
    | "appoint_underwrite"
    | "family_risk_assess"
    | "enterprise_risk_assess"
    | "visiting_article"
    | "insurance_poster"
    | "insurance_plan";
  /**
   * 是否增加总浏览次数,不传默认为增加
   */
  addTotalVisitTimes?: boolean;
  /**
   * 当visitType为insurance时必传此字段
   */
  entranceId?: string;
  /**
   * 当访问类型为测评时必传此字段
   */
  reportId?: string;
  /**
   * 文章id
   */
  articleId?: string;
  /**
   * uuid
   */
  shareId?: string;
  /**
   * 停留时间，单位：秒
   */
  stayTime?: number;
  /**
   * 阅读量
   */
  readingProgress?: number;
  /**
   * 当访问类型为海报预约产品必传此字段
   */
  posterId?: string;
  [k: string]: any;
}

type PersonnelCustomerVisitRecordAddResponse = null;

type PersonnelDailyWechatMsgSendRequest = string[];

type PersonnelDailyWechatMsgSendResponse = null;

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
     * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000","PRODUCT":"202001"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
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
       * {"ID_CARD":0,"PASSPORT":1,"ORGANIZATION":2,"BUSINESS_LICENSE":3,"TAX":4,"COMPANY_UNION_ID":5,"OTHER":6,"MILITARY":7,"BIRTH":8,"RETURN":9,"TEMP_ID_CARD":10,"POLICE":11,"TAIWAN":12,"HOUSEHOLD":13,"FOREIGNER_RESIDENCE_PERMIT_IN_CHINA":14,"HK_MACAO_TW_RESIDENCE_PERMIT_IN_CHINA":15,"HK_MACAO_ENTRY_AND_EXIT_PERMIT":16,"TW_ENTRY_AND_EXIT_PERMIT":17,"DRIVE":18,"MANAGEMENT_LICENCE":19,"WORK":20,"SOLDIER":21,"STUDENT":22,"HK_MACAO_CARD":23,"FOREIGN_PASSPORT":24}
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
        | 22
        | 23
        | 24;
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
       * {"ID_CARD":0,"PASSPORT":1,"ORGANIZATION":2,"BUSINESS_LICENSE":3,"TAX":4,"COMPANY_UNION_ID":5,"OTHER":6,"MILITARY":7,"BIRTH":8,"RETURN":9,"TEMP_ID_CARD":10,"POLICE":11,"TAIWAN":12,"HOUSEHOLD":13,"FOREIGNER_RESIDENCE_PERMIT_IN_CHINA":14,"HK_MACAO_TW_RESIDENCE_PERMIT_IN_CHINA":15,"HK_MACAO_ENTRY_AND_EXIT_PERMIT":16,"TW_ENTRY_AND_EXIT_PERMIT":17,"DRIVE":18,"MANAGEMENT_LICENCE":19,"WORK":20,"SOLDIER":21,"STUDENT":22,"HK_MACAO_CARD":23,"FOREIGN_PASSPORT":24}
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
        | 22
        | 23
        | 24;
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
    subStatus?: 0 | 11 | 12 | 13 | 10 | 16 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 14 | 8 | 9 | 18 | 17 | 15 | 98 | 99 | 100;
    /**
     * 自有的支付单ID
     */
    paymentId?: string;
    /**
     * 操作者账户id
     */
    accountId?: string;
    /**
     * 操作者账户id
     */
    orgAccountId?: string;
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
         * {"ID_CARD":0,"PASSPORT":1,"ORGANIZATION":2,"BUSINESS_LICENSE":3,"TAX":4,"COMPANY_UNION_ID":5,"OTHER":6,"MILITARY":7,"BIRTH":8,"RETURN":9,"TEMP_ID_CARD":10,"POLICE":11,"TAIWAN":12,"HOUSEHOLD":13,"FOREIGNER_RESIDENCE_PERMIT_IN_CHINA":14,"HK_MACAO_TW_RESIDENCE_PERMIT_IN_CHINA":15,"HK_MACAO_ENTRY_AND_EXIT_PERMIT":16,"TW_ENTRY_AND_EXIT_PERMIT":17,"DRIVE":18,"MANAGEMENT_LICENCE":19,"WORK":20,"SOLDIER":21,"STUDENT":22,"HK_MACAO_CARD":23,"FOREIGN_PASSPORT":24}
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
          | 22
          | 23
          | 24;
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
        bankId:
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
          | 22
          | 23
          | 24
          | 25
          | 26
          | 27
          | 28
          | 29
          | 30
          | 31
          | 32
          | 33
          | 34
          | 35
          | 36
          | 37
          | 38
          | 39
          | 40
          | 41
          | 42
          | 43
          | 44
          | 45
          | 46
          | 47
          | 48
          | 49
          | 50
          | 51
          | 52
          | 53
          | 54
          | 55
          | 56
          | 57
          | 58
          | 59
          | 60
          | 61
          | 62
          | 63
          | 64
          | 65
          | 66
          | 67
          | 68
          | 69
          | 70
          | 71
          | 72
          | 73
          | 74
          | 75
          | 76
          | 77
          | 78
          | 79
          | 80
          | 81
          | 82
          | 83
          | 84
          | 85
          | 86
          | 87
          | 88
          | 89
          | 90
          | 91
          | 92
          | 93
          | 94
          | 95
          | 96
          | 97
          | 98
          | 99
          | 100
          | 101
          | 102
          | 103
          | 104
          | 105
          | 106
          | 107
          | 108
          | 109
          | 110
          | 111
          | 112
          | 113
          | 114
          | 115
          | 116
          | 117
          | 118
          | 119
          | 120
          | 121
          | 122
          | 123
          | 124
          | 125
          | 126
          | 127
          | 128
          | 129
          | 130
          | 131
          | 132
          | 133
          | 134
          | 135
          | 136
          | 137
          | 138
          | 139
          | 140
          | 141
          | 142
          | 143
          | 144
          | 145
          | 146
          | 147
          | 148
          | 149
          | 150
          | 151
          | 152
          | 153
          | 154
          | 155
          | 156
          | 157
          | 158
          | 159
          | 160
          | 161
          | 162
          | 163
          | 164
          | 165
          | 166
          | 167
          | 168
          | 169
          | 170
          | 171
          | 172
          | 173
          | 174;
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
          | 22
          | 23
          | 24;
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
        /**
         * 短信验证码,代扣必须
         */
        verifyCode?: string;
      };
    };
    [k: string]: any;
  };
  /**
   * 本人推广费列表
   */
  promotionMoney: number[];
  /**
   * 上级机构推广费列表
   */
  orgPromotionMoney: number[];
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
  /**
   * 保单id
   */
  specificId?: string;
  /**
   * 人员ID
   */
  userId?: string;
  coreAccountId?: string;
  /**
   * 不传默认为true
   */
  enabled?: boolean;
  /**
   * 创建时间范围
   */
  createdAtRange?: {
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    from?: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    to?: number;
    [k: string]: any;
  };
  createdAt?: number[] | number;
  /**
   * 对账时间范围
   */
  auditedAtRange?: {
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    from?: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    to?: number;
    [k: string]: any;
  };
  /**
   * 收入类型
   */
  type?: (1 | 2 | 3)[] | (1 | 2 | 3);
  /**
   * 来源
   */
  from?: 0 | 1 | 2 | 3;
  /**
   * 保单或批单? policy or endorsement
   */
  specificType?: string;
  /**
   * 收入状态
   */
  status?: (1 | 2 | 3 | 4 | 5 | 6 | 7)[] | (1 | 2 | 3 | 4 | 5 | 6 | 7);
  /**
   * 非收入状态：status和nonStatus只能同时使用一个，否则报错
   */
  nonStatus?: (1 | 2 | 3 | 4 | 5 | 6 | 7)[] | (1 | 2 | 3 | 4 | 5 | 6 | 7);
  /**
   * 只能在带上specificId(保单id)时 传allIncome=true才能查询未开启的收入记录否则报错 不传默认为false
   */
  allIncome?: boolean;
  /**
   * "ORM Logic Json"，默认按照createdAt倒序
   */
  sort?: {
    [k: string]: any;
  };
  page?: number;
  pageSize?: number;
  [k: string]: any;
}

interface PersonnelIncomeRecordFindResponse {
  data?: {
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
  total?: number;
  [k: string]: any;
}

interface PersonnelIncomeRecordQueryRequest {
  id: string;
  /**
   * {"USER_ID":1,"SPECIFIC_ID":3,"USER_ID_AND_SHOW_FROZEN":4,"USER_ID_AND_NOT_SHOW_SURRENDER":5}
   */
  mode: 1 | 3 | 4 | 5;
  [k: string]: any;
}

type PersonnelIncomeRecordQueryResponse = {
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
  idType?:
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
    | 22
    | 23
    | 24;
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

interface PersonnelOrgPersonnelInfoGetRequest {
  superiorOrgCoreAccountId?: string;
  /**
   * 人员ID
   */
  superiorOrgUserId?: string;
  /**
   * 推荐人CoreAccountId可传空字符串
   */
  inviterCoreAccountId?: string;
  /**
   * 机构人员类型
   */
  type?: "salesman" | "office_staff";
  /**
   * 用户姓名
   */
  name?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 状态
   */
  status?: 0 | 1 | 2 | 3;
  /**
   * 注册时间
   */
  registerAt?: {
    /**
     * 开始时间
     */
    form?: number;
    /**
     * 结束时间
     */
    to?: number;
    [k: string]: any;
  };
  [k: string]: any;
}

interface PersonnelOrgPersonnelInfoGetResponse {
  data?: {
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
    idType?:
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
      | 22
      | 23
      | 24;
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
  total?: number;
  [k: string]: any;
}

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
    | "GUEST_ARTICLE_PUSH"
    | "DAILY_VISIT_MSG"
    | "JOB_REMINDER"
    | "QUOTATION_QUOTE"
    | "NEGOTIATION_APPLY"
    | "FINANCE_DEAL";
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

interface PersonnelPromotionGetRequest {
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
}

type PersonnelPromotionGetResponse = number[];

interface PersonnelShareAddRequest {
  /**
   * 用户id
   */
  userId: string;
  /**
   * 客户id
   */
  customerId?: string;
  visitType:
    | "insurance"
    | "visiting_card"
    | "appoint_underwrite"
    | "family_risk_assess"
    | "enterprise_risk_assess"
    | "visiting_article"
    | "insurance_poster"
    | "insurance_plan";
  /**
   * 是否增加总浏览次数,不传默认为增加
   */
  addTotalVisitTimes?: boolean;
  /**
   * 当visitType为insurance时必传此字段
   */
  entranceId?: string;
  /**
   * 文章id
   */
  articleId?: string;
  /**
   * 停留时间，单位：秒
   */
  stayTime?: number;
  /**
   * 阅读量
   */
  readingProgress?: number;
  /**
   * 当访问类型为海报预约产品必传此字段
   */
  posterId?: string;
  [k: string]: any;
}

/**
 * shareId
 */
type PersonnelShareAddResponse = string;

/**
 * 操作者账户id
 */
type PersonnelShopConfigGetRequest = string;

interface PersonnelShopConfigGetResponse {
  [k: string]: any;
}

interface PersonnelStatisticGetRequest {
  /**
   * userId
   */
  personnelId: string;
  date: string;
  coreAccountId: string;
}

interface PersonnelStatisticGetResponse {
  /**
   * 直属成员人数
   */
  memberAmount?: number;
  statistic?: {
    currMonth: {
      /**
       * 个人本月业绩
       */
      my: {
        /**
         * 保费
         */
        premium?: number;
        /**
         * 出单数
         */
        achievement?: number;
        /**
         * 本月邀新成员
         */
        newMember?: {
          /**
           * 未认证
           */
          unCertification?: number;
          /**
           * 已认证
           */
          certification?: number;
          [k: string]: any;
        };
        /**
         * 邀请奖励
         */
        invitePromotionMoney?: number;
      };
      /**
       * 团队本月业绩
       */
      team: {
        /**
         * 保费
         */
        premium?: number;
        /**
         * 出单数
         */
        achievement?: number;
        /**
         * 本月邀新成员
         */
        newMember?: {
          /**
           * 未认证
           */
          unCertification?: number;
          /**
           * 已认证
           */
          certification?: number;
          [k: string]: any;
        };
      };
    };
  };
  /**
   * 成员信息列表
   */
  memberList?: {
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
      idType?:
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
        | 22
        | 23
        | 24;
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
         * 个人本月业绩
         */
        my: {
          /**
           * 保费
           */
          premium?: number;
          /**
           * 出单数
           */
          achievement?: number;
          /**
           * 本月邀新成员
           */
          newMember?: {
            /**
             * 未认证
             */
            unCertification?: number;
            /**
             * 已认证
             */
            certification?: number;
            [k: string]: any;
          };
        };
      };
    };
  }[];
}

interface PersonnelStatisticNewMemberIncreaseRequest {
  /**
   * userId
   */
  personnelId: string;
  /**
   * 新增直属成员userId
   */
  newMemberId: string;
}

type PersonnelStatisticNewMemberIncreaseResponse = null;

interface PersonnelSubGetRequest {
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
  idType?:
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
    | 22
    | 23
    | 24;
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
  type: number;
  amount: {
    /**
     * 申请提现金额
     */
    promotion?: number;
    /**
     * 申请提现金额
     */
    commission?: number;
    [k: string]: any;
  };
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
  userId: string;
  /**
   * 提现记录ID
   */
  recordId: string;
  [k: string]: any;
}

type PersonnelWithdrawalRecordChangeResponse = null;

/**
 * 人员ID
 */
type PersonnelWithdrawalRecordCurrentGetRequest = string;

interface PersonnelWithdrawalRecordCurrentGetResponse {
  /**
   * 提现记录ID
   */
  promotion?: string;
  /**
   * 提现记录ID
   */
  commission?: string;
}

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
  type: number;
  amount: {
    /**
     * 申请提现金额
     */
    promotion?: number;
    /**
     * 申请提现金额
     */
    commission?: number;
    [k: string]: any;
  };
  /**
   * 税
   */
  tax?: number;
  createdAt: number;
  paymentAt?: number;
  [k: string]: any;
}[];

