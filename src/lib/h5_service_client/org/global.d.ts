// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5OrgAppointmentCreateRequest {
  /**
   * 机构ID
   */
  orgId: string;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
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
     * 团险预约产品
     */
    enterprisePolicyKeeper?: {
      [k: string]: any;
    };
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
    [k: string]: any;
  };
}

/**
 * 预约信息ID
 */
type H5OrgAppointmentCreateResponse = string;

/**
 * 预约数据ID
 */
type H5OrgAppointmentGetRequest = string;

interface H5OrgAppointmentGetResponse {
  /**
   * 预约ID
   */
  id: string;
  /**
   * 所属机构ID
   */
  orgId: string;
  /**
   * 预约类型: {"UNDERWRITING":1,"FAMILY_RISK_ASSESS":2,"ENTERPRISE_RISK_ASSESS":3,"RESERVATION_INSURANCE":4,"GROUP_PRODUCT":5,"YXB_GROUP_PRODUCT":6,"POSTER_PRODUCT":7,"SYSTEM_EXPERIENCE":8}
   */
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
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
     * 团险预约产品
     */
    enterprisePolicyKeeper?: {
      [k: string]: any;
    };
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
type H5OrgAppointmentListRequest = string;

type H5OrgAppointmentListResponse = {
  /**
   * 预约ID
   */
  id: string;
  /**
   * 所属机构ID
   */
  orgId: string;
  /**
   * 预约类型: {"UNDERWRITING":1,"FAMILY_RISK_ASSESS":2,"ENTERPRISE_RISK_ASSESS":3,"RESERVATION_INSURANCE":4,"GROUP_PRODUCT":5,"YXB_GROUP_PRODUCT":6,"POSTER_PRODUCT":7,"SYSTEM_EXPERIENCE":8}
   */
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
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
     * 团险预约产品
     */
    enterprisePolicyKeeper?: {
      [k: string]: any;
    };
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

interface H5OrgAppointmentUpdateRequest {
  /**
   * 预约ID
   */
  id: string;
  /**
   * 所属机构ID
   */
  orgId: string;
  /**
   * 预约类型: {"UNDERWRITING":1,"FAMILY_RISK_ASSESS":2,"ENTERPRISE_RISK_ASSESS":3,"RESERVATION_INSURANCE":4,"GROUP_PRODUCT":5,"YXB_GROUP_PRODUCT":6,"POSTER_PRODUCT":7,"SYSTEM_EXPERIENCE":8}
   */
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
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
     * 团险预约产品
     */
    enterprisePolicyKeeper?: {
      [k: string]: any;
    };
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

type H5OrgAppointmentUpdateResponse = null;

interface H5OrgConfigInitFromSuperiorOrgRequest {
  /**
   * 上级机构id
   */
  superiorOrgId: string;
  /**
   * 新机构id
   */
  newOrgId: string;
}

type H5OrgConfigInitFromSuperiorOrgResponse = null;

interface H5OrgEntranceListRequest {
  orgAccountId: string;
  /**
   * 险种分类
   */
  insuranceType?: "个险" | "团险" | "重疾险" | "医疗险" | "意外险" | "寿险" | "年金险" | "家财险";
  /**
   * 指定入口类型,productRecommended:产品推荐
   */
  type?: "productRecommended";
  /**
   * 是否过滤已停售，已下线的险种入口
   */
  onlyAvailable: boolean;
  /**
   * 是否附带继承来的入口,默认不带，首页那些入口
   */
  withExtendEntrances?: boolean;
  [k: string]: any;
}

type H5OrgEntranceListResponse = {
  /**
   * 移动端配置
   */
  mobile?: {
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
     * 自定义险种才有
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
  /**
   * 该产品是否已停售
   */
  insuranceReject?: boolean;
  /**
   * 该产品是否已下架
   */
  insuranceOffShelf?: boolean;
  /**
   * 用于产品列表排序
   */
  createAt?: number;
  /**
   * 用于产品列表排序
   */
  modifiedAt?: number;
  [k: string]: any;
}[];

type H5OrgFinalMobileFrontendConfigGetRequest = string | "";

interface H5OrgFinalMobileFrontendConfigGetResponse {
  id: string | "";
  /**
   * 机构核心ID,前端用来拼移动端平台的链接
   */
  coreAccountId: string;
  banner?: {
    [k: string]: any;
  }[];
  /**
   * 首页爆款热卖模块入口列表
   */
  hotSalesProduct?: {
    key?: string;
    list: {
      /**
       * 移动端配置
       */
      mobile?: {
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
         * 自定义险种才有
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
      /**
       * 该产品是否已停售
       */
      insuranceReject?: boolean;
      /**
       * 该产品是否已下架
       */
      insuranceOffShelf?: boolean;
      /**
       * 用于产品列表排序
       */
      createAt?: number;
      /**
       * 用于产品列表排序
       */
      modifiedAt?: number;
      [k: string]: any;
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
     * 移动端配置
     */
    mobile?: {
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
       * 自定义险种才有
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
    /**
     * 该产品是否已停售
     */
    insuranceReject?: boolean;
    /**
     * 该产品是否已下架
     */
    insuranceOffShelf?: boolean;
    /**
     * 用于产品列表排序
     */
    createAt?: number;
    /**
     * 用于产品列表排序
     */
    modifiedAt?: number;
    [k: string]: any;
  }[];
  /**
   * 首页产品推荐模块入口列表
   */
  productRecommendedList?: {
    /**
     * 移动端配置
     */
    mobile?: {
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
       * 自定义险种才有
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
    /**
     * 该产品是否已停售
     */
    insuranceReject?: boolean;
    /**
     * 该产品是否已下架
     */
    insuranceOffShelf?: boolean;
    /**
     * 用于产品列表排序
     */
    createAt?: number;
    /**
     * 用于产品列表排序
     */
    modifiedAt?: number;
    [k: string]: any;
  }[];
  productRecommendedTemplate?: "寿险风格模板" | "财险&车险风格模板" | "自定义";
  /**
   * 邀请奖励
   */
  orgToAgentSuperiorAtFirstYear?: number;
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
    directUrl?: string;
    imgUrl?: string;
    [k: string]: any;
  }[];
  /**
   * 电子合同模板url
   */
  electronicContractTemplate?: string;
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
}

type H5OrgRawMobileFrontendConfigGetRequest = string | "";

interface H5OrgRawMobileFrontendConfigGetResponse {
  id: string | "";
  /**
   * 机构核心ID,前端用来拼移动端平台的链接
   */
  coreAccountId: string;
  banner?: {
    [k: string]: any;
  }[];
  /**
   * 首页爆款热卖模块入口列表
   */
  hotSalesProduct?: {
    key?: string;
    list: {
      /**
       * 移动端配置
       */
      mobile?: {
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
         * 自定义险种才有
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
      /**
       * 该产品是否已停售
       */
      insuranceReject?: boolean;
      /**
       * 该产品是否已下架
       */
      insuranceOffShelf?: boolean;
      /**
       * 用于产品列表排序
       */
      createAt?: number;
      /**
       * 用于产品列表排序
       */
      modifiedAt?: number;
      [k: string]: any;
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
     * 移动端配置
     */
    mobile?: {
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
       * 自定义险种才有
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
    /**
     * 该产品是否已停售
     */
    insuranceReject?: boolean;
    /**
     * 该产品是否已下架
     */
    insuranceOffShelf?: boolean;
    /**
     * 用于产品列表排序
     */
    createAt?: number;
    /**
     * 用于产品列表排序
     */
    modifiedAt?: number;
    [k: string]: any;
  }[];
  /**
   * 首页产品推荐模块入口列表
   */
  productRecommendedList?: {
    /**
     * 移动端配置
     */
    mobile?: {
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
       * 自定义险种才有
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
    /**
     * 该产品是否已停售
     */
    insuranceReject?: boolean;
    /**
     * 该产品是否已下架
     */
    insuranceOffShelf?: boolean;
    /**
     * 用于产品列表排序
     */
    createAt?: number;
    /**
     * 用于产品列表排序
     */
    modifiedAt?: number;
    [k: string]: any;
  }[];
  productRecommendedTemplate?: "寿险风格模板" | "财险&车险风格模板" | "自定义";
  /**
   * 邀请奖励
   */
  orgToAgentSuperiorAtFirstYear?: number;
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
    directUrl?: string;
    imgUrl?: string;
    [k: string]: any;
  }[];
  /**
   * 电子合同模板url
   */
  electronicContractTemplate?: string;
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
}

interface H5OrgRawMobileFrontendConfigSetRequest {
  id: string | "";
  /**
   * 机构核心ID,前端用来拼移动端平台的链接
   */
  coreAccountId: string;
  banner?: {
    [k: string]: any;
  }[];
  /**
   * 首页爆款热卖模块入口列表
   */
  hotSalesProduct?: {
    key?: string;
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
       * 自定义险种才有
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
     * 自定义险种才有
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
   * 首页产品推荐模块入口列表(自定义风格模板)
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
     * 自定义险种才有
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
   * 邀请奖励
   */
  orgToAgentSuperiorAtFirstYear?: number;
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
    directUrl?: string;
    imgUrl?: string;
    [k: string]: any;
  }[];
  /**
   * 电子合同模板url
   */
  electronicContractTemplate?: string;
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
}

type H5OrgRawMobileFrontendConfigSetResponse = null;

interface H5OrgSubGetRequest {
  /**
   * 机构ID
   */
  id: string;
  mode: 1 | 2;
  [k: string]: any;
}

type H5OrgSubGetResponse = {
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
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt?: number;
}[];

interface H5OrgWechatConfigGetRequest {
  orgAccountId: string;
  [k: string]: any;
}

interface H5OrgWechatConfigGetResponse {
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

