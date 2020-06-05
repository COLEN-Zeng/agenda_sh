// 本文件由toolchain/code_generator/inside_handler/build自动生成,请勿手动修改


type group_policy_add_param = {
    request: InsideGroupPolicyAddRequest;

}
interface InsideGroupPolicyAddRequest {
  /**
   * 入口id
   */
  entranceId: string;
  policy:
    | {
        quotePlan: {
          plan: {
            main: {
              /**
               * 仓储物
               */
              cangChuWuBaoZhang?: number;
              /**
               * 是否含装修
               */
              includeDecoration: boolean;
              /**
               * 机器设备
               */
              jiQiSheBeiGuZhang?: number;
              /**
               * 建筑物
               */
              jianZuWuJiFuShuSheShiBaoZhang?: number;
              /**
               * 钱
               */
              zhuangZhiJiaJuJiBanGongYongPinBaoZhang?: number;
              [k: string]: any;
            };
            rider: {
              yiBanShiGuMianPei: {
                type: "complex";
                yiBanShiGuMianPeiRate: {
                  amount: "5%" | "10%" | "15%" | "20%" | "25%" | "30%";
                };
                yiBanShiGuMianPeiMoney: {
                  amount: 1000 | 5000 | 10000 | 20000 | 50000 | 100000;
                };
              };
              daoQieQiangJieMianPei: {
                type: "complex";
                daoQieQiangJieMianPeiRate: {
                  amount: "5%" | "10%" | "15%" | "20%" | "25%" | "30%";
                };
                daoQieQiangJieMianPeiMoney: {
                  amount: 1000 | 5000 | 10000 | 20000 | 50000 | 100000;
                };
              };
            };
            termList?: string[];
            [k: string]: any;
          };
          quoteDetail: {
            /**
             * 保障类别
             */
            type: string;
            /**
             * 工业等级
             */
            insuredObjectType: string;
            /**
             * 公司名
             */
            companyName: string;
            /**
             * 特别约定
             */
            specialAgreement?: string[];
            [k: string]: any;
          };
        };
        extraData?: {
          /**
           * 标的地址
           */
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
             * 详细地址
             */
            street: string;
            [k: string]: any;
          };
          /**
           * 所属行业
           */
          industry: string;
          /**
           * 标的相关图片
           */
          insuredObjectImage: string[];
          /**
           * 备注信息
           */
          remark?: string;
          /**
           * 受益人
           */
          firstBeneficiary?: string;
          [k: string]: any;
        };
        frontendProcessId: "raceEnterprisePropertyInsurance" | "raceLogisticsLiability";
        /**
         * 操作者账户id
         */
        accountId: string;
        /**
         * 保费
         */
        premium: number;
        companyId: string;
        companyArea?: string;
        /**
         * 保单子状态
         */
        subStatus: 6 | 7 | 8;
        /**
         * 保单号
         */
        no: string;
        /**
         * 缴费期限
         */
        payPeriod: 1;
        /**
         * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
         */
        payPeriodUnit: "once";
        /**
         * 保障期限
         */
        period: number;
        /**
         * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
         */
        periodUnit: "M";
        /**
         * 险种id
         */
        insuranceId: string;
        /**
         * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000","PRODUCT":"202001"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
         */
        insuranceType: string;
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
          extraData: {
            /**
             * 证件照
             */
            licenseImage: string;
          };
          [k: string]: any;
        };
        /**
         * 联系人信息
         */
        delivery?: {
          /**
           * 姓名
           */
          name: string;
          /**
           * 电脑
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
             * 详细地址
             */
            street: string;
          };
        };
        /**
         * 投保日期 - 即报价单创建日期
         */
        createdAt: number;
        /**
         * 承保时间
         */
        insuredAt: number;
        /**
         * 生效时间
         */
        effectedAt: number;
        /**
         * 失效时间
         */
        expiredAt: number;
        /**
         * 回执时间
         */
        receiptAt?: number;
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
        [k: string]: any;
      }
    | {
        quotePlan: {
          plan: {
            main: {
              amount:
                | "80万（累计150万）"
                | "100万（累计200万）"
                | "150万（累计300万）"
                | "200万（累计400万）"
                | "250万（累计500万）"
                | "300万（累计600万）"
                | "500万（累计1000万）";
            };
            rider: {
              muCai: {
                amount: "投保" | "不投保";
              };
              xinJiang: {
                amount: "投保" | "不投保";
              };
              lengCangPin: {
                amount: "投保" | "不投保";
              };
              jingMiZuJian: {
                amount: "投保" | "不投保";
              };
              daoQieQiangJie: {
                amount: "投保" | "不投保";
              };
            };
          };
          quoteDetail: {
            /**
             * 公司名
             */
            companyName: string;
            /**
             * 货物种类
             */
            cargoType: string[];
            /**
             * 标的资质图片
             */
            cargoImgList: string[];
            /**
             * 运输方式
             */
            transportType: string;
            /**
             * 预估营收
             */
            estimatedRevenue: number;
            /**
             * 备注
             */
            remark?: string;
            /**
             * 特别约定
             */
            specialAgreement?: string[];
            [k: string]: any;
          };
        };
        extraData?: {
          /**
           * 受益人(同第一受益人), 因企业已经用了该字段, 为了统一, 这里依旧在前面加 first
           */
          firstBeneficiary?: string;
          [k: string]: any;
        };
        frontendProcessId: "raceEnterprisePropertyInsurance" | "raceLogisticsLiability";
        /**
         * 操作者账户id
         */
        accountId: string;
        /**
         * 保费
         */
        premium: number;
        companyId: string;
        companyArea?: string;
        /**
         * 保单子状态
         */
        subStatus: 6 | 7 | 8;
        /**
         * 保单号
         */
        no: string;
        /**
         * 缴费期限
         */
        payPeriod: 1;
        /**
         * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
         */
        payPeriodUnit: "once";
        /**
         * 保障期限
         */
        period: number;
        /**
         * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
         */
        periodUnit: "M";
        /**
         * 险种id
         */
        insuranceId: string;
        /**
         * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000","PRODUCT":"202001"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
         */
        insuranceType: string;
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
          extraData: {
            /**
             * 证件照
             */
            licenseImage: string;
          };
          [k: string]: any;
        };
        /**
         * 联系人信息
         */
        delivery?: {
          /**
           * 姓名
           */
          name: string;
          /**
           * 电脑
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
             * 详细地址
             */
            street: string;
          };
        };
        /**
         * 投保日期 - 即报价单创建日期
         */
        createdAt: number;
        /**
         * 承保时间
         */
        insuredAt: number;
        /**
         * 生效时间
         */
        effectedAt: number;
        /**
         * 失效时间
         */
        expiredAt: number;
        /**
         * 回执时间
         */
        receiptAt?: number;
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
        [k: string]: any;
      };
}

