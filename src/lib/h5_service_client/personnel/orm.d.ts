// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

interface PersonnelCommissionPromotionRate {
  id: string;
  rate: number;
}

interface PersonnelCustomerVisitRecord {
  id?: string;
  userId?: string;
  /**
   * 核心ID
   */
  orgAccountId?: string;
  customerId?: string;
  type?: {
    value?: string;
    entranceId?: string;
    frontendProcessId?: string;
    reportId?: string;
    articleId?: string;
    posterId?: string;
    insurancePlanId?: string;
    [k: string]: any;
  };
  createdAt?: number;
  /**
   * 是否是匿名客户
   */
  anonymousCustomer?: number;
  /**
   * 是否已添加到我的客户
   */
  addedToMyCustomer?: 0 | 1;
  description?: string;
  shareId?: string;
  stayTime?: number;
  readingProgress?: number;
  [k: string]: any;
}

interface PersonnelEmployee {
  id: string;
  employeeId: string;
}

interface PersonnelIncomeRecord {
  /**
   * 记录ID
   */
  id: string;
  /**
   * personnelId
   */
  userId: string;
  /**
   * 代理人核心ID
   */
  coreAccountId: string;
  /**
   * 收入类型 - 推广费 or 邀请奖励
   */
  type: number;
  /**
   * 该收入记录的状态: 参考 Common.Constant.IncomeRecord.Status
   */
  status: number;
  /**
   * 保费
   */
  premium: number;
  /**
   * 推广费
   */
  promotionMoney: number;
  /**
   * 机构的推广费
   */
  orgPromotionMoney?: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 是否可用,意健险/寿险单会预先写入第2,3年的佣金记录,但先设为不可用,续期确认再打开
   */
  enabled: boolean;
  /**
   * 由 specificType 决定该 specificId 是保单ID还是批单ID
   */
  specificId: string;
  /**
   * policy or endorsement
   */
  specificType: string;
  description: string;
  /**
   * 保单来自的平台,默认银小保系统
   */
  from: number;
  /**
   * 对账时间: 默认到下个月的25日
   */
  auditedAt?: number;
  /**
   * 收入类别 - 佣金类 or 推广费类, 参考 Common.Constant.IncomeRecord.Kind
   */
  kind: number;
  [k: string]: any;
}

