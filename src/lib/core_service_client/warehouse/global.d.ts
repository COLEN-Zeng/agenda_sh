// 本文件由toolchain/code_generator/service/fun自动生成,请勿手动修改

type CoreWarehouseCacheClearRequest = null;

type CoreWarehouseCacheClearResponse = null;

/**
 * 操作者账户id
 */
type CoreWarehouseCustomEntranceListRequest = string;

type CoreWarehouseCustomEntranceListResponse = {
  id?: string;
  mode?: string;
  /**
   * 选择所有可用的险种竞价,仅团险入口有此字段
   */
  selectAll?: boolean;
  insuranceId?: string;
  insuranceIds?: string[];
  orgAccountId?: string;
  /**
   * 前端流程id
   */
  frontendProcessId?: string;
  [k: string]: any;
}[];

interface CoreWarehouseCustomInsuranceAddRequest {
  /**
   * 操作者账户id
   */
  orgAccountId: string;
  /**
   * 险种类型
   */
  type: string;
  companyId:
    | "ping_an"
    | "tai_ping"
    | "heng_qin"
    | "kun_lun"
    | "an_bang"
    | "qian_hai"
    | "bei_bu_wan"
    | "tai_ping_yang"
    | "mei_ya"
    | "hua_an"
    | "an_lian"
    | "xing_fu"
    | "fu_de"
    | "ya_tai"
    | "ren_bao_property"
    | "ping_an_property"
    | "hua_gui"
    | "dong_hai"
    | "xin_mei"
    | "guo_shou_cai"
    | "fu_xing"
    | "yang_guang_life"
    | "du_bang"
    | "jin_tai"
    | "ping_an_dong_guan"
    | "xin_tai"
    | "da_di"
    | "zhao_shang_ren_he"
    | "tong_fang_ren_shou"
    | "fu_de_sheng_ming"
    | "lu_jia_zui_guo_tai"
    | "rui_tai_ren_shou"
    | "bai_nian_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  saleType: 0 | 1 | 2;
  frontendProcessId: string;
  intro: {
    /**
     * 最大推广费比例
     */
    promotionMaxRate?: number;
    /**
     * 产品卖点
     */
    characteristicInfo?: string[];
    shareData?: {
      desc: string;
      image: string;
      title: string;
    };
    [k: string]: any;
  };
  [k: string]: any;
}

/**
 * uuid
 */
type CoreWarehouseCustomInsuranceAddResponse = string;

interface CoreWarehouseCustomInsuranceUpdateRequest {
  /**
   * 预约类险种ID
   */
  id: string;
  /**
   * 险种类型
   */
  type?: string;
  companyId?:
    | "ping_an"
    | "tai_ping"
    | "heng_qin"
    | "kun_lun"
    | "an_bang"
    | "qian_hai"
    | "bei_bu_wan"
    | "tai_ping_yang"
    | "mei_ya"
    | "hua_an"
    | "an_lian"
    | "xing_fu"
    | "fu_de"
    | "ya_tai"
    | "ren_bao_property"
    | "ping_an_property"
    | "hua_gui"
    | "dong_hai"
    | "xin_mei"
    | "guo_shou_cai"
    | "fu_xing"
    | "yang_guang_life"
    | "du_bang"
    | "jin_tai"
    | "ping_an_dong_guan"
    | "xin_tai"
    | "da_di"
    | "zhao_shang_ren_he"
    | "tong_fang_ren_shou"
    | "fu_de_sheng_ming"
    | "lu_jia_zui_guo_tai"
    | "rui_tai_ren_shou"
    | "bai_nian_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  saleType?: 0 | 1 | 2;
  [k: string]: any;
}

type CoreWarehouseCustomInsuranceUpdateResponse = null;

/**
 * 入口id
 */
type CoreWarehouseEntranceGetRequest = string;

interface CoreWarehouseEntranceGetResponse {
  id?: string;
  mode?: string;
  /**
   * 选择所有可用的险种竞价,仅团险入口有此字段
   */
  selectAll?: boolean;
  insuranceId?: string;
  insuranceIds?: string[];
  orgAccountId?: string;
  /**
   * 前端流程id
   */
  frontendProcessId?: string;
  [k: string]: any;
}

/**
 * 入口id
 */
type CoreWarehouseEntranceHasRequest = string;

type CoreWarehouseEntranceHasResponse = boolean;

