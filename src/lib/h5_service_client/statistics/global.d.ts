// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5StatisticsPremiumCustomUnitGetRequest {
  /**
   * 操作者账户id
   */
  orgAccountId?: string;
  /**
   * 时间段, 0-自定义, 1-今日, 2-本周, 3-本月, 4-本年
   */
  unit?: 0 | 1 | 2 | 3 | 4;
  /**
   * 0是起始, 1是结束
   */
  range?: number[];
  [k: string]: any;
}

interface H5StatisticsPremiumCustomUnitGetResponse {
  total?: {
    /**
     * 所有险种保费
     */
    premium: {
      /**
       * 保费, 单位为分
       */
      val: number;
      range: string[];
    }[];
    /**
     * 所有险种出单量
     */
    amount: {
      /**
       * 出单量
       */
      val: number;
      range: string[];
    }[];
    /**
     * 所有险种保费排名
     */
    premiumRanking: {
      /**
       * 机构名
       */
      name: string;
      val: number;
    }[];
    /**
     * 所有险种保单数排名
     */
    amountRanking: {
      /**
       * 机构名
       */
      name: string;
      val: number;
    }[];
    /**
     * 所有险种保费概况，含当前保费总和，昨日保费总和，去年同期总和，三个结合计算可得出环比，同比
     */
    premiumSummary?: {
      /**
       * 当前保费总和
       */
      this: number;
      /**
       * 前一期保费总和
       */
      previous?: number;
      /**
       * 去年同期保费总和
       */
      previousYear?: number;
    };
    /**
     * 所有险种保单数概况，含当前保单数总和，昨日保单数总和，去年同期总和，三个结合计算可得出环比，同比
     */
    amountSummary?: {
      /**
       * 当前保单数总和
       */
      this: number;
      /**
       * 前一期保单数总和
       */
      previous?: number;
      /**
       * 去年同期保单数总和
       */
      previousYear?: number;
    };
    /**
     * 保费占比
     */
    premiumTypeProportion?: {
      /**
       * {
       *     "重疾": "101001",
       *     "医疗": "101002",
       *     "定寿": "103000",
       *     "终寿": "103001",
       *     "意外": "100",
       *     "家财": "102",
       *     "年金": "104",
       *     "团财": "201",
       *     "雇主": "202000",
       *     "货运": "204",
       *     "团意": "200000",
       *     "建工": "200001",
       *     "产责": "202001",
       *     "其他": "other"
       * }
       */
      type:
        | "101001"
        | "101002"
        | "103000"
        | "103001"
        | "100"
        | "102"
        | "104"
        | "201"
        | "202000"
        | "204"
        | "200000"
        | "200001"
        | "202001"
        | "other";
      /**
       * 分类的值
       */
      val: number;
    }[];
    /**
     * 保单占比
     */
    amountTypeProportion?: {
      /**
       * {
       *     "重疾": "101001",
       *     "医疗": "101002",
       *     "定寿": "103000",
       *     "终寿": "103001",
       *     "意外": "100",
       *     "家财": "102",
       *     "年金": "104",
       *     "团财": "201",
       *     "雇主": "202000",
       *     "货运": "204",
       *     "团意": "200000",
       *     "建工": "200001",
       *     "产责": "202001",
       *     "其他": "other"
       * }
       */
      type:
        | "101001"
        | "101002"
        | "103000"
        | "103001"
        | "100"
        | "102"
        | "104"
        | "201"
        | "202000"
        | "204"
        | "200000"
        | "200001"
        | "202001"
        | "other";
      /**
       * 分类的值
       */
      val: number;
    }[];
  };
  individual: {
    /**
     * 个险保费
     */
    premium: {
      /**
       * 保费, 单位为分
       */
      val: number;
      range: string[];
    }[];
    /**
     * 个险出单量
     */
    amount: {
      /**
       * 出单量
       */
      val: number;
      range: string[];
    }[];
    /**
     * 个险保费排名
     */
    premiumRanking: {
      /**
       * 机构名
       */
      name: string;
      val: number;
    }[];
    /**
     * 个险保单数排名
     */
    amountRanking: {
      /**
       * 机构名
       */
      name: string;
      val: number;
    }[];
    /**
     * 个险保费概况，含当前保费总和，昨日保费总和，去年同期总和，三个结合计算可得出环比，同比
     */
    premiumSummary?: {
      /**
       * 当前保费总和
       */
      this: number;
      /**
       * 前一期保费总和
       */
      previous?: number;
      /**
       * 去年同期保费总和
       */
      previousYear?: number;
    };
    /**
     * 个险保单数概况，含当前保单数总和，昨日保单数总和，去年同期总和，三个结合计算可得出环比，同比
     */
    amountSummary?: {
      /**
       * 当前保单数总和
       */
      this: number;
      /**
       * 前一期保单数总和
       */
      previous?: number;
      /**
       * 去年同期保单数总和
       */
      previousYear?: number;
    };
    /**
     * 保费占比
     */
    premiumTypeProportion?: {
      /**
       * {
       *     "重疾": "101001",
       *     "医疗": "101002",
       *     "定寿": "103000",
       *     "终寿": "103001",
       *     "意外": "100",
       *     "家财": "102",
       *     "年金": "104",
       *     "团财": "201",
       *     "雇主": "202000",
       *     "货运": "204",
       *     "团意": "200000",
       *     "建工": "200001",
       *     "产责": "202001",
       *     "其他": "other"
       * }
       */
      type:
        | "101001"
        | "101002"
        | "103000"
        | "103001"
        | "100"
        | "102"
        | "104"
        | "201"
        | "202000"
        | "204"
        | "200000"
        | "200001"
        | "202001"
        | "other";
      /**
       * 分类的值
       */
      val: number;
    }[];
    /**
     * 保单占比
     */
    amountTypeProportion?: {
      /**
       * {
       *     "重疾": "101001",
       *     "医疗": "101002",
       *     "定寿": "103000",
       *     "终寿": "103001",
       *     "意外": "100",
       *     "家财": "102",
       *     "年金": "104",
       *     "团财": "201",
       *     "雇主": "202000",
       *     "货运": "204",
       *     "团意": "200000",
       *     "建工": "200001",
       *     "产责": "202001",
       *     "其他": "other"
       * }
       */
      type:
        | "101001"
        | "101002"
        | "103000"
        | "103001"
        | "100"
        | "102"
        | "104"
        | "201"
        | "202000"
        | "204"
        | "200000"
        | "200001"
        | "202001"
        | "other";
      /**
       * 分类的值
       */
      val: number;
    }[];
  };
  group: {
    /**
     * 团险保费
     */
    premium: {
      /**
       * 保费, 单位为分
       */
      val: number;
      range: string[];
    }[];
    /**
     * 团险出单量
     */
    amount: {
      /**
       * 出单量
       */
      val: number;
      range: string[];
    }[];
    /**
     * 团险保费排名
     */
    premiumRanking: {
      /**
       * 机构名
       */
      name: string;
      val: number;
    }[];
    /**
     * 团险保单数排名
     */
    amountRanking: {
      /**
       * 机构名
       */
      name: string;
      val: number;
    }[];
    /**
     * 团险保费概况，含当前保费总和，昨日保费总和，去年同期总和，三个结合计算可得出环比，同比
     */
    premiumSummary?: {
      /**
       * 当前保费总和
       */
      this: number;
      /**
       * 前一期保费总和
       */
      previous?: number;
      /**
       * 去年同期保费总和
       */
      previousYear?: number;
    };
    /**
     * 团险保单数概况，含当前保单数总和，昨日保单数总和，去年同期总和，三个结合计算可得出环比，同比
     */
    amountSummary?: {
      /**
       * 当前保单数总和
       */
      this: number;
      /**
       * 前一期保单数总和
       */
      previous?: number;
      /**
       * 去年同期保单数总和
       */
      previousYear?: number;
    };
    /**
     * 保费占比
     */
    premiumTypeProportion?: {
      /**
       * {
       *     "重疾": "101001",
       *     "医疗": "101002",
       *     "定寿": "103000",
       *     "终寿": "103001",
       *     "意外": "100",
       *     "家财": "102",
       *     "年金": "104",
       *     "团财": "201",
       *     "雇主": "202000",
       *     "货运": "204",
       *     "团意": "200000",
       *     "建工": "200001",
       *     "产责": "202001",
       *     "其他": "other"
       * }
       */
      type:
        | "101001"
        | "101002"
        | "103000"
        | "103001"
        | "100"
        | "102"
        | "104"
        | "201"
        | "202000"
        | "204"
        | "200000"
        | "200001"
        | "202001"
        | "other";
      /**
       * 分类的值
       */
      val: number;
    }[];
    /**
     * 保单占比
     */
    amountTypeProportion?: {
      /**
       * {
       *     "重疾": "101001",
       *     "医疗": "101002",
       *     "定寿": "103000",
       *     "终寿": "103001",
       *     "意外": "100",
       *     "家财": "102",
       *     "年金": "104",
       *     "团财": "201",
       *     "雇主": "202000",
       *     "货运": "204",
       *     "团意": "200000",
       *     "建工": "200001",
       *     "产责": "202001",
       *     "其他": "other"
       * }
       */
      type:
        | "101001"
        | "101002"
        | "103000"
        | "103001"
        | "100"
        | "102"
        | "104"
        | "201"
        | "202000"
        | "204"
        | "200000"
        | "200001"
        | "202001"
        | "other";
      /**
       * 分类的值
       */
      val: number;
    }[];
  };
  /**
   * 月，周，日，年
   */
  unit?: "M" | "w" | "d" | "y";
  unitAmount?: number;
  [k: string]: any;
}

