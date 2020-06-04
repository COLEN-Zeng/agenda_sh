// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5PermissionOrgPermission {
  /**
   * userId
   */
  id: string;
  featurePermission: number[];
}

interface H5PermissionOrgRole {
  /**
   * 组织id
   */
  id: string;
  roles: {
    /**
     * 角色名称
     */
    name: string;
    /**
     * 角色描述信息
     */
    description?: string;
    featurePermission: (
      | -1
      | 1
      | 101
      | 100
      | 0
      | 200
      | 201
      | 300
      | 301
      | 302
      | 303
      | 304
      | 400
      | 401
      | 402
      | 500
      | 501
      | 502
      | 503
      | 600
      | 601
      | 602
      | 603
      | 700
      | 800
      | 900
      | 1000
      | 1100
      | 1101
      | 1102
    )[];
    dataPermission: 0 | 1 | 2 | 3;
    [k: string]: any;
  }[];
}

interface H5PermissionPersonnelRole {
  /**
   * userId
   */
  id: string;
  /**
   * 用户coreID
   */
  coreAccountId: string;
  roles: string[];
  /**
   * 保险公司id
   */
  companyId?: string;
  [k: string]: any;
}