interface CoreWarehouseInsuranceBackendGetRequest {
  /**
   * 操作者账户id
   */
  orgAccountId: string;
  /**
   * 险种id
   */
  insuranceId: string;
}

interface CoreWarehouseInsuranceBackendGetResponse {
  /**
   * 险种id
   */
  id: string;
  /**
   * 险种类型
   */
  type: string;
  /**
   * 公司id
   */
  companyId:
    | "ping_an"
    | "tai_ping"
    | "heng_qin"
    | "kun_lun"
    | "an_bang"
    | "qian_hai"
    | "bei_bu_wan"
    | "tai_ping_yang"
    | "mei_ya"
    | "hua_an"
    | "an_lian"
    | "xing_fu"
    | "fu_de"
    | "ya_tai"
    | "ren_bao_property"
    | "ping_an_property"
    | "hua_gui"
    | "dong_hai"
    | "xin_mei"
    | "guo_shou_cai"
    | "fu_xing"
    | "yang_guang_life"
    | "du_bang"
    | "jin_tai"
    | "ping_an_dong_guan"
    | "xin_tai"
    | "da_di"
    | "zhao_shang_ren_he"
    | "tong_fang_ren_shou"
    | "fu_de_sheng_ming"
    | "lu_jia_zui_guo_tai"
    | "rui_tai_ren_shou"
    | "bai_nian_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  saleType: 0 | 1 | 2;
  state: 0 | 1 | 2 | 3;
  orgSaleBlackList: string[];
  applicantIdentitySaleBlackList: (0 | 1 | 2 | 3)[];
  /**
   * 分享投保黑名单
   */
  shareToInsureBlackList?: (0 | 1 | 2 | 3)[];
  /**
   * 前端流程id
   */
  frontendProcessId: string;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 最近修改时间
   */
  modifiedAt: number;
  /**
   * 犹豫期
   */
  hesitantPeriod?: number;
  /**
   * 犹豫期单位
   */
  hesitantPeriodUnit?: "y" | "Q" | "M" | "d" | "age" | "once";
  /**
   * 是否在我的产品里可见
   */
  hidden?: boolean;
  /**
   * 是否使用产品工厂模板
   */
  useProductTemplate?: boolean;
  premiumRate?: {
    [k: string]: any;
  };
  /**
   * 险种创建者coreAccountId,系统级为"",预约险种为创建者核心id
   */
  creatorOrgAccountId: string;
  [k: string]: any;
}

interface CoreWarehouseInsuranceBackendListRequest {
  /**
   * 空字符能够拿到系统里所有的险种
   */
  orgAccountId: string;
  page?: number;
  pageSize?: number;
  /**
   * 险种状态
   */
  states?: number[];
  /**
   * {"OFFLINE":0,"ONLINE":1,"APPOINTMENT":2}
   */
  saleType?: number;
  /**
   * 险种类别
   */
  types?: string[];
  /**
   * 险种名称
   */
  name?: string;
  companyId?:
    | "ping_an"
    | "tai_ping"
    | "heng_qin"
    | "kun_lun"
    | "an_bang"
    | "qian_hai"
    | "bei_bu_wan"
    | "tai_ping_yang"
    | "mei_ya"
    | "hua_an"
    | "an_lian"
    | "xing_fu"
    | "fu_de"
    | "ya_tai"
    | "ren_bao_property"
    | "ping_an_property"
    | "hua_gui"
    | "dong_hai"
    | "xin_mei"
    | "guo_shou_cai"
    | "fu_xing"
    | "yang_guang_life"
    | "du_bang"
    | "jin_tai"
    | "ping_an_dong_guan"
    | "xin_tai"
    | "da_di"
    | "zhao_shang_ren_he"
    | "tong_fang_ren_shou"
    | "fu_de_sheng_ming"
    | "lu_jia_zui_guo_tai"
    | "rui_tai_ren_shou"
    | "bai_nian_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  /**
   * 默认为false
   */
  returnWithHiddenInsurance?: boolean;
  /**
   * 是否支持计划书
   */
  supportInsurancePlan?: boolean;
  /**
   * 支持产品工厂
   */
  useProductTemplate?: boolean;
  [k: string]: any;
}

