// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5AccountDuplicate {
  id: string;
  coreAccountId: string;
  superiorCoreAccountId: string;
  userId: string;
}

interface H5AccountInfo {
  id: string;
  coreAccountId: string;
  userId: string;
  type: number;
  password: string;
  createdAt: number;
}

interface H5AccountRecommendProduct {
  /**
   * 机构核心ID
   */
  id: string;
  preUnderwrite?: {
    /**
     * 岁数开始范围
     */
    start: number;
    /**
     * 岁数结束范围
     */
    end: number;
    products: {
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
       * 自定义险种才有
       */
      promotion?: number;
    }[];
  }[];
  familyRiskEvaluation?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: {
      /**
       * 岁数开始范围
       */
      start: number;
      /**
       * 岁数结束范围
       */
      end: number;
      products: {
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
         * 自定义险种才有
         */
        promotion?: number;
      }[];
    }[];
  };
  companyRiskEvaluation?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: {
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
       * 自定义险种才有
       */
      promotion?: number;
    }[];
  };
}

