// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5CertificationApplicationFinalizeRequest {
  /**
   * 审核认证申请id
   */
  id?: string;
  /**
   * 是否通过审核
   */
  pass?: boolean;
  /**
   * 执业证号
   */
  licenseNumber?: string;
  /**
   * {"OUTSIDE_AGENT":0,"INSIDE_AGENT":1,"REAL_NAME":2}
   */
  agentType?: 0 | 1 | 2;
  /**
   * 审核不通过原因
   */
  failedReason?: string;
  /**
   * 需要修改的职级
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
  heartOrg?: string;
  [k: string]: any;
}

type H5CertificationApplicationFinalizeResponse = null;

interface H5CertificationApplicationListRequest {
  /**
   * 机构的accountId或userId
   */
  id?: string;
  status?: 0 | 1 | 2 | 3;
  submittedAt?: {
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    from: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    to: number;
  };
  userName?: string;
  mobile?: string;
  mode?: 1 | 2;
  [k: string]: any;
}

type H5CertificationApplicationListResponse = {
  /**
   * 用户id
   */
  id?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 申请时的代理人身份：{"OUTSIDE_AGENT":0,"INSIDE_AGENT":1,"REAL_NAME":2}
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
    bankCardFront?: string;
    /**
     * 个人半身免冠照
     */
    avatar?: string;
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
  status: 0 | 1 | 2 | 3;
  /**
   * 认证类型: 非从业人员, 从业人员, 实名认证
   */
  certifyType?: 0 | 1 | 2;
  /**
   * 学历
   */
  education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
  /**
   * 时间
   */
  submittedAt: number;
  /**
   * 审核时间
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
}[];

interface H5CertificationApplyRequest {
  /**
   * uuid
   */
  personnelId: string;
  application: {
    /**
     * 申请人姓名
     */
    userName: string;
    /**
     * 证件类型
     */
    idType:
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
    idNumber: string;
    /**
     * 申请时的代理人身份：{"OUTSIDE_AGENT":0,"INSIDE_AGENT":1,"REAL_NAME":2}
     */
    agentType?: 0 | 1 | 2;
    /**
     * 手机号码
     */
    mobile?: string;
    /**
     * 地址
     */
    address?: string;
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
      bankCardFront: string;
      /**
       * 个人半身免冠照
       */
      avatar: string;
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
    /**
     * 认证类型: 非从业人员, 从业人员, 实名认证
     */
    certifyType: 0 | 1 | 2;
    /**
     * 意向机构ID
     */
    heartOrg?: string;
  };
  [k: string]: any;
}

type H5CertificationApplyResponse = null;

interface H5CertificationElectronicContractUpdateRequest {
  /**
   * 人员ID
   */
  id: string;
  /**
   * 申请人姓名
   */
  userName: string;
  /**
   * 证件号码
   */
  idNumber: string;
  /**
   * 手机号码
   */
  mobile: string;
  /**
   * 学历
   */
  education?: "本科" | "大专" | "高中及同等学历" | "初中及同等学历" | "硕士" | "博士" | "初中以下学历";
  /**
   * 通信地址
   */
  address?: string;
  /**
   * 工号
   */
  employeeId?: string;
  [k: string]: any;
}

type H5CertificationElectronicContractUpdateResponse = null;

interface H5CertificationIdIsDuplicateCheckRequest {
  /**
   * 身份证号码
   */
  idNumber: string;
  idType?: (
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
  )[];
  /**
   * 期望结果，若不符合期望结果则报错
   */
  expect?: boolean;
  /**
   * 报错信息
   */
  errorMassage?: string;
  [k: string]: any;
}

/**
 * 重复则返回true
 */
type H5CertificationIdIsDuplicateCheckResponse = boolean;

interface H5CertificationRealNameAuthenticateCallbackRequest {
  /**
   * 法大大用户唯一标示
   */
  faDaDaUserId: string;
  /**
   * 2：审核通过, 3：已提交待审核, 4：审核不通过
   */
  status: "2" | "3" | "4";
  /**
   * 失败原因
   */
  failedReason: string;
  /**
   * 实名序列号
   */
  verifiedSerialNo: string;
}

type H5CertificationRealNameAuthenticateCallbackResponse = null;

interface H5CertificationRealNameAuthenticateRequest {
  /**
   * 用户id
   */
  personnelId: string;
  /**
   * 前端调整url
   */
  returnUrl: string;
}

type H5CertificationRealNameAuthenticateResponse =
  | {
      needAuthenticate: true;
      /**
       * 实名认证地址
       */
      authUrl: string;
    }
  | {
      needAuthenticate: false;
    };

