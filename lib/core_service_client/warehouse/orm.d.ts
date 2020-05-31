// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

interface WarehouseEntrance {
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

interface WarehouseInsuranceBackend {
  /**
   * uuid,无其他作用
   */
  id: string;
  /**
   * accountId
   */
  orgAccountId: string;
  /**
   * insuranceId
   */
  insuranceId: string;
  orgSaleBlackList?: string[];
  applicantIdentitySaleBlackList?: (0 | 1 | 2 | 3)[];
  state?: 0 | 1 | 2 | 3;
  /**
   * 创建时间
   */
  createdAt?: number;
  /**
   * 最近修改时间
   */
  modifiedAt?: number;
  /**
   * 分享投保黑名单
   */
  shareToInsureBlackList?: (0 | 1 | 2 | 3)[];
  /**
   * 是否在我的产品里可见
   */
  hidden?: boolean;
  premiumRate?: {
    [k: string]: any;
  };
  /**
   * 险种名字，预约类险种才允许写这个字段！！！
   */
  name?: string;
  /**
   * 险种类型，预约类险种才允许写这个字段！！！
   */
  type?: string;
  /**
   * 公司id，预约类险种才允许写这个字段！！！
   */
  companyId?: string;
  /**
   * 销售类型，预约类险种才允许写这个字段！！！
   */
  saleType?: number;
  /**
   * 险种类型，预约类险种才允许写这个字段！！！
   */
  frontendProcessId?: string;
}

interface WarehouseInsuranceFrontend {
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
    /**
     * 险种代码
     */
    insuranceCode: string;
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
      banner?: string;
      /**
       * 险种视频介绍
       */
      video?: {
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
      insIntro?: {
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
    [k: string]: any;
  };
  /**
   * 其他自定义字段  用来做产品对比 和 显示用
   */
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

interface WarehousePromotionRateTemplate {
  id?: string;
  /**
   * accountId
   */
  accountId?: string;
  orgUse?: string[];
  personalUse?: string[];
  jobRankUse?: string[];
  /**
   * 目前已经是无模板用户，为了保留subtractRecord
   */
  emptyUse?: string[];
  name?: string;
  /**
   * 每个机构/个人推广费配置
   */
  config?: {
    /**
     * 某个机构/个人的推广费配置
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: {
      /**
       * 某个机构/个人某个险种推广费配置
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: {
        /**
         * insuranceId
         */
        id?: string;
        deleted?: boolean;
        nodes?: {
          /**
           * 某个机构/个人某个险种某一项推广费配置
           *
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^.+$".
           */
          [k: string]: {
            /**
             * 配置项id,
             */
            id?: string;
            /**
             * 索引key路径，用于构建树
             */
            path?: string;
            /**
             * 推广费期数，数组下标为0为首年，接下来第二年，以此类推
             */
            periodIndex?: number;
            /**
             * 交费期限
             */
            payPeriod?: number;
            /**
             * 交费期限单位
             */
            payPeriodUnit?: string;
            rate?: number;
            subtractRecord?: {
              /**
               * 累计下调值，用于子级自动扣除子级的子级费率
               *
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^.+$".
               */
              [k: string]: number;
            };
            /**
             * 是否为重写值节点
             */
            isCustom?: boolean;
          };
        };
        /**
         * 创建时间
         */
        createdAt?: number;
      };
    };
  };
  /**
   * 创建时间
   */
  createdAt?: number;
  /**
   * 最近修改时间
   */
  modifiedAt?: number;
  /**
   * 软删除标志, 0正常,1删除
   */
  deleted?: 0 | 1;
}