interface CoreWarehouseInsuranceBackendListResponse {
  data: {
    /**
     * 险种id
     */
    id: string;
    /**
     * 险种类型
     */
    type: string;
    /**
     * 公司id
     */
    companyId:
      | "ping_an"
      | "tai_ping"
      | "heng_qin"
      | "kun_lun"
      | "an_bang"
      | "qian_hai"
      | "bei_bu_wan"
      | "tai_ping_yang"
      | "mei_ya"
      | "hua_an"
      | "an_lian"
      | "xing_fu"
      | "fu_de"
      | "ya_tai"
      | "ren_bao_property"
      | "ping_an_property"
      | "hua_gui"
      | "dong_hai"
      | "xin_mei"
      | "guo_shou_cai"
      | "fu_xing"
      | "yang_guang_life"
      | "du_bang"
      | "jin_tai"
      | "ping_an_dong_guan"
      | "xin_tai"
      | "da_di"
      | "zhao_shang_ren_he"
      | "tong_fang_ren_shou"
      | "fu_de_sheng_ming"
      | "lu_jia_zui_guo_tai"
      | "rui_tai_ren_shou"
      | "bai_nian_ren_shou"
      | "tai_kang_yang_lao"
      | "hai_bao_ren_shou"
      | "zhong_an"
      | "ping_an_an_hui"
      | "zhong_lu"
      | "zhong_guo_ren_shou"
      | "an_sheng"
      | "cic_property"
      | "zhong_yi_ren_shou"
      | "an_da";
    saleType: 0 | 1 | 2;
    state: 0 | 1 | 2 | 3;
    orgSaleBlackList: string[];
    applicantIdentitySaleBlackList: (0 | 1 | 2 | 3)[];
    /**
     * 分享投保黑名单
     */
    shareToInsureBlackList?: (0 | 1 | 2 | 3)[];
    /**
     * 前端流程id
     */
    frontendProcessId: string;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 最近修改时间
     */
    modifiedAt: number;
    /**
     * 犹豫期
     */
    hesitantPeriod?: number;
    /**
     * 犹豫期单位
     */
    hesitantPeriodUnit?: "y" | "Q" | "M" | "d" | "age" | "once";
    /**
     * 是否在我的产品里可见
     */
    hidden?: boolean;
    /**
     * 是否使用产品工厂模板
     */
    useProductTemplate?: boolean;
    premiumRate?: {
      [k: string]: any;
    };
    /**
     * 险种创建者coreAccountId,系统级为"",预约险种为创建者核心id
     */
    creatorOrgAccountId: string;
    [k: string]: any;
  }[];
  /**
   * 列表总数
   */
  totalCount: number;
}

interface CoreWarehouseInsuranceBackendUpdateRequest {
  /**
   * 操作者账户id
   */
  orgAccountId: string;
  /**
   * 险种id
   */
  insuranceId: string;
  banner?: string;
  premiumRate?: {
    [k: string]: any;
  };
  orgSaleBlackList?: string[];
  applicantIdentitySaleBlackList?: (0 | 1 | 2 | 3)[];
  shareToInsureBlackList?: (0 | 1 | 2 | 3)[];
  state?: 0 | 1 | 2 | 3;
  /**
   * 是否在我的产品里可见
   */
  hidden?: boolean;
}

type CoreWarehouseInsuranceBackendUpdateResponse = null;

interface CoreWarehouseInsuranceFrontendGetRequest {
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * 仅输出关键字段
   */
  concise?: boolean;
  /**
   * 输出职业码与地区码，默认携带
   */
  withJobCodeAreaCode?: boolean;
  [k: string]: any;
}