interface PersonnelInfo {
  /**
   * id
   */
  id: string;
  /**
   * 核心ID
   */
  coreAccountId: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 账户状态
   */
  status: number;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 姓名拼音
   */
  namePinYin: string;
  /**
   * 身份证号
   */
  idNumber?: string;
  /**
   * 性别
   */
  gender?: number;
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
    contractFile?: string[];
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
  inviter?: {
    /**
     * 邀请人userId
     */
    userId: string;
    /**
     * 邀请人AccountId
     */
    coreAccountId: string;
  };
  superiorOrg: {
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
   * 人员类型:销售salesman,内勤office_staff
   */
  type: string;
  /**
   * 工号
   */
  employeeId?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 证件类型
   */
  idType?: number;
  /**
   * 学历
   */
  education?: string;
  createdAt?: number;
  [k: string]: any;
}

interface PersonnelJobRank {
  id: string;
  jobRank: string;
  previous?: {
    JobRank?: string;
    [k: string]: any;
  };
  /**
   * 当前职级起始时间
   */
  presentJobRankStartAt?: number;
  /**
   * 入司时间
   */
  joinAt?: number;
  /**
   * 总监团队
   */
  directorTeam?: {
    /**
     * 代码
     */
    directorTeamNo?: string;
    /**
     * 名称
     */
    directorTeamName?: string;
    [k: string]: any;
  };
  /**
   * 合伙人团队
   */
  partnerTeam?: {
    /**
     * 代码
     */
    partnerTeamNo?: string;
    /**
     * 名称
     */
    partnerTeamName?: string;
    [k: string]: any;
  };
  /**
   * 是否离职
   */
  resign: boolean;
  /**
   * 离司时间
   */
  resignAt?: number;
  coreAccountId: string;
  [k: string]: any;
}

interface PersonnelNote {
  id?: string;
  note?: string;
  createdAt?: number;
  updatedAt?: number;
  [k: string]: any;
}

interface PersonnelProposal {
  /**
   * key
   */
  id?: string;
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
  insuranceId?: string;
  companyId?: string;
  /**
   * 是否需要管理后台人工处理,像上传了被保人图片需要后勤去录入则为true,处理完改成false
   */
  needHumanProcess?: 0 | 1;
  createdAt?: number;
  [k: string]: any;
}

interface PersonnelShare {
  /**
   * uuid
   */
  id: string;
  /**
   * 用户userId
   */
  userId: string;
  /**
   * 索引用于筛选
   */
  type: string;
  entranceId?: string;
  frontendProcessId?: string;
  insuranceId?: string;
  articleId?: string;
  posterId?: string;
  customerList: {
    /**
     * 客户id，openid
     */
    id?: string;
    stayTime?: number;
    readingProgress?: number;
    modifiedAt?: number;
    totalVisitTimes?: number;
    [k: string]: any;
  }[];
  /**
   * 用于【我的分享】排序
   */
  customerNumber: number;
  /**
   * 用于【我的分享】排序
   */
  modifiedAt: number;
  [k: string]: any;
}

interface PersonnelShopConfig {
  id?: string;
  [k: string]: any;
}

interface PersonnelStatistic {
  /**
   * ${YYYYMM}_${personnelId}
   */
  id: string;
  /**
   * userId
   */
  personnelId: string;
  /**
   * 本月新增成员数
   */
  newMember: number;
  /**
   * 本月单量-业绩
   */
  achievement: number;
  /**
   * 本月邀请奖励
   */
  invitePromotionMoney: number;
  /**
   * 新增成员userId
   */
  newMemberIdList: string[];
  /**
   * 本月保费
   */
  premium: number;
  /**
   * 更新时间
   */
  modifiedAt: number;
}

/**
 * 临时投保单信息，提供给前端暂存功能，可能信息不全
 */
interface PersonnelTmpProposal {
  /**
   * key
   */
  id?: string;
  [k: string]: any;
}

interface PersonnelVisitingCard {
  /**
   * id
   */
  id: string;
  /**
   * 微信二维码图片地址
   */
  wechatQRCode?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 自我介绍
   */
  selfIntro?: string;
  /**
   * 所在公司
   */
  company?: string;
  /**
   * 职位
   */
  jobPosition?: string;
  /**
   * 工作年限
   */
  workYear?: number;
  /**
   * 个人荣誉
   */
  honorList?: string[];
  /**
   * 个人风采
   */
  stylePhotoList?: string[];
  /**
   * 产品与服务
   */
  entranceIdList?: string[];
  /**
   * 名片背景图
   */
  backgroundImg?: string;
  /**
   * 是否展示个人商场
   */
  isShowShop: boolean;
  [k: string]: any;
}

interface PersonnelWechat {
  id: string;
  /**
   * 机构id
   */
  orgAccountId: string;
  /**
   * openId
   */
  openId: string;
  /**
   * unionId
   */
  unionId?: string;
  [k: string]: any;
}

interface PersonnelWechatInfo {
  /**
   * openId
   */
  id?: string;
  nickName?: string;
  gender?: number;
  province?: string;
  city?: string;
  country?: string;
  avatarUrl?: string;
  modifiedAt?: number;
  [k: string]: any;
}

interface PersonnelWithdrawalRecord {
  /**
   * 提现记录ID
   */
  id: string;
  userId: string;
  coreAccountId: string;
  /**
   * 提现类型
   */
  type: number;
  /**
   * 税
   */
  tax: number;
  amount: {
    /**
     * 佣金
     */
    commission?: number;
    /**
     * 推广费
     */
    promotion?: number;
    [k: string]: any;
  };
  /**
   * 提现申请状态
   */
  status: number;
  /**
   * 申请时间
   */
  createdAt: number;
  /**
   * 银邦点击付款成功时间
   */
  paymentAt?: number;
}

interface PersonnelCustomerInfo {
  /**
   * 业务员用户id
   */
  subject: string;
  /**
   * 客户id
   */
  object: string;
  /**
   * 是否已添加到我的客户
   */
  addedToMyCustomer?: 0 | 1;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  nickName?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 标签列表
   */
  tagList?: string[];
  /**
   * 是否通知用户来访
   */
  noticeOfVisit?: boolean;
  /**
   * 累计访问次数
   */
  totalVisitTimes?: number;
  createdAt: number;
  modifiedAt?: number;
  lastVisitAt?: number;
  lastVisitRecordId?: string;
  [k: string]: any;
}

interface PersonnelCustomerPolicy {
  /**
   * 客户id
   */
  subject: string;
  /**
   * 保单id
   */
  object: string;
  createdAt: number;
  [k: string]: any;
}

interface PersonnelUserProposal {
  subject: string;
  object: string;
  createdAt: number;
}

interface PersonnelUserQuotation {
  subject: string;
  object: string;
  createdAt: number;
}

interface PersonnelUserWithdrawalRecord {
  subject: string;
  object: string;
  promotion?: string;
  commission?: string;
  [k: string]: any;
}

