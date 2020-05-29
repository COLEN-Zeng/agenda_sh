// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/service_orm/build自动生成,请勿手动修改

interface PermissionOrgRole {
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
      | 0
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 9
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21)[];
    dataPermission: 0 | 1 | 2 | 3;
    [k: string]: any;
  }[];
}

interface PermissionPersonnelRole {
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