/**
 * 保单id
 */
type InsideGroupPolicyAddResponse = string;


type insurance_config_get_param = {
    request: InsideInsuranceConfigGetRequest;

}
/**
 * 险种id
 */
type InsideInsuranceConfigGetRequest = string;

type InsideInsuranceConfigGetResponse = null | {
  [k: string]: any;
};


type pay_order_create_param = {
    request: InsidePayOrderCreateRequest;

}
/**
 * 创建支付/退款订单的请求参数, 由调用者决定 required 哪些属性
 */
interface InsidePayOrderCreateRequest {
  /**
   * 保单id
   */
  policyId?: string;
  /**
   * 钱
   */
  fee?: number;
  /**
   * 发货类型: {"POLICY":1,"ENDORSEMENT":2}
   */
  shipmentType?: 1 | 2;
  /**
   * 支付类型： {"WECHAT_PAY":1,"OFFLINE":2,"BANK_CARD":3,"ALI_PAY":4,"THIRD_PARTY_WECHAT_PAY":5,"THIRD_PARTY_WECHAT_PAY_H5":6,"THIRD_PARTY_ALI_PAY":7,"THIRD_PARTY_WAP_ALI_PAY":8}
   */
  method?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /**
   * 操作类型: {"PAY":1,"REFUND":2,"SIGN":3}
   */
  opsType?: 1 | 2 | 3;
  /**
   * openId
   */
  openId?: string;
  [k: string]: any;
}

type InsidePayOrderCreateResponse =
  | null
  | {
      /**
       * 自有的支付单ID
       */
      paymentId: string;
      paymentParam: {
        /**
         * appId
         */
        appId: string;
        /**
         * 时间戳从1970年1月1日00:00:00至今的秒数
         */
        timeStamp: number;
        /**
         * 随机字符串，长度为32个字符以下
         */
        nonceStr: string;
        /**
         * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
         */
        package: string;
        /**
         * 签名算法
         */
        signType: "MD5";
        /**
         * 签名
         */
        paySign: string;
      };
    }
  | string;


