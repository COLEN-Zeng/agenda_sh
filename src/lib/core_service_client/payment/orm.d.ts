// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

interface PaymentInfo {
  /**
   * paymentId
   */
  id: string;
  /**
   * 此次所需要提交的费用
   */
  fee: number;
  /**
   * 状态 - 参考Common.Constant.Payment.State
   */
  state: number;
  policyId: string;
  /**
   * 最近一次修改时间(初始值为 createdAt)
   */
  modifiedAt: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 参考 Common.Constant.Payment.Method
   */
  method: number;
  /**
   * 发货类型 - 保单 or 批单
   */
  shipmentType: number;
  /**
   * 操作类型 - 付款 or 退款
   */
  opsType: number;
}

interface PaymentWithholding {
  /**
   * policyId
   */
  id: string;
  /**
   * 额外信息
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
}