interface H5StatisticsSummaryCustomUnitGetRequest {
  /**
   * 操作者账户id
   */
  orgAccountId: string;
  /**
   * 0是起始, 1是结束
   */
  range: number[];
}

interface H5StatisticsSummaryCustomUnitGetResponse {
  individualPremium: number;
  groupPremium: number;
  registrant: number;
  visitor: number;
}

interface H5StatisticsVisitCustomUnitGetRequest {
  /**
   * 操作者账户id
   */
  orgAccountId?: string;
  /**
   * 时间段, 0-自定义, 1-今日, 2-本周, 3-本月, 4-本年
   */
  unit?: 0 | 1 | 2 | 3 | 4;
  /**
   * 0是起始, 1是结束
   */
  range?: number[];
  [k: string]: any;
}

interface H5StatisticsVisitCustomUnitGetResponse {
  /**
   * 访问量
   */
  pv: {
    classification: {
      /**
       * 访问统计
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^insurance|visiting_article|visiting_card|insurance_poster|appoint_underwrite|enterprise_risk_assess|family_risk_assess|insurance_plan$".
       */
      [k: string]: {
        val: number;
        range: string[];
      }[];
    };
    /**
     * 业务员排名
     */
    ranking: {
      /**
       * 代理人名
       */
      name: string;
      val: number;
    }[];
    /**
     * 热门访问
     */
    hotTop: {
      title: string;
      type:
        | "insurance"
        | "visiting_article"
        | "visiting_card"
        | "insurance_poster"
        | "appoint_underwrite"
        | "enterprise_risk_assess"
        | "family_risk_assess"
        | "insurance_plan";
      val: number;
    }[];
  };
  /**
   * 访客量
   */
  uv: {
    classification: {
      /**
       * 访问统计
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^insurance|visiting_article|visiting_card|insurance_poster|appoint_underwrite|enterprise_risk_assess|family_risk_assess|insurance_plan$".
       */
      [k: string]: {
        val: number;
        range: string[];
      }[];
    };
    /**
     * 业务员排名
     */
    ranking: {
      /**
       * 代理人名
       */
      name: string;
      val: number;
    }[];
    /**
     * 热门访问
     */
    hotTop: {
      title: string;
      type:
        | "insurance"
        | "visiting_article"
        | "visiting_card"
        | "insurance_poster"
        | "appoint_underwrite"
        | "enterprise_risk_assess"
        | "family_risk_assess"
        | "insurance_plan";
      val: number;
    }[];
  };
  /**
   * 月，周，日，年
   */
  unit: "M" | "w" | "d" | "y";
  unitAmount: number;
}