type pay_order_state_change_param = {
    request: InsidePayOrderStateChangeRequest;

}
interface InsidePayOrderStateChangeRequest {
  /**
   * 保单id
   */
  policyId: string;
  state: 1 | 2 | 3;
  [k: string]: any;
}

type InsidePayOrderStateChangeResponse = null;


type payment_info_get_param = {
    request: InsidePaymentInfoGetRequest;

}
interface InsidePaymentInfoGetRequest {
  /**
   * policyId or paymentId
   */
  id?: string;
  type?: "paymentId" | "policyId";
  [k: string]: any;
}

type InsidePaymentInfoGetResponse = {
  /**
   * 支付单ID
   */
  id: string;
  /**
   * 钱
   */
  fee: number;
  /**
   * 保单id
   */
  policyId: string;
  /**
   * {"PAY":1,"REFUND":2,"SIGN":3}
   */
  opsType: 1 | 2 | 3;
  /**
   * {"WECHAT_PAY":1,"OFFLINE":2,"BANK_CARD":3,"ALI_PAY":4,"THIRD_PARTY_WECHAT_PAY":5,"THIRD_PARTY_WECHAT_PAY_H5":6,"THIRD_PARTY_ALI_PAY":7,"THIRD_PARTY_WAP_ALI_PAY":8}
   */
  method: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /**
   * {"NOT_OPERATING":1,"PENDING":2,"CONFIRM":3}
   */
  state: 1 | 2 | 3;
  /**
   * {"POLICY":1,"ENDORSEMENT":2}
   */
  shipmentType: 1 | 2;
  /**
   * 最近一次修改时间
   */
  modifiedAt: number;
  /**
   * 创建时间
   */
  createdAt: number;
} | null;


type payment_info_sync_param = {
    request: InsidePaymentInfoSyncRequest;

}
interface InsidePaymentInfoSyncRequest {
  /**
   * 自有的支付单ID
   */
  paymentId: string;
  /**
   * 第三方支付ID
   */
  paymentNo: string;
  [k: string]: any;
}

type InsidePaymentInfoSyncResponse = null;


type refund_order_create_param = {
    request: InsideRefundOrderCreateRequest;

}
/**
 * 创建支付/退款订单的请求参数, 由调用者决定 required 哪些属性
 */
interface InsideRefundOrderCreateRequest {
  /**
   * 保单id
   */
  policyId?: string;
  /**
   * 钱
   */
  fee?: number;
  /**
   * 发货类型: {"POLICY":1,"ENDORSEMENT":2}
   */
  shipmentType?: 1 | 2;
  /**
   * 支付类型： {"WECHAT_PAY":1,"OFFLINE":2,"BANK_CARD":3,"ALI_PAY":4,"THIRD_PARTY_WECHAT_PAY":5,"THIRD_PARTY_WECHAT_PAY_H5":6,"THIRD_PARTY_ALI_PAY":7,"THIRD_PARTY_WAP_ALI_PAY":8}
   */
  method?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /**
   * 操作类型: {"PAY":1,"REFUND":2,"SIGN":3}
   */
  opsType?: 1 | 2 | 3;
  /**
   * openId
   */
  openId?: string;
  [k: string]: any;
}

type InsideRefundOrderCreateResponse = null | {
  /**
   * 自有的支付单ID
   */
  paymentId: string;
  paymentParam: {
    /**
     * appId
     */
    appId: string;
    /**
     * 时间戳从1970年1月1日00:00:00至今的秒数
     */
    timeStamp: number;
    /**
     * 随机字符串，长度为32个字符以下
     */
    nonceStr: string;
    /**
     * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
     */
    package: string;
    /**
     * 签名算法
     */
    signType: "MD5";
    /**
     * 签名
     */
    paySign: string;
  };
};


type refund_order_get_param = {
    request: InsideRefundOrderGetRequest;

}
interface InsideRefundOrderGetRequest {
  /**
   * 保单id
   */
  policyId: string;
  [k: string]: any;
}

