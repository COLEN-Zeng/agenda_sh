// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

/**
 * 计划书id
 */
type H5InsurancePlanInfoDelRequest = string;

type H5InsurancePlanInfoDelResponse = null;

/**
 * 计划书id
 */
type H5InsurancePlanInfoGetRequest = string;

interface H5InsurancePlanInfoGetResponse {
  /**
   * id
   */
  id: string;
  /**
   * userId
   */
  userId: string;
  /**
   * 计划书名称
   */
  name: string;
  insuredList: {
    /**
     * 前端需要的id
     */
    id?: string;
    /**
     * 被保人信息
     */
    info?: {
      /**
       * 被保人名字
       */
      name?: string;
      /**
       * 年龄，前端使用
       */
      age?: number;
      /**
       * 性别
       */
      gender?: number;
    };
    productList?: {
      /**
       * 首期保费
       */
      premium?: number;
      /**
       * 试算状态
       */
      status?: number;
      /**
       * 错误信息
       */
      errorMessage?: string;
      /**
       * 产品入口id
       */
      entranceId: string;
      /**
       * 险种id
       */
      insuranceId?: string;
      /**
       * 前端报价原始数据
       */
      businessData: {
        [k: string]: any;
      };
    }[];
    /**
     * 首期合计保费
     */
    totalPremium?: number;
  }[];
  /**
   * 首期合计保费
   */
  totalPremium: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 修改时间
   */
  modifiedAt: number;
}

interface H5InsurancePlanInfoListRequest {
  /**
   * 人员ID
   */
  userId: string;
  /**
   * 排序类型: 0: 最新 1: 最多人看 2: 保费最低，默认最新
   */
  sort?: number;
  /**
   * 页
   */
  page: number;
  /**
   * 页大小
   */
  pageSize: number;
}

interface H5InsurancePlanInfoListResponse {
  data?: {
    /**
     * id
     */
    id?: string;
    /**
     * userId
     */
    userId?: string;
    /**
     * 计划书名称
     */
    name?: string;
    insuredList?: {
      /**
       * 前端需要的id
       */
      id?: string;
      /**
       * 被保人信息
       */
      info?: {
        /**
         * 被保人名字
         */
        name?: string;
        /**
         * 年龄，前端使用
         */
        age?: number;
        /**
         * 性别
         */
        gender?: number;
      };
      productList?: {
        /**
         * 首期保费
         */
        premium?: number;
        /**
         * 试算状态
         */
        status?: number;
        /**
         * 错误信息
         */
        errorMessage?: string;
        /**
         * 产品入口id
         */
        entranceId: string;
        /**
         * 险种id
         */
        insuranceId?: string;
        /**
         * 前端报价原始数据
         */
        businessData: {
          [k: string]: any;
        };
      }[];
      /**
       * 首期合计保费
       */
      totalPremium?: number;
    }[];
    /**
     * 首期合计保费
     */
    totalPremium?: number;
    /**
     * 创建时间
     */
    createdAt?: number;
    /**
     * 修改时间
     */
    modifiedAt?: number;
    /**
     * 阅读量list的时候展示此字段
     */
    readingVolume?: number;
    [k: string]: any;
  }[];
  totalCount?: number;
  [k: string]: any;
}

interface H5InsurancePlanInfoSetRequest {
  /**
   * id
   */
  id?: string;
  /**
   * userId
   */
  userId: string;
  /**
   * 计划书名称
   */
  name: string;
  insuredList: {
    /**
     * 前端需要的id
     */
    id?: string;
    /**
     * 被保人信息
     */
    info?: {
      /**
       * 被保人名字
       */
      name?: string;
      /**
       * 年龄，前端使用
       */
      age?: number;
      /**
       * 性别
       */
      gender?: number;
    };
    productList?: {
      /**
       * 首期保费
       */
      premium?: number;
      /**
       * 试算状态
       */
      status?: number;
      /**
       * 错误信息
       */
      errorMessage?: string;
      /**
       * 产品入口id
       */
      entranceId: string;
      /**
       * 险种id
       */
      insuranceId?: string;
      /**
       * 前端报价原始数据
       */
      businessData: {
        [k: string]: any;
      };
    }[];
    /**
     * 首期合计保费
     */
    totalPremium?: number;
  }[];
  /**
   * 首期合计保费
   */
  totalPremium?: number;
  /**
   * 创建时间
   */
  createdAt?: number;
  /**
   * 修改时间
   */
  modifiedAt?: number;
}

/**
 * 计划书id
 */
type H5InsurancePlanInfoSetResponse = string;

/**
 * 计划书id
 */
type H5InsurancePlanReadingVolumeAddRequest = string;

type H5InsurancePlanReadingVolumeAddResponse = null;

