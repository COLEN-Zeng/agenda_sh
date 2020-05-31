// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

interface OrgAppointment {
  id: string;
  /**
   * 所属机构ID
   */
  orgId: string;
  /**
   * 预约类型
   */
  type: number;
  /**
   * 预约状态
   */
  status: number;
  /**
   * 客户姓名
   */
  name: string;
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
   * 创建时间
   */
  createdAt: number;
  extraData: {
    /**
     * 报告ID
     */
    reportId?: string;
    /**
     * 预核保的结论数组
     */
    conclusionList?: string[];
    /**
     * 家庭风险测评原始数据
     */
    familyRiskAssess?: {
      [k: string]: any;
    };
    enterpriseRiskAssess?: {
      [k: string]: any;
    }[];
    /**
     * 预约类险种
     */
    reservation?: {
      [k: string]: any;
    };
  };
  /**
   * 性别
   */
  gender?: number;
  /**
   * 出生日期
   */
  birth?: string;
}

interface OrgInfo {
  id: string;
  /**
   * 机构核心ID
   */
  coreAccountId: string;
  /**
   * 机构状态
   */
  status: number;
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
   * 联系人
   */
  contacts: string;
  /**
   * 联系电话
   */
  mobile: string;
  superior?: {
    /**
     * 上级机构ID，若是第一级，则为空
     */
    userId: string;
    /**
     * 上级机构核心ID，若是第一级，则为空
     */
    coreAccountId: string;
  };
  /**
   * 自编机构代码
   */
  selfCode?: string;
  /**
   * 机构类型
   */
  type?: number;
  [k: string]: any;
}

interface OrgMobileFrontendConfig {
  id?: string;
  banner?: {
    [k: string]: any;
  }[];
  /**
   * 首页爆款热卖模块入口列表
   */
  hotSalesProduct?: {
    [k: string]: any;
  }[];
  /**
   * 找保险模块入口列表
   */
  findInsEntranceList?: {
    [k: string]: any;
  }[];
  /**
   * 首页产品推荐模块入口列表
   */
  productRecommendedList?: {
    [k: string]: any;
  }[];
  activityBanner?: {
    [k: string]: any;
  }[];
  /**
   * 电子合同模板url
   */
  electronicContractTemplate?: string;
  [k: string]: any;
}

interface OrgRecommendProduct {
  id: string;
  /**
   * 是否继承上级机构配置
   */
  inheritSuperior: boolean;
  FamilyRiskEvaluation?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      end?: number;
      start?: number;
      products?: {
        mobile?: {
          [k: string]: any;
        };
        core?: {
          id?: string;
          frontendProcessId?: string;
          mode?: string;
          insuranceId?: string;
          selectAll?: boolean;
          insuranceIds?: string[];
          [k: string]: any;
        };
        [k: string]: any;
      }[];
      [k: string]: any;
    }[];
  };
  CompanyRiskEvaluation?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      mobile?: {
        [k: string]: any;
      };
      core?: {
        id?: string;
        frontendProcessId?: string;
        mode?: string;
        insuranceId?: string;
        selectAll?: boolean;
        insuranceIds?: string[];
        [k: string]: any;
      };
      [k: string]: any;
    }[];
  };
  [k: string]: any;
}

interface OrgWechatConfig {
  /**
   * orgId
   */
  id?: string;
  /**
   * accountId
   */
  orgAccountId?: string;
  /**
   * 微信公众号appId
   */
  appId?: string;
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

