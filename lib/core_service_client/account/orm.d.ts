// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/fun自动生成,请勿手动修改

interface CoreAccountInfo {
  id: string;
  type: 1 | 2;
}

interface CoreAccountJobRank {
  id: string;
  jobRank: string;
  previous?: {
    JobRank?: string;
    [k: string]: any;
  };
  /**
   * 当前职级起始时间
   */
  presentJobRankStartAt?: number;
  /**
   * 入司时间
   */
  joinAt?: number;
  /**
   * 总监团队
   */
  directorTeam?: {
    /**
     * 代码
     */
    no?: string;
    /**
     * 名称
     */
    name?: string;
    [k: string]: any;
  };
  /**
   * 合伙人团队代码
   */
  partnerTeam?: {
    /**
     * 代码
     */
    no?: string;
    /**
     * 名称
     */
    name?: string;
    [k: string]: any;
  };
  /**
   * 是否离职
   */
  resign: boolean;
  /**
   * 离司时间
   */
  resignAt?: number;
  coreAccountId?: string;
  [k: string]: any;
}

interface CoreAccountNext {
  id: string;
  /**
   * 下一个下级的ID
   */
  val: string;
}

interface CoreAccountPersonnelInfo {
  /**
   * id
   */
  id: string;
  /**
   * 核心ID
   */
  coreAccountId: string;
  superiorOrg: {
    /**
     * 上级机构userId
     */
    userId: string;
    /**
     * 上级机构AccountId
     */
    coreAccountId: string;
  };
  [k: string]: any;
}

