// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5AuthSessionDelRequest {
  /**
   * userId
   */
  userId: string;
  /**
   * {"ALL":0,"MOBILE":1,"MANAGEMENT":2}
   */
  type: 0 | 1 | 2;
}

type H5AuthSessionDelResponse = null;

/**
 * sessionId
 */
type H5AuthSessionGetRequest = string;

type H5AuthSessionGetResponse = null | {
  /**
   * sessionId
   */
  id: string;
  /**
   * 1-移动端，2-管理端
   */
  from: 1 | 2;
  userName: string;
  coreAccountId: string;
  /**
   * userId
   */
  userId: string;
  type: 1 | 2;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  lastLoginTime?: null | number;
  [k: string]: any;
};

interface H5AuthSessionSetRequest {
  /**
   * sessionId
   */
  id: string;
  /**
   * 1-移动端，2-管理端
   */
  from: 1 | 2;
  userName: string;
  coreAccountId: string;
  /**
   * userId
   */
  userId: string;
  type: 1 | 2;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt: number;
  lastLoginTime?: null | number;
  [k: string]: any;
}

type H5AuthSessionSetResponse = null;

interface H5AuthTokenGenerateRequest {
  /**
   * 人员ID
   */
  userId: string;
  [k: string]: any;
}

interface H5AuthTokenGenerateResponse {
  /**
   * 可用token
   */
  token: string;
}

interface H5AuthTokenPermissionAddRequest {
  /**
   * 可用token
   */
  token: string;
  [k: string]: any;
}

interface H5AuthTokenPermissionAddResponse {
  /**
   * 0-成功,1-过期
   */
  state: 0 | 1;
}

interface H5AuthTokenPermissionGetRequest {
  /**
   * 可用token
   */
  token?: string;
  [k: string]: any;
}

interface H5AuthTokenPermissionGetResponse {
  /**
   * 0-成功,1-过期
   */
  state: 0 | 1;
  [k: string]: any;
}

