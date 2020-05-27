// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

interface PermissionOrgRoleAddRequest {
  /**
   * 机构id
   */
  orgId: string;
  role: {
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
  };
}

interface PermissionOrgRoleAddResponse {
  /**
   * 操作结果，0-成功，1-已存在同名数据
   */
  state: 0 | 1;
}

interface PermissionOrgRoleDeleteRequest {
  /**
   * 机构id
   */
  orgId: string;
  /**
   * 角色名称
   */
  roleName: string;
}

interface PermissionOrgRoleDeleteResponse {
  /**
   * 操作结果，0-成功，1-有用户拥有此角色故无法删除，2-无此名称的角色
   */
  state: 0 | 1 | 2;
}

interface PermissionOrgRoleGetRequest {
  /**
   * 机构id
   */
  orgId: string;
}

type PermissionOrgRoleGetResponse = {
  /**
   * 角色名称
   */
  name: string;
  /**
   * 角色描述信息
   */
  description: string;
  featurePermission: (-1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21)[];
  dataPermission: 0 | 1 | 2 | 3;
  /**
   * 是否可更改
   */
  modifiable: boolean;
}[];

interface PermissionOrgRoleUpdateRequest {
  /**
   * 机构id
   */
  orgId: string;
  role: {
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
  };
}

interface PermissionOrgRoleUpdateResponse {
  /**
   * 操作结果，0-成功，2-未发现此名称的角色
   */
  state: 0 | 2;
}

interface PermissionPermissionGetRequest {
  /**
   * userId
   */
  userId: string;
  accountType: 1 | 2;
}

interface PermissionPermissionGetResponse {
  featurePermission: (-1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21)[];
  dataPermission: 0 | 1 | 2 | 3;
  /**
   * 保险公司id
   */
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
    | "guo_shou_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an";
  [k: string]: any;
}

interface PermissionUserRoleAddRequest {
  /**
   * 用户id
   */
  userId: string;
  /**
   * 用户coreId
   */
  coreAccountId: string;
  roleNames: string[];
  /**
   * 保险公司id
   */
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
    | "guo_shou_ren_shou"
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an";
  [k: string]: any;
}

interface PermissionUserRoleAddResponse {
  /**
   * 操作结果，0-成功，1-已存在同名数据，2-机构中不包含此角色
   */
  state: 0 | 1 | 2;
}

/**
 * 人员ID
 */
type PermissionUserRoleClearRequest = string;

type PermissionUserRoleClearResponse = null;

interface PermissionUserRoleDeleteRequest {
  /**
   * 用户id
   */
  userId: string;
  /**
   * 需要删除的角色名称
   */
  roleName: string;
}

interface PermissionUserRoleDeleteResponse {
  /**
   * 操作结果，0-成功，2-未发现此名称的角色
   */
  state: 0 | 2;
}

interface PermissionUserRoleGetRequest {
  /**
   * 用户id
   */
  userId: string;
}

type PermissionUserRoleGetResponse = string[];

interface PermissionUserRoleUpdateRequest {
  /**
   * 用户id
   */
  id: string;
  /**
   * 需要更新的角色
   */
  roleNames?: string[];
  companyId?: string;
  [k: string]: any;
}

type PermissionUserRoleUpdateResponse = null;