interface CoreWarehouseInsuranceFrontendGetResponse {
  /**
   * 险种id
   */
  id?: string;
  /**
   * 基础信息配置
   */
  base?: {
    /**
     * 险种id
     */
    id: string;
    /**
     * {"Individual":{"Accident":{"PERSONAL":"100000","TRAVEL":"100001","TRAFFIC":"100002"},"Health":{"SERIOUS_ILLNESS":"101001","MEDICAL":"101002"},"Property":{"VEHICLE":"102000","FAMILY_PERSONAL":"102001"},"Life":{"TERM":"103000","WHOLE":"103001","LIVE":"103002","ENDOWMENT":"103003","PENSION":"103004","UNIVERSAL":"103005"},"Annuities":{"EDUCATION":"104000","PENSION":"104001"}},"Group":{"Accident":{"PERSONAL":"200000","CONSTRUCTION":"200001"},"Property":{"COMPANY":"201000"},"Liability":{"EMPLOYERS":"202000","PRODUCT":"202001"},"Engineering":{"CONSTRUCTION":"203000","INSTALL":"203001","TECHNOLOGY":"203002"},"Cargo":{"PARCEL_POST":"204000","AIR":"204001","OCEAN_VESSEL":"204002","INLAND":"204003"}}}
     */
    type: string;
    /**
     * 使用产品模板
     */
    useProductTemplate?: boolean;
    /**
     * 险种名字
     */
    name: string;
    /**
     * 前端流程ID
     */
    frontendProcessId: string;
    companyId: string;
    /**
     * 产品描述
     */
    characteristicInfo?: string[];
    /**
     * 默认展示的销量
     */
    defaultSalesVolume?: number;
    insuranceCode?: string;
    isStaged: boolean;
    /**
     * 是否自营险种
     */
    isSelfOperated: boolean;
    /**
     * 险种对接方式: API,CPS,PERSONNEL
     */
    accessMode: 0 | 1 | 2;
    /**
     * 出单类型: OFFLINE,ONLINE,APPOINTMENT
     */
    saleType?: 0 | 1 | 2;
    /**
     * 入口配置
     */
    entrance?: {
      /**
       * 产品名
       */
      name: string;
      /**
       * 产品描述
       */
      description: string[];
      /**
       * logo图
       */
      imageUrl: string;
      /**
       * 产品推荐位大图
       */
      productRecommendedImageUrl: string;
      /**
       * 按钮文案
       */
      buttonText: string;
      /**
       * 险种分类
       */
      insuranceType: string[];
      /**
       * 年龄段
       */
      people: string[];
      /**
       * 人群
       */
      group: string[];
      /**
       * 产品特色
       */
      characteristic: string[];
      /**
       * 预约险种用到
       */
      promotion?: number;
      /**
       * 前端流程ID
       */
      frontendProcessId?: string;
    };
    /**
     * 险种页正文配置
     */
    advPicture?: {
      /**
       * banner
       */
      banner: string;
      /**
       * 险种视频介绍
       */
      video: {
        /**
         * 是否启用视频介绍
         */
        enable: boolean;
        /**
         * 云点播文件id
         */
        fileId?: string;
        /**
         * 云点播appId,h5项目生成
         */
        appId?: string;
        /**
         * key防盗签名,h5项目生成
         */
        pSign?: string;
        [k: string]: any;
      };
      /**
       * 图片资源相关
       */
      insIntro: {
        title: string;
        /**
         * 介绍内容，可选图片或者文字
         */
        content: {
          imgs?: string[];
          text?: string[];
          [k: string]: any;
        };
      }[];
    };
    taxResident?: "0" | "1";
    docs?: {
      documentTitle?: string;
      /**
       * 健康告知内容
       */
      healthInquiry?: {
        /**
         * 选项id
         */
        id: string;
        /**
         * 问题，支持html
         */
        question: string;
        /**
         * 选项
         */
        options: string[];
      }[];
      /**
       * 保险条款
       */
      terms?: {
        /**
         * 老险种用到
         */
        id?: string;
        /**
         * 条例名字
         */
        name: string;
        /**
         * 条款文件下载地址
         */
        downloadUrl: string;
        type?: number;
        [k: string]: any;
      }[];
      others?: {
        /**
         * 老险种用到
         */
        id?: string;
        /**
         * 条例名字
         */
        name: string;
        /**
         * 条款文件下载地址
         */
        downloadUrl: string;
        type?: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    /**
     * 保障责任模块
     */
    duty?: {
      /**
       * 险种投保类型, 保额: amount  和套餐类型: combo
       */
      quoteType?: "amount" | "combo";
      /**
       * 默认套餐id, 如果是保额模式
       */
      value?: string;
      insurances?: {
        name?: string;
        id?: string;
        /**
         * 价格文案
         */
        priceText?: string;
        /**
         * 保障责任数组，前端自己发挥
         */
        duty?: {
          [k: string]: any;
        }[];
        /**
         * 保障责任数组，前端自己发挥
         */
        rider?: {
          [k: string]: any;
        }[];
        firstPremium?: number;
      }[];
    };
    /**
     * 投保须知, 定义一批规定的id名属性, 中文名有各自实现
     */
    shouldKnownList?: {
      /**
       *
       *                     period:'保障期限',
       *                     group:'适用人群',
       *                     city:'可投保城市',
       *                     hesitantPeriod:'犹豫期',
       *                     waitPeriod:'等待期',
       *                     renewRule:'续保规则',
       *                     payPeriod:'交费期限',
       *                     job:'承保职业',
       *                     intelligentUnderwrite:'智能核保',
       *                     personalUnderwrite:'人工核保',
       *                     smoke:'是否吸烟',
       *                     incomeRule:'收入要求',
       *                     amount: '基本保额'
       *
       */
      id?:
        | "period"
        | "group"
        | "city"
        | "hesitantPeriod"
        | "waitPeriod"
        | "renewRule"
        | "payPeriod"
        | "job"
        | "intelligentUnderwrite"
        | "personalUnderwrite"
        | "smoke"
        | "incomeRule"
        | "amount";
      value?: string;
      [k: string]: any;
    }[];
    /**
     * 分享配置,默认分享key为default
     */
    shareData?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: {
        /**
         * 分享标题
         */
        title: string;
        /**
         * 分享描述
         */
        desc: string;
        /**
         * 分享图
         */
        image: string;
      };
    };
    /**
     * reject(拒绝投保) /  certificateImage(上传认证图片)  / normal(普通模式不处理)
     */
    rejectLaunderType?: "reject" | "certificateImage" | "normal";
    /**
     * 支付方式 第三方支付thirdParty,银行卡支付bank,银邦支付yinBang,银行卡支付加验证码bankAndCaptcha
     */
    payType?: "thirdParty" | "bank" | "yinBang" | "bankAndCaptcha";
    company: {
      id: string;
      name: string;
      shortName: string;
      desc: string;
      intro: string;
      logo: string;
      [k: string]: any;
    };
    waitingPeriod?: number;
    /**
     * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
     */
    waitingPeriodUnit?: "y" | "Q" | "M" | "d" | "age" | "once";
    hesitantPeriod?: number;
    /**
     * 保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸
     */
    hesitantPeriodUnit?: "y" | "Q" | "M" | "d" | "age" | "once";
    /**
     * 险种创建者coreAccountId,系统级为"",预约险种为创建者核心id
     */
    creatorOrgAccountId: string;
    /**
     * 创建时间
     */
    createdAt?: number;
    /**
     * 最近修改时间
     */
    modifiedAt?: number;
    [k: string]: any;
  };
  /**
   * 地区编码
   */
  areaCode?: {
    [k: string]: any;
  }[];
  /**
   * 职业编码
   */
  jobCode?: {
    [k: string]: any;
  }[];
  /**
   * 支持的银行编码列表
   */
  supportBank?: number[];
  plan?: {
    [k: string]: any;
  };
  insureInfo?: {
    [k: string]: any;
  };
  /**
   * 核保配置化 H5类型暂时不实现。 处理是否展示健康告知, 第三方核保和 自定义核保
   */
  underwrite?: {
    /**
     * normal:普通健康告知、 thirdParty直接跳第三方核保， custom自定义核保
     */
    type: "normal" | "thirdParty" | "custom";
    /**
     * 前端序列化为字符串， 答题树
     */
    data?: string;
  };
  extraData?: {
    /**
     * 存放预约险种配置，等待后期做模板迁移迁移
     */
    reservationInsurance?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
}

interface CoreWarehouseInsuranceFrontendUpdateRequest {
  /**
   * 险种id
   */
  id: string;
  /**
   * 基础信息配置
   */
  base?: {
    /**
     * 前端流程ID
     */
    frontendProcessId: string;
    /**
     * 产品描述
     */
    characteristicInfo?: string[];
    /**
     * 默认展示的销量
     */
    defaultSalesVolume?: number;
    insuranceCode?: string;
    /**
     * 入口配置
     */
    entrance?: {
      /**
       * 产品名
       */
      name: string;
      /**
       * 产品描述
       */
      description: string[];
      /**
       * logo图
       */
      imageUrl: string;
      /**
       * 产品推荐位大图
       */
      productRecommendedImageUrl: string;
      /**
       * 按钮文案
       */
      buttonText: string;
      /**
       * 险种分类
       */
      insuranceType: string[];
      /**
       * 年龄段
       */
      people: string[];
      /**
       * 人群
       */
      group: string[];
      /**
       * 产品特色
       */
      characteristic: string[];
      /**
       * 预约险种用到
       */
      promotion?: number;
    };
    /**
     * 险种页正文配置
     */
    advPicture?: {
      /**
       * banner
       */
      banner: string;
      /**
       * 险种视频介绍
       */
      video: {
        /**
         * 是否启用视频介绍
         */
        enable: boolean;
        /**
         * 云点播文件id
         */
        fileId?: string;
        [k: string]: any;
      };
      /**
       * 图片资源相关
       */
      insIntro: {
        title: string;
        /**
         * 介绍内容，可选图片或者文字
         */
        content: {
          imgs?: string[];
          text?: string[];
          [k: string]: any;
        };
      }[];
    };
    taxResident?: "0" | "1";
    docs?: {
      documentTitle?: string;
      /**
       * 健康告知内容
       */
      healthInquiry?: {
        /**
         * 选项id
         */
        id: string;
        /**
         * 问题，支持html
         */
        question: string;
        /**
         * 选项
         */
        options: string[];
      }[];
      /**
       * 保险条款
       */
      terms?: {
        /**
         * 老险种用到
         */
        id?: string;
        /**
         * 条例名字
         */
        name: string;
        /**
         * 条款文件下载地址
         */
        downloadUrl: string;
        type: number;
        [k: string]: any;
      }[];
      others?: {
        /**
         * 老险种用到
         */
        id?: string;
        /**
         * 条例名字
         */
        name: string;
        /**
         * 条款文件下载地址
         */
        downloadUrl: string;
        type: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    /**
     * 保障责任模块
     */
    duty?: {
      /**
       * 险种投保类型, 保额: amount  和套餐类型: combo
       */
      quoteType?: "amount" | "combo";
      /**
       * 默认套餐id, 如果是保额模式
       */
      value?: string;
      insurances?: {
        name?: string;
        id?: string;
        /**
         * 价格文案
         */
        priceText?: string;
        /**
         * 保障责任数组，前端自己发挥
         */
        duty?: {
          [k: string]: any;
        }[];
        /**
         * 保障责任数组，前端自己发挥
         */
        rider?: {
          [k: string]: any;
        }[];
        firstPremium?: number;
      }[];
    };
    /**
     * 投保须知, 定义一批规定的id名属性, 中文名有各自实现
     */
    shouldKnownList?: {
      /**
       *
       *                         period:'保障期限',
       *                         group:'适用人群',
       *                         city:'可投保城市',
       *                         hesitantPeriod:'犹豫期',
       *                         waitPeriod:'等待期',
       *                         renewRule:'续保规则',
       *                         payPeriod:'交费期限',
       *                         job:'承保职业',
       *                         intelligentUnderwrite:'智能核保',
       *                         personalUnderwrite:'人工核保',
       *                         smoke:'是否吸烟',
       *                         incomeRule:'收入要求',
       *                         amount: '基本保额'
       *
       */
      id?:
        | "period"
        | "group"
        | "city"
        | "hesitantPeriod"
        | "waitPeriod"
        | "renewRule"
        | "payPeriod"
        | "job"
        | "intelligentUnderwrite"
        | "personalUnderwrite"
        | "smoke"
        | "incomeRule"
        | "amount";
      value?: string;
      [k: string]: any;
    }[];
    /**
     * 分享配置,默认分享key为default
     */
    shareData?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: {
        /**
         * 分享标题
         */
        title: string;
        /**
         * 分享描述
         */
        desc: string;
        /**
         * 分享图
         */
        image: string;
      };
    };
    /**
     * 支付方式 第三方支付thirdParty,银行卡支付bank,银邦支付yinBang,银行卡支付加验证码bankAndCaptcha
     */
    payType?: "thirdParty" | "bank" | "yinBang" | "bankAndCaptcha";
    /**
     * reject(拒绝投保) /  certificateImage(上传认证图片)  / normal(普通模式不处理)
     */
    rejectLaunderType?: "reject" | "certificateImage" | "normal";
  };
  plan?: {
    [k: string]: any;
  };
  insureInfo?: {
    [k: string]: any;
  };
  /**
   * 核保配置化 H5类型暂时不实现。 处理是否展示健康告知, 第三方核保和 自定义核保
   */
  underwrite?: {
    /**
     * normal:普通健康告知、 thirdParty直接跳第三方核保， custom自定义核保
     */
    type: "normal" | "thirdParty" | "custom";
    /**
     * 前端序列化为字符串， 答题树
     */
    data?: string;
  };
}

type CoreWarehouseInsuranceFrontendUpdateResponse = null;

interface CoreWarehouseInsuranceDefaultBackendGetRequest {
  /**
   * 操作者账户id
   */
  orgAccountId: string;
  /**
   * 险种id
   */
  insuranceId: string;
}

interface CoreWarehouseInsuranceDefaultBackendGetResponse {
  orgSaleBlackList: string[];
  applicantIdentitySaleBlackList: (0 | 1 | 2 | 3)[];
  shareToInsureBlackList: (0 | 1 | 2 | 3)[];
}

/**
 * 操作者账户id
 */
type CoreWarehouseInsuranceMapBackendGetRequest = string;

interface CoreWarehouseInsuranceMapBackendGetResponse {
  [k: string]: any;
}

type CoreWarehousePromotionRateEffectTemplateGetRequest = {
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 作用者accountId
   */
  targetAccountId: string;
  /**
   * 作用者职级
   */
  targetAccountJobRank?: string;
}[];

interface CoreWarehousePromotionRateEffectTemplateGetResponse {
  [k: string]: any;
}

interface CoreWarehousePromotionRateGetRequest {
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 险种id
   */
  insuranceId: string;
  /**
   * 作用者accountId
   */
  targetAccountId: string;
  /**
   * 作用者职级
   */
  targetAccountJobRank?: string;
}

interface CoreWarehousePromotionRateGetResponse {
  insuranceCompanyToOrg: number;
  orgToAgent:
    | {
        [k: string]: any;
      }[]
    | {
        [k: string]: any;
      };
}

interface CoreWarehousePromotionRateTemplateCreateRequest {
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 模板名字
   */
  name: string;
}

/**
 * 模板id
 */
type CoreWarehousePromotionRateTemplateCreateResponse = string;

interface CoreWarehousePromotionRateTemplateDeleteRequest {
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 模板id
   */
  templateId: string;
}

type CoreWarehousePromotionRateTemplateDeleteResponse = null;

interface CoreWarehousePromotionRateTemplateGetRequest {
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 模板id
   */
  templateId?: string;
  /**
   * 作用者id,默认模板用default
   */
  targetAccountId: string;
  targetAccountJobRank?: string;
  companyId?:
    | "ping_an"
    | "tai_ping"
    | "heng_qin"
    | "kun_lun"
    | "an_bang"
    | "qian_hai"
    | "bei_bu_wan"
    | "tai_ping_yang"
    | "mei_ya"
    | "hua_an"
    | "an_lian"
    | "xing_fu"
    | "fu_de"
    | "ya_tai"
    | "ren_bao_property"
    | "ping_an_property"
    | "hua_gui"
    | "dong_hai"
    | "xin_mei"
    | "guo_shou_cai"
    | "fu_xing"
    | "yang_guang_life"
    | "du_bang"
    | "jin_tai"
    | "ping_an_dong_guan"
    | "xin_tai"
    | "da_di"
    | "zhao_shang_ren_he"
    | "tong_fang_ren_shou"
    | "fu_de_sheng_ming"
    | "lu_jia_zui_guo_tai"
    | "rui_tai_ren_shou"
    | "bai_nian_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  insuranceName?: string;
  insuranceIds?: string[];
  /**
   * 当模板里没有添加指定的险种时，采用默认费率补全结果
   */
  ifNullReturnDefaultRate?: boolean;
  /**
   * 展示软删除的险种
   */
  showDeleted?: boolean;
  /**
   * 团险数值为最终值,默认为false,显示计算前的结果
   */
  showGroupInsuranceFinalValue?: boolean;
  pagination?: {
    /**
     * 页码
     */
    page: number;
    /**
     * 每页返回险种的数量
     */
    pageSize: number;
  };
  [k: string]: any;
}

type CoreWarehousePromotionRateTemplateGetResponse = {
  list: {
    id: string;
    /**
     * 索引key路径，用于构建树
     */
    path: string;
    /**
     * 险种id
     */
    insuranceId: string;
    insuranceType: string;
    /**
     * 销售类型
     */
    saleType: 0 | 1 | 2;
    /**
     * 险种名称
     */
    insuranceName: string;
    /**
     * 险种名称，例如：横琴优时代主险
     */
    title: string;
    /**
     * 明细&责任， 例如：基本责任－保至80
     */
    detail: string;
    /**
     * 推广费期数，数组下标为0为首年，接下来第二年，以此类推
     */
    periodIndex: number;
    /**
     * 交费期限
     */
    payPeriod: number;
    /**
     * 交费期限单位，存在非系统定义单位，故使用string
     */
    payPeriodUnit: string;
    /**
     * 下级费率，单位%
     */
    rate: number;
    /**
     * 该项是否为自定义费率
     */
    isCustom: boolean;
    /**
     * 费率调整记录
     */
    subtractRecord: {
      [k: string]: any;
    };
    /**
     * 是否为豁免项，对应管理后台邀请奖励显示时，period+1
     */
    isHuoMian: boolean;
    frontendProcessId: string;
  }[];
  /**
   * 页码
   */
  page: number;
  /**
   * 列表总数
   */
  totalCount: number;
  [k: string]: any;
};

interface CoreWarehousePromotionRateTemplateInsuranceAddRequest {
  /**
   * uuid
   */
  templateId: string;
  /**
   * 给模板添加则用default
   */
  targetAccountId: string;
  insuranceIds: string[];
}

type CoreWarehousePromotionRateTemplateInsuranceAddResponse = null;

interface CoreWarehousePromotionRateTemplateInsuranceDeleteRequest {
  /**
   * uuid
   */
  templateId: string;
  /**
   * 给模板添加则用default
   */
  targetAccountId: string;
  /**
   * 险种id
   */
  insuranceId: string;
}

type CoreWarehousePromotionRateTemplateInsuranceDeleteResponse = null;

interface CoreWarehousePromotionRateTemplateListRequest {
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * uuid
   */
  templateId?: string;
  orgUse?: string[];
  personalUse?: string[];
  jobRankUse?: string[];
  /**
   * 模板名字,支持模糊搜索
   */
  name?: string;
  modifiedAt?: {
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    from: number;
    /**
     * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
     */
    to: number;
  };
  pagination?: {
    /**
     * 页码
     */
    page: number;
    /**
     * 页大小
     */
    pageSize: number;
  };
  [k: string]: any;
}

type CoreWarehousePromotionRateTemplateListResponse =
  | {
      list: {
        /**
         * uuid
         */
        id: string;
        /**
         * 模板名字
         */
        name: string;
        /**
         * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
         */
        modifiedAt: number;
        orgUse: string[];
        personalUse: string[];
        jobRankUse: string[];
      }[];
      /**
       * 页码
       */
      page: number;
      /**
       * 列表总数
       */
      totalCount: number;
      [k: string]: any;
    }
  | {
      /**
       * uuid
       */
      id: string;
      /**
       * 模板名字
       */
      name: string;
      /**
       * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
       */
      modifiedAt: number;
      orgUse: string[];
      personalUse: string[];
      jobRankUse: string[];
    }[];

interface CoreWarehousePromotionRateTemplateResetRequest {
  /**
   * 操作者账户id
   */
  accountId: string;
  /**
   * 模板id
   */
  templateId: string;
  /**
   * 修改的人/机构则传其核心id
   */
  targetAccountId: string;
}

type CoreWarehousePromotionRateTemplateResetResponse = null;

type CoreWarehousePromotionRateTemplateUpdateRequest =
  | {
      /**
       * 模板id
       */
      templateId: string;
      /**
       * 修改的人/机构则传其核心id,修改模板则传default
       */
      targetAccountId: string;
      /**
       * 更新的节点集合
       */
      insurancesChangeNodes: {
        /**
         * 险种id
         */
        insuranceId: string;
        /**
         * 更新的节点
         */
        nodes: {
          /**
           * 费率配置项id
           */
          id: string;
          /**
           * 下级费率，单位%
           */
          subordinateRate: number;
        }[];
      }[];
    }
  | {
      /**
       * 模板id
       */
      templateId: string;
      /**
       * 模板名
       */
      name: string;
    };

type CoreWarehousePromotionRateTemplateUpdateResponse = null;

type CoreWarehousePromotionRateTemplateUseRequest =
  | {
      /**
       * 操作者账户id
       */
      accountId: string;
      /**
       * 操作者账户id
       */
      targetAccountId: string;
      /**
       * 作用者职级
       */
      targetAccountJobRank?: string;
      /**
       * uuid
       */
      templateId: string;
      /**
       * targetAccountId是否为机构
       */
      isOrg: boolean;
    }
  | {
      /**
       * 操作者账户id
       */
      accountId: string;
      jobRanksTemplateId: {
        /**
         * 当前职级
         */
        jobRank:
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
        templateId: null | string;
      }[];
    };

type CoreWarehousePromotionRateTemplateUseResponse = null;

