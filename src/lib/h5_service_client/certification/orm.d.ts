// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5CertificationApplication {
  /**
   * 用户id
   */
  id?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 代理人身份
   */
  agentType?: 0 | 1 | 2;
  /**
   * 姓名
   */
  userName: string;
  /**
   * 地址
   */
  address?: string;
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
   * 身份证号码
   */
  idNumber: string;
  resource?: {
    /**
     * 身份证正面
     */
    idCardFront?: string;
    /**
     * 身份证背面
     */
    idCardBack?: string;
    /**
     * 银行卡正面
     */
    bankCardFront: string;
    /**
     * 个人半身免冠照
     */
    avatar: string;
    [k: string]: any;
  };
  bankCard?: {
    /**
     * 银行名称
     */
    bankName?: string;
    /**
     * 卡号
     */
    number?: string;
    area?: {
      /**
       * 银行卡所属省
       */
      province: string;
      /**
       * 银行卡所属市
       */
      city: string;
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
  /**
   * 学历
   */
  education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
  status?: 0 | 1 | 2 | 3;
  isInsuranceEmployee?: boolean;
  /**
   * 认证类型: 非从业人员, 从业人员, 实名认证
   */
  certifyType?: 0 | 1 | 2;
  /**
   * 提交申请时间戳
   */
  submittedAt?: number;
  /**
   * 审核时间戳
   */
  finalizedAt?: number;
  superiorOrg?: {
    /**
     * 上级机构userId
     */
    userId: string;
    /**
     * 上级机构AccountId
     */
    coreAccountId: string;
  };
  /**
   * 核心ID
   */
  coreAccountId?: string;
  /**
   * 审核不通过原因
   */
  failedReason?: string;
  [k: string]: any;
}

interface H5CertificationInfo {
  /**
   * 用户id
   */
  id: string;
  /**
   * 代理人身份
   */
  agentType: 0 | 1 | 2;
  /**
   * 姓名
   */
  userName: string;
  /**
   * 身份证号码
   */
  idNumber: string;
  /**
   * 执业证号
   */
  licenseNumber?: string;
  /**
   * 电子合同
   */
  electronicContract?: string;
  /**
   * 时间
   */
  createdAt: number;
  [k: string]: any;
}

interface H5CertificationRealNameAuthentication {
  /**
   * 用户id
   */
  id: string;
  /**
   * 0: 待实名, 1:　成功实名, 2: 实名失败, 3:　实名认证中
   */
  status: 0 | 1 | 2 | 3;
  /**
   * 法大大用户唯一标示
   */
  faDaDaUserId?: string;
  /**
   * 失败原因
   */
  failedReason?: string;
  /**
   * 实名序列号
   */
  verifiedSerialNo?: string;
}

