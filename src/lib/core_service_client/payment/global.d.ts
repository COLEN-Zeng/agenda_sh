// 本文件由toolchain/code_generator/service/fun自动生成,请勿手动修改

/**
 * policyId, fee, shipmentType, method, opsType 是必须要有其余参数则根据 method 来决定是否要求
 */
interface CorePaymentInfoCreateRequest {
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

type CorePaymentInfoCreateResponse =
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

interface CorePaymentInfoGetByPolicyIdRequest {
  /**
   * 保单id
   */
  policyId: string;
  /**
   * 支付类型: {"WECHAT_PAY":1,"OFFLINE":2,"BANK_CARD":3,"ALI_PAY":4,"THIRD_PARTY_WECHAT_PAY":5,"THIRD_PARTY_WECHAT_PAY_H5":6,"THIRD_PARTY_ALI_PAY":7,"THIRD_PARTY_WAP_ALI_PAY":8}
   */
  method: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  [k: string]: any;
}

type CorePaymentInfoGetByPolicyIdResponse = {
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
}[];

/**
 * 自有的支付单ID
 */
type CorePaymentInfoGetRequest = string;

interface CorePaymentInfoGetResponse {
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
}

interface CorePaymentInfoStateChangeRequest {
  /**
   * 自有的支付单ID
   */
  paymentId?: string;
  /**
   * 保单id
   */
  policyId?: string;
  /**
   * 第三方支付ID
   */
  paymentNo?: string;
  state: 1 | 2 | 3;
  [k: string]: any;
}

type CorePaymentInfoStateChangeResponse = null;

interface CorePaymentPaymentCallbackRequest {
  /**
   * 自有的支付单ID
   */
  paymentId: string;
  /**
   * 钱
   */
  fee: number;
  /**
   * 第三方支付订单号, 目前仅有微信支付订单号
   */
  paymentNo: string;
  [k: string]: any;
}

type CorePaymentPaymentCallbackResponse = null;

/**
 * 保单id
 */
type CorePaymentWithholdingInfoGetRequest = string;

type CorePaymentWithholdingInfoGetResponse = null | {
  /**
   * 保单id
   */
  id: string;
  /**
   * 银行卡信息
   */
  data: {
    /**
     * 持卡人名字
     */
    holderName?: string;
    /**
     * 开户行id
     */
    bankId?: number;
    /**
     * 银行账户
     */
    bankCardNo?: string;
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
  [k: string]: any;
};

interface CorePaymentWithholdingInfoSetRequest {
  /**
   * 保单id
   */
  id?: string;
  /**
   * 银行卡信息
   */
  data?: {
    /**
     * 持卡人名字
     */
    holderName?: string;
    /**
     * 开户行id
     */
    bankId?:
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
    bankCardNo?: string;
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
  [k: string]: any;
}

type CorePaymentWithholdingInfoSetResponse = null;

interface CorePaymentWithholdingSubmitRequest {
  /**
   * 保单id
   */
  policyId: string;
  data: {
    [k: string]: any;
  };
}

type CorePaymentWithholdingSubmitResponse = null;