type InsideRefundOrderGetResponse = null | {
  /**
   * 支付单ID
   */
  id: string;
  /**
   * 钱
   */
  fee: number;
  /**
   * 保单id
   */
  policyId: string;
  /**
   * {"PAY":1,"REFUND":2,"SIGN":3}
   */
  opsType: 1 | 2 | 3;
  /**
   * {"WECHAT_PAY":1,"OFFLINE":2,"BANK_CARD":3,"ALI_PAY":4,"THIRD_PARTY_WECHAT_PAY":5,"THIRD_PARTY_WECHAT_PAY_H5":6,"THIRD_PARTY_ALI_PAY":7,"THIRD_PARTY_WAP_ALI_PAY":8}
   */
  method: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /**
   * {"NOT_OPERATING":1,"PENDING":2,"CONFIRM":3}
   */
  state: 1 | 2 | 3;
  /**
   * {"POLICY":1,"ENDORSEMENT":2}
   */
  shipmentType: 1 | 2;
  /**
   * 最近一次修改时间
   */
  modifiedAt: number;
  /**
   * 创建时间
   */
  createdAt: number;
};


type refund_order_state_change_param = {
    request: InsideRefundOrderStateChangeRequest;

}
interface InsideRefundOrderStateChangeRequest {
  /**
   * 保单id
   */
  policyId: string;
  state: 1 | 2 | 3;
  [k: string]: any;
}

type InsideRefundOrderStateChangeResponse = null;


type reservation_policy_add_param = {
    request: InsideReservationPolicyAddRequest;

}
interface InsideReservationPolicyAddRequest {
  /**
   * 入口id
   */
  entranceId: string;
  policy: {
    /**
     * 保单类型
     */
    type?: 3;
    /**
     * 险种id
     */
    insuranceId?: string;
    /**
     * 操作者账户id
     */
    accountId?: string;
    frontendProcessId?: "reservationInsurance";
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
      mobile: string;
      /**
       * 性别:{"MALE":0,"FEMALE":1}
       */
      gender: 0 | 1;
      birth: string;
      extraData: {
        /**
         * 身高，单位厘米
         */
        height?: number;
        /**
         * 体重，单位公斤
         */
        weight?: number;
        /**
         * 年收入,单位:万元
         */
        annualIncome?: number;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 职业
         */
        job?: string;
        /**
         * 是否有社保
         */
        haveSocialInsurance?: boolean;
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
         * 街道信息
         */
        street: string;
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
      mobile: string | string;
      /**
       * 性别:{"MALE":0,"FEMALE":1}
       */
      gender: 0 | 1;
      birth: string;
      extraData: {
        /**
         * 身高，单位厘米
         */
        height?: number;
        /**
         * 体重，单位公斤
         */
        weight?: number;
        /**
         * 年收入,单位:万元
         */
        annualIncome?: number;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 职业
         */
        job?: string;
        /**
         * 是否有社保
         */
        haveSocialInsurance?: boolean;
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
         * 街道信息
         */
        street: string;
        /**
         * 标的物
         */
        target?: string;
        /**
         * 与投保人关系
         */
        relationWithApplicant: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
      };
      [k: string]: any;
    }[];
    /**
     * 保单子状态
     */
    subStatus?: 6 | 7 | 8;
    /**
     * 保费
     */
    premium?: number;
    /**
     * 承保时间
     */
    insuredAt?: number;
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
    quotePlan?: {
      plan: {
        main: {
          /**
           * 主险保额
           */
          amount: number;
          /**
           * 主险保费
           */
          premium: number;
        };
      };
      /**
       * 首年总保费
       */
      premium: number;
    };
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
     * 保障期限
     */
    period?: number;
    /**
     * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
     */
    periodUnit?: "y" | "M" | "age" | "d";
    /**
     * 缴费期限
     */
    payPeriod?: number;
    /**
     * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
     */
    payPeriodUnit?: "y" | "M" | "age" | "once";
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
    [k: string]: any;
  };
}

/**
 * 保单id
 */
type InsideReservationPolicyAddResponse = string;


type warehouse_entrance_set_param = {
    request: InsideWarehouseEntranceSetRequest;

}
interface InsideWarehouseEntranceSetRequest {
  id?: string;
  mode?: string;
  insuranceId?: string;
  insuranceIds?: string[];
  orgAccountId?: string;
  frontendProcessId?: string;
  [k: string]: any;
}

type InsideWarehouseEntranceSetResponse = null;


