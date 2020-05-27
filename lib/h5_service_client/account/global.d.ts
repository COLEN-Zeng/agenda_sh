// 本文件由toolchain/code_generator/service/build自动生成,请勿手动修改

type AccountInfoGetRequest = string;

type AccountInfoGetResponse = null | {
  userName: string;
  coreAccountId: string;
  /**
   * uuid
   */
  userId: string;
  type: 1 | 2;
  /**
   * 创建时间
   */
  createdAt: number;
  [k: string]: any;
};

interface AccountLoginRequest {
  userName?: string;
  type?: 1 | 2;
  password?: string;
  [k: string]: any;
}

interface AccountLoginResponse {
  ret?: 0 | 3 | 5 | 6;
  userName?: string;
  coreAccountId?: string;
  userId?: string;
  /**
   * {"ORGANIZATION":1,"PERSONNEL":2}
   */
  type?: 1 | 2;
  [k: string]: any;
}

interface AccountPasswordResetRequest {
  userName: string;
  password: string;
  [k: string]: any;
}

interface AccountPasswordResetResponse {
  ret: 0 | 5 | 3 | 7;
  [k: string]: any;
}

interface AccountRegisterRequest {
  /**
   * 注册的类型: {"ORGANIZATION":1,"PERSONNEL":2}
   */
  type?: 1 | 2;
  /**
   * 手机号
   */
  mobile?: string;
  password?: string;
  superiorId?: string;
  [k: string]: any;
}

interface AccountRegisterResponse {
  ret?: number;
  userName?: string;
  coreAccountId?: string;
  /**
   * uuid
   */
  userId?: string;
  type?: 1 | 2;
  [k: string]: any;
}

interface AccountSearchBySpecificIdRequest {
  specificId: string;
  /**
   * 1 则表示 specificId 是 coreAccountId, 2 则表示 specificId 是 userId
   */
  type: 1 | 2;
  [k: string]: any;
}

interface AccountSearchBySpecificIdResponse {
  userName: string;
  coreAccountId: string;
  userId: string;
  type: 1 | 2;
  /**
   * 创建时间
   */
  createdAt: number;
  [k: string]: any;
}

interface AccountSuperiorChangeRequest {
  /**
   * 手机号
   */
  userName: string;
  superiorId: string;
  [k: string]: any;
}

interface AccountSuperiorChangeResponse {
  oldId: string;
  newId: string;
  [k: string]: any;
}

interface AccountUserNameResetRequest {
  theOld: {
    /**
     * 手机号
     */
    userName: string;
  };
  theNew: {
    /**
     * 手机号
     */
    userName: string;
  };
}

interface AccountUserNameResetResponse {
  ret: 0 | 2 | 3;
}

