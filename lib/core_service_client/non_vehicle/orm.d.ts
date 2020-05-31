// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

/**
 * 存储险种投保中需要全局控制的变量
 */
interface NonVehicleKeyCache {
  id?: string;
  value?: {
    [k: string]: any;
  };
}

interface NonVehicleNegotiation {
  id: string;
  insuranceId: string;
  insuranceType: string;
  quotationId: string;
  quoteId: string;
  traceId?: string;
  companyId: string;
  accountId: string;
  extraData: {
    [k: string]: any;
  };
  createdAt: number;
  modifiedAt: number;
  /**
   * 0:待处理 1:已处理
   */
  status: 0 | 1;
}

interface NonVehicleQuotation {
  id: string;
  accountId: string;
  entranceId: string;
  /**
   * 流程id
   */
  frontendProcessId: string;
  traceId?: string;
  from: number;
  quoteList: {
    id?: string;
    insuranceId?: string;
    companyId?: string;
    status?: number;
    plan?: {
      [k: string]: any;
    };
    /**
     * 总保费
     */
    premium?: number;
    /**
     * 首期保费
     */
    firstPremium?: number;
    /**
     * 保险公司给机构的佣金比例
     */
    commissionRate?: number;
    /**
     * 报价详情，可存储报价结果相关东西
     */
    quoteDetail?: {
      [k: string]: any;
    };
    /**
     * 生效时间
     */
    effectedAt?: number;
    /**
     * 到期时间
     */
    expiredAt?: number;
    /**
     * 错误信息
     */
    errorMessage?: string;
    /**
     * 更新时间
     */
    modifiedAt?: number;
    /**
     * 保障期限
     */
    period?: number;
    /**
     * 保障期限单位
     */
    periodUnit?: string;
    /**
     * 缴费期限
     */
    payPeriod?: number;
    /**
     * 缴费期限单位
     */
    payPeriodUnit?: string;
    [k: string]: any;
  }[];
  extraData: {
    [k: string]: any;
  };
  createdAt: number;
  modifiedAt: number;
  /**
   * 想要进行报价的insuranceId
   */
  targetInsuranceId?: string;
  /**
   * 想要进行报价的insuranceIds
   */
  targetInsuranceIds?: string[];
}

/**
 * 用来展示的假的销售数据
 */
interface NonVehicleSalesVolume {
  /**
   * 险种id
   */
  id?: string;
  /**
   * 销售量
   */
  sales?: number;
}

interface NonVehicleTrace {
  id?: string;
  records?: {
    name: string;
    description: string;
    createdAt: number;
  }[];
  [k: string]: any;
}

