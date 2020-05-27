// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

type PolicyAddRequest =
  | {
      /**
       * 单个保单号单
       */
      structure: 0;
      policy: {
        /**
         * 保单类型
         */
        type?: 0 | 1 | 2 | 3 | 4;
        /**
         * 保单来自的平台
         */
        from: 0 | 1 | 2 | 3;
        /**
         * 入口id
         */
        entranceId: string;
        /**
         * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
         */
        insuranceType: string;
        /**
         * 险种id
         */
        insuranceId: string;
        /**
         * 保单号
         */
        no?: string;
        /**
         * 保险公司id
         */
        companyId: string;
        /**
         * 投保人
         */
        applicant: {
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
         * 跟踪id
         */
        traceId?: string;
        /**
         * 被保人
         */
        insuredList: {
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
        status: 0 | 1 | 2 | 4 | 5 | 6 | 7 | 9;
        /**
         * 保单子状态
         */
        subStatus: 0 | 11 | 12 | 13 | 10 | 16 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 14 | 8 | 9 | 18 | 17 | 15 | 98 | 99 | 100;
        /**
         * 自有的支付单ID
         */
        paymentId?: string;
        /**
         * 操作者账户id
         */
        accountId: string;
        /**
         * 保费
         */
        premium: number;
        /**
         * 创建时间
         */
        createdAt: number;
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
         * 生效时间
         */
        effectedAt: number;
        /**
         * 失效时间
         */
        expiredAt: number;
        /**
         * 最近修改时间
         */
        modifiedAt: number;
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
        /**
         * 报价单id
         */
        quotationId?: string;
        /**
         * 险种自定义数据
         */
        extraData?: {
          [k: string]: any;
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
         * 指定policyId
         */
        id?: string;
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
        /**
         * 续期/续保信息
         */
        renewal?: {
          /**
           * 续期记录信息,后期加上的字段，默认为空
           */
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
           * 额外信息
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
            [k: string]: any;
          };
        };
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      /**
       * 组合单
       */
      structure: 1;
      policies: {
        /**
         * 保单类型
         */
        type?: 0 | 1 | 2 | 3 | 4;
        /**
         * 保单来自的平台
         */
        from: 0 | 1 | 2 | 3;
        /**
         * 入口id
         */
        entranceId: string;
        /**
         * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
         */
        insuranceType: string;
        /**
         * 险种id
         */
        insuranceId: string;
        /**
         * 保单号
         */
        no?: string;
        /**
         * 保险公司id
         */
        companyId: string;
        /**
         * 投保人
         */
        applicant: {
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
         * 跟踪id
         */
        traceId?: string;
        /**
         * 被保人
         */
        insuredList: {
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
        status: 0 | 1 | 2 | 4 | 5 | 6 | 7 | 9;
        /**
         * 保单子状态
         */
        subStatus: 0 | 11 | 12 | 13 | 10 | 16 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 14 | 8 | 9 | 18 | 17 | 15 | 98 | 99 | 100;
        /**
         * 自有的支付单ID
         */
        paymentId?: string;
        /**
         * 操作者账户id
         */
        accountId: string;
        /**
         * 保费
         */
        premium: number;
        /**
         * 创建时间
         */
        createdAt: number;
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
         * 生效时间
         */
        effectedAt: number;
        /**
         * 失效时间
         */
        expiredAt: number;
        /**
         * 最近修改时间
         */
        modifiedAt: number;
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
        /**
         * 报价单id
         */
        quotationId?: string;
        /**
         * 险种自定义数据
         */
        extraData?: {
          [k: string]: any;
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
         * 指定policyId
         */
        id?: string;
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
        /**
         * 续期/续保信息
         */
        renewal?: {
          /**
           * 续期记录信息,后期加上的字段，默认为空
           */
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
           * 额外信息
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
            [k: string]: any;
          };
        };
        [k: string]: any;
      }[];
      [k: string]: any;
    };

/**
 * 保单id
 */
type PolicyAddResponse = string;

/**
 * 理赔单id
 */
type PolicyClaimGetRequest = string;

type PolicyClaimGetResponse = {
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
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  modifiedAt: number;
  /**
   * 理赔状态
   */
  status: 0 | 3 | 4 | 1 | 2;
  /**
   * 支付失败原因
   */
  claimFailedReason?: string;
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 险种id
   */
  insuranceId: string;
  [k: string]: any;
} | null;

interface PolicyClaimListRequest {
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
  /**
   * 险种id
   */
  insuranceId?: string;
  status?: (0 | 3 | 4 | 1 | 2)[];
  /**
   * ORM Logic Json
   */
  accountId?: {
    [k: string]: any;
  };
  /**
   * 保单id
   */
  policyId?: string;
  page: number;
  pageSize: number;
  [k: string]: any;
}

interface PolicyClaimListResponse {
  data: {
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
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    createdAt: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    modifiedAt: number;
    /**
     * 理赔状态
     */
    status: 0 | 3 | 4 | 1 | 2;
    /**
     * 支付失败原因
     */
    claimFailedReason?: string;
    /**
     * 操作者账户id
     */
    accountId: string;
    /**
     * 险种id
     */
    insuranceId: string;
    [k: string]: any;
  }[];
  totalCount: number;
}

interface PolicyClaimSetRequest {
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
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  modifiedAt: number;
  /**
   * 理赔状态
   */
  status: 0 | 3 | 4 | 1 | 2;
  /**
   * 支付失败原因
   */
  claimFailedReason?: string;
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 险种id
   */
  insuranceId: string;
  [k: string]: any;
}

type PolicyClaimSetResponse = null;

/**
 * uuid
 */
type PolicyEndorsementGetRequest = string;

type PolicyEndorsementGetResponse = {
  /**
   * uuid
   */
  id: string;
  /**
   * 入口id
   */
  entranceId: string;
  frontendProcessId?: string;
  /**
   * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
   */
  insuranceType: string;
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * policyId
   */
  policyId: string;
  /**
   * 保单号
   */
  policyNo: string;
  /**
   * 跟踪Id
   */
  traceId?: string;
  companyId: string;
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 批改内容
   */
  extraData: {
    [k: string]: any;
  };
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
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  modifiedAt: number;
  /**
   * 支付id
   */
  paymentId?: string;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  paidAt?: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  refundAt?: number;
  /**
   * 退款id
   */
  refundId?: string;
  status: 0 | 1 | 2 | 3 | 4;
  [k: string]: any;
} | null;

interface PolicyEndorsementListRequest {
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
   * 保单号
   */
  policyNo?: string;
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
  /**
   * ORM Logic Json
   */
  accountId?: {
    [k: string]: any;
  };
  status: (0 | 1 | 2 | 3 | 4)[];
  page: number;
  pageSize: number;
  [k: string]: any;
}

interface PolicyEndorsementListResponse {
  data: {
    /**
     * uuid
     */
    id: string;
    /**
     * 入口id
     */
    entranceId: string;
    frontendProcessId?: string;
    /**
     * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
     */
    insuranceType: string;
    /**
     * 险种id
     */
    insuranceId: string;
    /**
     * policyId
     */
    policyId: string;
    /**
     * 保单号
     */
    policyNo: string;
    /**
     * 跟踪Id
     */
    traceId?: string;
    companyId: string;
    /**
     * 操作者账户id
     */
    accountId: string;
    /**
     * 批改内容
     */
    extraData: {
      [k: string]: any;
    };
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
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    createdAt: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    modifiedAt: number;
    /**
     * 支付id
     */
    paymentId?: string;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    paidAt?: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    refundAt?: number;
    /**
     * 退款id
     */
    refundId?: string;
    status: 0 | 1 | 2 | 3 | 4;
    [k: string]: any;
  }[];
  totalCount: number;
}

interface PolicyEndorsementSetRequest {
  /**
   * uuid
   */
  id: string;
  /**
   * 入口id
   */
  entranceId: string;
  frontendProcessId?: string;
  /**
   * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
   */
  insuranceType: string;
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * policyId
   */
  policyId: string;
  /**
   * 保单号
   */
  policyNo: string;
  /**
   * 跟踪Id
   */
  traceId?: string;
  companyId: string;
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 批改内容
   */
  extraData: {
    [k: string]: any;
  };
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
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  modifiedAt: number;
  /**
   * 支付id
   */
  paymentId?: string;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  paidAt?: number;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  refundAt?: number;
  /**
   * 退款id
   */
  refundId?: string;
  status: 0 | 1 | 2 | 3 | 4;
  [k: string]: any;
}

type PolicyEndorsementSetResponse = null;

/**
 * 保单id
 */
type PolicyGetRequest = string;

/**
 * 组合单的话，将吐回两个保单
 */
type PolicyGetResponse = {
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
   * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
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
    };
  };
  [k: string]: any;
} | null;

interface PolicyListRequest {
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
  status?: (0 | 1 | 2 | 4 | 5 | 6 | 7 | 9)[];
  subStatus?: (0 | 11 | 12 | 13 | 10 | 16 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 14 | 8 | 9 | 18 | 17 | 15 | 98 | 99 | 100)[];
  /**
   * 投保人姓名
   */
  applicantName?: string;
  /**
   * 证件号码
   */
  applicantIdentity?: string;
  /**
   * 手机号
   */
  applicantMobile?: string;
  /**
   * 被保人姓名
   */
  insuredName?: string;
  /**
   * 证件号码
   */
  insuredIdentity?: string;
  /**
   * ORM Logic Json
   */
  accountId?: {
    [k: string]: any;
  };
  /**
   * 保单号
   */
  policyNo?: string;
  insuredAtRange?: {
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
  /**
   * ORM Logic Json
   */
  sort?: {
    [k: string]: any;
  };
  /**
   * 保单id
   */
  id?: string;
  page?: number;
  pageSize?: number;
  [k: string]: any;
}

interface PolicyListResponse {
  data: {
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
     * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
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
      };
    };
    [k: string]: any;
  }[];
  /**
   * 列表总数
   */
  totalCount: number;
}

/**
 * 保单id
 */
type PolicyReceiptGetRequest = string;

type PolicyReceiptGetResponse = {
  /**
   * 保单id
   */
  id: string;
  images: string[];
} | null;

interface PolicyReceiptSetRequest {
  /**
   * 保单id
   */
  id: string;
  images: string[];
}

type PolicyReceiptSetResponse = null;

interface PolicySetRequest {
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
   * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
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
    };
  };
  [k: string]: any;
}

type PolicySetResponse = null;

