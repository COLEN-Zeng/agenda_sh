// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5InsurancePlanInfo {
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
      premium: number;
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
    [k: string]: any;
  }[];
  /**
   * 首期合计保费
   */
  totalPremium?: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 修改时间
   */
  modifiedAt?: number;
}

interface H5InsurancePlanPlanBookExponent {
  /**
   * id
   */
  id: string;
  /**
   * userId
   */
  userId: string;
  /**
   * 阅读量
   */
  readingVolume: number;
  [k: string]: any;
}

