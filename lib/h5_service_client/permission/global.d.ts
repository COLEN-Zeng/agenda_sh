// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

/**
 * 机构ID
 */
type H5PermissionOrgDefaultPerAddRequest = string;

type H5PermissionOrgDefaultPerAddResponse = null;

interface H5PermissionOrgPermissionUpdateRequest {
  /**
   * userId
   */
  orgId: string;
  permission: number[];
}

type H5PermissionOrgPermissionUpdateResponse = null;

interface H5PermissionOrgRoleAddRequest {
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
  };
}

interface H5PermissionOrgRoleAddResponse {
  /**
   * 操作结果，0-成功，1-已存在同名数据
   */
  state: 0 | 1;
}

interface H5PermissionOrgRoleDeleteRequest {
  /**
   * 机构id
   */
  orgId: string;
  /**
   * 角色名称
   */
  roleName: string;
}

interface H5PermissionOrgRoleDeleteResponse {
  /**
   * 操作结果，0-成功，1-有用户拥有此角色故无法删除，2-无此名称的角色
   */
  state: 0 | 1 | 2;
}

interface H5PermissionOrgRoleGetRequest {
  /**
   * 机构id
   */
  orgId: string;
}

type H5PermissionOrgRoleGetResponse = {
  /**
   * 角色名称
   */
  name: string;
  /**
   * 角色描述信息
   */
  description: string;
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
  /**
   * 是否可更改
   */
  modifiable: boolean;
}[];

interface H5PermissionOrgRoleUpdateRequest {
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
  };
}

interface H5PermissionOrgRoleUpdateResponse {
  /**
   * 操作结果，0-成功，2-未发现此名称的角色
   */
  state: 0 | 2;
}

interface H5PermissionPermissionGetRequest {
  /**
   * userId
   */
  userId: string;
  accountType: 1 | 2;
}

interface H5PermissionPermissionGetResponse {
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
    | "ping_an_property"
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
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  [k: string]: any;
}

interface H5PermissionUserRoleAddRequest {
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
    | "ping_an_property"
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
    | "tai_kang_yang_lao"
    | "hai_bao_ren_shou"
    | "zhong_an"
    | "ping_an_an_hui"
    | "zhong_lu"
    | "zhong_guo_ren_shou"
    | "an_sheng"
    | "cic_property"
    | "zhong_yi_ren_shou"
    | "an_da";
  [k: string]: any;
}

interface H5PermissionUserRoleAddResponse {
  /**
   * 操作结果，0-成功，1-已存在同名数据，2-机构中不包含此角色
   */
  state: 0 | 1 | 2;
}

/**
 * 人员ID
 */
type H5PermissionUserRoleClearRequest = string;

type H5PermissionUserRoleClearResponse = null;

interface H5PermissionUserRoleDeleteRequest {
  /**
   * 用户id
   */
  userId: string;
  /**
   * 需要删除的角色名称
   */
  roleName: string;
}

interface H5PermissionUserRoleDeleteResponse {
  /**
   * 操作结果，0-成功，2-未发现此名称的角色
   */
  state: 0 | 2;
}

interface H5PermissionUserRoleGetRequest {
  /**
   * 用户id
   */
  userId: string;
}

type H5PermissionUserRoleGetResponse = string[];

interface H5PermissionUserRoleUpdateRequest {
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

type H5PermissionUserRoleUpdateResponse = null;

