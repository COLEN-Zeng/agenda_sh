// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

type H5AccountInfoGetRequest = string;

type H5AccountInfoGetResponse = null | {
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

interface H5AccountLoginRequest {
  userName?: string;
  type?: 1 | 2;
  password?: string;
  [k: string]: any;
}

interface H5AccountLoginResponse {
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

interface H5AccountPasswordResetRequest {
  userName: string;
  password: string;
  [k: string]: any;
}

interface H5AccountPasswordResetResponse {
  ret: 0 | 5 | 3 | 7;
  [k: string]: any;
}

interface H5AccountRegisterRequest {
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

interface H5AccountRegisterResponse {
  ret?: number;
  userName?: string;
  coreAccountId?: string;
  /**
   * uuid
   */
  userId?: string;
  type?: 1 | 2;
  /**
   * 时间戳，精确到秒,最大只能到9999-12-12 23:59:59
   */
  createdAt?: number;
  [k: string]: any;
}

interface H5AccountSearchBySpecificIdRequest {
  specificId: string;
  /**
   * 1 则表示 specificId 是 coreAccountId, 2 则表示 specificId 是 userId
   */
  type: 1 | 2;
  [k: string]: any;
}

interface H5AccountSearchBySpecificIdResponse {
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

interface H5AccountSuperiorChangeRequest {
  /**
   * 手机号
   */
  userName: string;
  superiorId: string;
  [k: string]: any;
}

interface H5AccountSuperiorChangeResponse {
  oldId: string;
  newId: string;
  [k: string]: any;
}

interface H5AccountUserNameResetRequest {
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

interface H5AccountUserNameResetResponse {
  ret: 0 | 2 | 3;
}

