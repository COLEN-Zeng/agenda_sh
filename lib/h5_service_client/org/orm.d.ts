// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5OrgAppointment {
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
     * 团险预约产品
     */
    enterprisePolicyKeeper?: {
      [k: string]: any;
    };
    /**
     * 预约类险种
     */
    reservation?: {
      [k: string]: any;
    };
    /**
     * 银小保团险产品预约
     */
    groupReservation?: {
      [k: string]: any;
    };
    /**
     * 海报类产品
     */
    posterProduct?: {
      [k: string]: any;
    };
    systemExperience?: {
      /**
       * 官网预约填写的邮箱
       */
      email: string;
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

interface H5OrgInfo {
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
  createdAt?: number;
  [k: string]: any;
}

interface H5OrgInsurancePoster {
  /**
   * 海报id,由后端生成的32位uuid
   */
  id?: string;
  /**
   * 海报标题,同入口标题
   */
  name?: string;
  urlList?: string[];
  [k: string]: any;
}

interface H5OrgMobileFrontendConfig {
  id: string;
  /**
   * 机构核心ID
   */
  coreAccountId: string;
  banner?: {
    [k: string]: any;
  }[];
  /**
   * 首页爆款热卖模块入口列表
   */
  hotSalesProduct?: {
    list: {
      /**
       * 入口id
       */
      id?: string;
      /**
       * 险种名
       */
      name?: string;
      /**
       * 产品图
       */
      imageUrl?: string;
      /**
       * 按钮文字
       */
      buttonText?: string;
      /**
       * 产品描述
       */
      description?: string[];
      /**
       * 自定义推广费栏内容
       */
      customPromotion?: string;
      /**
       * 跳转链接
       */
      linkUrl?: string;
      poster?: {
        id: string;
        name: string;
        /**
         * 海保数组
         */
        urlList: string[];
      };
      frontendProcessId?: string;
      /**
       * 自定义险种才有
       */
      insuranceType?: string[];
      /**
       * 自定义险种才有
       */
      productRecommendedImageUrl?: string;
      /**
       * 自定义险种才有，单位元
       */
      price?: number;
      /**
       * 自定义险种才有
       */
      shortCompanyName?: string[];
      /**
       * 自定义险种才有
       */
      companyId?: string[];
      /**
       * 自定义险种才有
       */
      people?: string[];
      /**
       * 自定义险种才有，单位元
       */
      promotion?: number;
      /**
       * 人群
       */
      group?: string[];
      /**
       * 产品特色
       */
      characteristic?: string[];
    }[];
    name: string;
    selected: boolean;
    [k: string]: any;
  }[];
  /**
   * 找保险模块入口列表
   */
  findInsEntranceList?: {
    /**
     * 入口id
     */
    id?: string;
    /**
     * 险种名
     */
    name?: string;
    /**
     * 产品图
     */
    imageUrl?: string;
    /**
     * 按钮文字
     */
    buttonText?: string;
    /**
     * 产品描述
     */
    description?: string[];
    /**
     * 自定义推广费栏内容
     */
    customPromotion?: string;
    /**
     * 跳转链接
     */
    linkUrl?: string;
    poster?: {
      id: string;
      name: string;
      /**
       * 海保数组
       */
      urlList: string[];
    };
    frontendProcessId?: string;
    /**
     * 自定义险种才有
     */
    insuranceType?: string[];
    /**
     * 自定义险种才有
     */
    productRecommendedImageUrl?: string;
    /**
     * 自定义险种才有，单位元
     */
    price?: number;
    /**
     * 自定义险种才有
     */
    shortCompanyName?: string[];
    /**
     * 自定义险种才有
     */
    companyId?: string[];
    /**
     * 自定义险种才有
     */
    people?: string[];
    /**
     * 自定义险种才有，单位元
     */
    promotion?: number;
    /**
     * 人群
     */
    group?: string[];
    /**
     * 产品特色
     */
    characteristic?: string[];
  }[];
  productRecommendedTemplate?: "寿险风格模板" | "财险&车险风格模板" | "自定义";
  /**
   * 首页产品推荐模块入口列表
   */
  productRecommendedList?: {
    /**
     * 入口id
     */
    id?: string;
    /**
     * 险种名
     */
    name?: string;
    /**
     * 产品图
     */
    imageUrl?: string;
    /**
     * 按钮文字
     */
    buttonText?: string;
    /**
     * 产品描述
     */
    description?: string[];
    /**
     * 自定义推广费栏内容
     */
    customPromotion?: string;
    /**
     * 跳转链接
     */
    linkUrl?: string;
    poster?: {
      id: string;
      name: string;
      /**
       * 海保数组
       */
      urlList: string[];
    };
    frontendProcessId?: string;
    /**
     * 自定义险种才有
     */
    insuranceType?: string[];
    /**
     * 自定义险种才有
     */
    productRecommendedImageUrl?: string;
    /**
     * 自定义险种才有，单位元
     */
    price?: number;
    /**
     * 自定义险种才有
     */
    shortCompanyName?: string[];
    /**
     * 自定义险种才有
     */
    companyId?: string[];
    /**
     * 自定义险种才有
     */
    people?: string[];
    /**
     * 自定义险种才有，单位元
     */
    promotion?: number;
    /**
     * 人群
     */
    group?: string[];
    /**
     * 产品特色
     */
    characteristic?: string[];
  }[];
  /**
   * 邀请奖励
   */
  orgToAgentSuperiorAtFirstYear?: number;
  /**
   * 电子合同模板url
   */
  electronicContractTemplate?: string;
  /**
   * 扣税选项
   */
  taxOpt?: {
    /**
     * 经纪人/代理人的扣税方式
     */
    inside?: number;
    /**
     * 推广员的扣税方式
     */
    outside?: number;
    /**
     * 实名认证的扣税方式
     */
    realName?: number;
    /**
     * 产品区别模式
     */
    product?: number;
    [k: string]: any;
  };
  /**
   * 展业工具
   */
  assistTool?: {
    /**
     * 是否展示展业工具栏
     */
    showAll?: boolean;
    /**
     * 主展业工具区
     */
    main?: string[][];
    /**
     * 副展业工具区
     */
    deputy?: string[][];
    /**
     * 工具配置
     */
    config?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: {
        name?: string;
        icon?: {
          /**
           * 主图标
           */
          main?: string;
          /**
           * 副图标
           */
          deputy?: string;
          [k: string]: any;
        };
      };
    };
  };
  /**
   * 登录注册配置
   */
  login?: {
    /**
     * 是否注册必填邀请人
     */
    isRegisterRequiredInviter?: boolean;
    /**
     * 是否页面登录可见
     */
    isMustLogin?: boolean;
    /**
     * 是否展示注册页面
     */
    isShowRegisterPage?: boolean;
  };
  activityBanner?: {
    [k: string]: any;
  }[];
  base?: {
    /**
     * 公司logo
     */
    logoUrl?: string;
    /**
     * 公司名
     */
    name?: string;
    share?: {
      /**
       * 分享标题
       */
      title?: string;
      /**
       * 分享内容
       */
      description?: string;
      [k: string]: any;
    };
    /**
     * 资质介绍文案
     */
    qualificationIntro?: string;
    service?: {
      /**
       * 客服热线
       */
      tel?: string;
      /**
       * 客服二维码
       */
      qrCodeUrl?: string;
      /**
       * 客服微信
       */
      wechat?: string;
      [k: string]: any;
    };
    /**
     * 公司相关牌照证件
     */
    companyDocumentUrls?: string[];
    /**
     * 授权合作图片
     */
    CooperationCompanyUrls?: string[];
    FAQ?: {
      topImUrl?: string;
      questions?: {
        Q: string;
        A: string;
      }[];
      [k: string]: any;
    };
    navigationBar?: {
      title?: string;
      icon?: string;
      selectedIcon?: string;
      link?: string;
      [k: string]: any;
    }[];
    showPromotion?: boolean;
    showIncome?: boolean;
    [k: string]: any;
  };
  invitation?: {
    /**
     * 邀请注册成功引导图
     */
    guideImgAfterSignup?: string;
    /**
     * 注册成功引导图
     */
    commonImgAfterSignup?: string;
    [k: string]: any;
  };
  inviteMember?: {
    /**
     * 增员模块背景图片
     */
    backgroundUrl?: string;
    /**
     * 邀请规则列表
     */
    ruleList?: {
      title?: string;
      content?: string;
      [k: string]: any;
    }[];
    /**
     * 海报
     */
    poster?: string;
    [k: string]: any;
  };
  certification?: {
    certifyType?: (0 | 1 | 2)[];
    topImUrl?: string;
    FAQ?: {
      Q?: string;
      A?: string;
      [k: string]: any;
    }[];
    /**
     * 优势图
     */
    advantageImgUrls?: string[];
    /**
     * 阅读文件
     */
    docs?: string[];
    [k: string]: any;
  };
  [k: string]: any;
}

interface H5OrgWechatConfig {
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
  /**
   * 公众号微信号
   */
  userName?: string;
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
    DAILY_VISIT_MSG?: string;
    JOB_REMINDER?: string;
    QUOTATION_QUOTE?: string;
    NEGOTIATION_APPLY?: string;
    FINANCE_DEAL?: string;
    PROPOSAL_REJECT?: string;
    [k: string]: any;
  };
  [k: string]: any;
}

