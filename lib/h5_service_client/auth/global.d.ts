// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

interface AuthSessionDelRequest {
  /**
   * userId
   */
  userId: string;
  /**
   * {"ALL":0,"MOBILE":1,"MANAGEMENT":2}
   */
  type: 0 | 1 | 2;
}

type AuthSessionDelResponse = null;

/**
 * sessionId
 */
type AuthSessionGetRequest = string;

type AuthSessionGetResponse = null | {
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
   * 时间戳，精确到秒
   */
  createdAt: number;
  lastLoginTime?: null | number;
  [k: string]: any;
};

interface AuthSessionSetRequest {
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
   * 时间戳，精确到秒
   */
  createdAt: number;
  lastLoginTime?: null | number;
  [k: string]: any;
}

type AuthSessionSetResponse = null;

interface AuthTokenGenerateRequest {
  /**
   * 人员ID
   */
  userId: string;
  [k: string]: any;
}

interface AuthTokenGenerateResponse {
  /**
   * 可用token
   */
  token: string;
}

interface AuthTokenPermissionAddRequest {
  /**
   * 可用token
   */
  token: string;
  [k: string]: any;
}

interface AuthTokenPermissionAddResponse {
  /**
   * 0-成功,1-过期
   */
  state: 0 | 1;
}

interface AuthTokenPermissionGetRequest {
  /**
   * 可用token
   */
  token?: string;
  [k: string]: any;
}

interface AuthTokenPermissionGetResponse {
  /**
   * 0-成功,1-过期
   */
  state: 0 | 1;
  [k: string]: any;
}

