// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

interface OrgAppointmentCreateRequest {
  /**
   * 机构ID
   */
  orgId: string;
  type: 1 | 2 | 3 | 4;
  /**
   * 客户姓名
   */
  name: string;
  /**
   * 手机号
   */
  mobile: string;
  extraData: {
    conclusionList?: string[];
    /**
     * 家庭风险评测-原始数据
     */
    familyRiskAssess?: {
      [k: string]: any;
    };
    enterpriseRiskAssess?: {
      [k: string]: any;
    }[];
    /**
     * 报告ID
     */
    reportId?: string;
    /**
     * 预约类险种
     */
    reservation?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
}

/**
 * 预约信息ID
 */
type OrgAppointmentCreateResponse = string;

/**
 * 预约数据ID
 */
type OrgAppointmentGetRequest = string;

interface OrgAppointmentGetResponse {
  /**
   * 预约ID
   */
  id: string;
  /**
   * 所属机构ID
   */
  orgId: string;
  /**
   * 预约类型: {"UNDERWRITING":1,"FAMILY_RISK_ASSESS":2,"ENTERPRISE_RISK_ASSESS":3,"RESERVATION_INSURANCE":4}
   */
  type: 1 | 2 | 3 | 4;
  /**
   * 预约状态:{"UNDISTRIBUTED":1,"DISTRIBUTING":2,"CONTACTED":3,"FAIL_IN_DISTRIBUTING":4,"GIVE_UP":5}
   */
  status: 1 | 2 | 3 | 4 | 5;
  /**
   * 客户姓名
   */
  name?: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 跟进者
   */
  follower: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 放弃原因
   */
  reason: string;
  /**
   * 预约申请时间
   */
  createdAt: number;
  extraData: {
    conclusionList?: string[];
    /**
     * 家庭风险评测-原始数据
     */
    familyRiskAssess?: {
      [k: string]: any;
    };
    enterpriseRiskAssess?: {
      [k: string]: any;
    }[];
    /**
     * 报告ID
     */
    reportId?: string;
    /**
     * 预约类险种
     */
    reservation?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  /**
   * 性别:{"MALE":0,"FEMALE":1}
   */
  gender?: 0 | 1;
  /**
   * 出生日期
   */
  birth?: string;
  [k: string]: any;
}

/**
 * 机构ID
 */
type OrgAppointmentListRequest = string;

type OrgAppointmentListResponse = {
  /**
   * 预约ID
   */
  id: string;
  /**
   * 所属机构ID
   */
  orgId: string;
  /**
   * 预约类型: {"UNDERWRITING":1,"FAMILY_RISK_ASSESS":2,"ENTERPRISE_RISK_ASSESS":3,"RESERVATION_INSURANCE":4}
   */
  type: 1 | 2 | 3 | 4;
  /**
   * 预约状态:{"UNDISTRIBUTED":1,"DISTRIBUTING":2,"CONTACTED":3,"FAIL_IN_DISTRIBUTING":4,"GIVE_UP":5}
   */
  status: 1 | 2 | 3 | 4 | 5;
  /**
   * 客户姓名
   */
  name?: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 跟进者
   */
  follower: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 放弃原因
   */
  reason: string;
  /**
   * 预约申请时间
   */
  createdAt: number;
  extraData: {
    conclusionList?: string[];
    /**
     * 家庭风险评测-原始数据
     */
    familyRiskAssess?: {
      [k: string]: any;
    };
    enterpriseRiskAssess?: {
      [k: string]: any;
    }[];
    /**
     * 报告ID
     */
    reportId?: string;
    /**
     * 预约类险种
     */
    reservation?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  /**
   * 性别:{"MALE":0,"FEMALE":1}
   */
  gender?: 0 | 1;
  /**
   * 出生日期
   */
  birth?: string;
  [k: string]: any;
}[];

interface OrgAppointmentUpdateRequest {
  /**
   * 预约ID
   */
  id: string;
  /**
   * 所属机构ID
   */
  orgId: string;
  /**
   * 预约类型: {"UNDERWRITING":1,"FAMILY_RISK_ASSESS":2,"ENTERPRISE_RISK_ASSESS":3,"RESERVATION_INSURANCE":4}
   */
  type: 1 | 2 | 3 | 4;
  /**
   * 预约状态:{"UNDISTRIBUTED":1,"DISTRIBUTING":2,"CONTACTED":3,"FAIL_IN_DISTRIBUTING":4,"GIVE_UP":5}
   */
  status: 1 | 2 | 3 | 4 | 5;
  /**
   * 客户姓名
   */
  name?: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 跟进者
   */
  follower: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 放弃原因
   */
  reason: string;
  /**
   * 预约申请时间
   */
  createdAt: number;
  extraData: {
    conclusionList?: string[];
    /**
     * 家庭风险评测-原始数据
     */
    familyRiskAssess?: {
      [k: string]: any;
    };
    enterpriseRiskAssess?: {
      [k: string]: any;
    }[];
    /**
     * 报告ID
     */
    reportId?: string;
    /**
     * 预约类险种
     */
    reservation?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  /**
   * 性别:{"MALE":0,"FEMALE":1}
   */
  gender?: 0 | 1;
  /**
   * 出生日期
   */
  birth?: string;
  [k: string]: any;
}

type OrgAppointmentUpdateResponse = null;

interface OrgAvailableEntranceListRequest {
  orgAccountId?: string;
  /**
   * 险种分类
   */
  insuranceType?: "个险" | "团险" | "重疾险" | "医疗险" | "意外险" | "寿险" | "年金险" | "家财险";
  /**
   * 指定入口类型,productRecommended:产品推荐
   */
  type?: "productRecommended";
  [k: string]: any;
}

type OrgAvailableEntranceListResponse = {
  /**
   * 移动端配置
   */
  mobile?: {
    /**
     * 产品入口id,未保存时为空
     */
    id?: string;
    /**
     * 流程id
     */
    frontendProcessId?: string;
    /**
     * 入口标题
     */
    name: string;
    /**
     * 描述
     */
    description: string[];
    /**
     * 产品图片url
     */
    imageUrl: string;
    /**
     * 按钮文案
     */
    buttonText: string;
    /**
     * 保险类型
     */
    insuranceType?: string[];
    /**
     * 人群
     */
    people?: string[];
    promotion?: number;
    /**
     * 自定义推广费描述
     */
    customPromotion?: string;
    /**
     * 公司的id
     */
    companyId?: string[];
    [k: string]: any;
  };
  /**
   * 核心配置
   */
  core?: {
    /**
     * 产品入口id,未保存时为空
     */
    id?: string;
    mode?: string;
    /**
     * 选择所有可用的险种竞价,仅团险入口有此字段
     */
    selectAll?: boolean;
    /**
     * 如果是单产品则有此字段
     */
    insuranceId?: string;
    /**
     * 如果是多产品则有此字段
     */
    insuranceIds?: string[];
    [k: string]: any;
  };
  [k: string]: any;
}[];

interface OrgRecommendProductUpdateRequest {
  /**
   * 机构accountId
   */
  id: string;
  [k: string]: any;
}

type OrgRecommendProductUpdateResponse = null;

interface OrgSubGetRequest {
  /**
   * 机构ID
   */
  id: string;
  mode: 1 | 2;
  [k: string]: any;
}

type OrgSubGetResponse = {
  /**
   * 机构ID
   */
  id: string;
  /**
   * 机构核心ID
   */
  coreAccountId: string;
  /**
   * {"ACTIVE":0,"FROZEN":1}
   */
  status: 0 | 1;
  /**
   * 机构名称
   */
  name: string;
  /**
   * 机构地区
   */
  area: {
    /**
     * 省
     */
    province?: string;
    /**
     * 市
     */
    city?: string;
    [k: string]: any;
  };
  /**
   * 联系人姓名
   */
  contacts: string;
  /**
   * 机构联系电话不做校验
   */
  mobile: string;
  superior?: {
    /**
     * 上级机构ID
     */
    userId: string;
    coreAccountId: string;
  };
  /**
   * 自编机构代码
   */
  selfCode?: string;
  /**
   * 保险代理公司
   */
  type?: 0 | 1 | 2 | 3;
  [k: string]: any;
}[];

interface OrgWechatConfigGetRequest {
  orgAccountId: string;
  [k: string]: any;
}

interface OrgWechatConfigGetResponse {
  appId?: string;
  configIndex?: number;
  orgAccountId?: string;
  msgTemplate?: {
    BARGAIN_COMPLETED?: string;
    PENDING_PAYMENT?: string;
    POLICY_INSURED?: string;
    POLICY_RENEWED_REMINDED?: string;
    PROPOSAL_UNDERWROTE?: string;
    CERTIFICATION_EXAMINE?: string;
    CUSTOMER_VISIT?: string;
    APPOINTMENT_DISTRIBUTING?: string;
    POLICY_SURRENDER?: string;
    POLICY_RENEW?: string;
    POLICY_RENEW_FAILED?: string;
    [k: string]: any;
  };
  [k: string]: any;
}

