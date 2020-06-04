// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

/**
 * 原文链接
 */
type H5GuestArticleInfoDuplicateRequest = string;

type H5GuestArticleInfoDuplicateResponse = null | {
  /**
   * id
   */
  id: string;
  /**
   * userId
   */
  userId: string;
  /**
   * 上传用户名字
   */
  userName?: string;
  /**
   * 上传用户手机号
   */
  userMobile?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 状态: 0: 待上传, 1: 已上传, 2: 已发布, 3: 已下架
   */
  status: number;
  /**
   * 图片
   */
  imageUrl?: string;
  /**
   * 文章分类
   */
  type?: number[];
  /**
   * 原文信息
   */
  original?: {
    /**
     * 原文阅读量
     */
    readingVolume?: number;
    /**
     * 链接
     */
    link?: string;
    /**
     * 链接 md5
     */
    linkMd5?: string;
    [k: string]: any;
  };
  /**
   * 文章内容
   */
  content?: string;
  /**
   * 是否原创
   */
  isOriginal?: boolean;
  /**
   * 是否置顶
   */
  isTop?: boolean;
  /**
   * 是否推荐
   */
  isSuggestion?: boolean;
  /**
   * 阅读量,该字段在exponent表中获取
   */
  readingVolume?: number;
  /**
   * 发布时间
   */
  releaseAt?: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 修改时间
   */
  modifiedAt?: number;
  /**
   * 标签
   */
  tags?: ("isTop" | "isSuggestion")[];
  /**
   * 文章的来源平台
   */
  fetchAdaptor?: string;
  [k: string]: any;
};

/**
 * 文章id
 */
type H5GuestArticleInfoGetRequest = string;

interface H5GuestArticleInfoGetResponse {
  /**
   * id
   */
  id: string;
  /**
   * userId
   */
  userId: string;
  /**
   * 上传用户名字
   */
  userName?: string;
  /**
   * 上传用户手机号
   */
  userMobile?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 状态: 0: 待上传, 1: 已上传, 2: 已发布, 3: 已下架
   */
  status: number;
  /**
   * 图片
   */
  imageUrl?: string;
  /**
   * 文章分类
   */
  type?: number[];
  /**
   * 原文信息
   */
  original?: {
    /**
     * 原文阅读量
     */
    readingVolume?: number;
    /**
     * 链接
     */
    link?: string;
    /**
     * 链接 md5
     */
    linkMd5?: string;
    [k: string]: any;
  };
  /**
   * 文章内容
   */
  content?: string;
  /**
   * 是否原创
   */
  isOriginal?: boolean;
  /**
   * 是否置顶
   */
  isTop?: boolean;
  /**
   * 是否推荐
   */
  isSuggestion?: boolean;
  /**
   * 阅读量,该字段在exponent表中获取
   */
  readingVolume?: number;
  /**
   * 发布时间
   */
  releaseAt?: number;
  /**
   * 创建时间
   */
  createdAt: number;
  /**
   * 修改时间
   */
  modifiedAt?: number;
  /**
   * 标签
   */
  tags?: ("isTop" | "isSuggestion")[];
  /**
   * 文章的来源平台
   */
  fetchAdaptor?: string;
  [k: string]: any;
}

interface H5GuestArticleInfoListRequest {
  /**
   * 标题
   */
  title?: string;
  /**
   * 上传用户id
   */
  userId?: string;
  status?: number[];
  /**
   * 排序类型,0: 最新 1: 最热 2: 推荐
   */
  sort?: number;
  /**
   * 文章分类
   */
  type?: number[];
  /**
   * 文章链接
   */
  originalLink?: string;
  /**
   * 是否置顶
   */
  isTop?: boolean;
  /**
   * 是否推荐
   */
  isSuggestion?: boolean;
  /**
   * 上传时间区间
   */
  uploadTime?: number[];
  /**
   * 发布时间区间
   */
  releaseTime?: number[];
  page: number;
  pageSize: number;
  [k: string]: any;
}

interface H5GuestArticleInfoListResponse {
  data?: {
    /**
     * id
     */
    id: string;
    /**
     * userId
     */
    userId: string;
    /**
     * 上传用户名字
     */
    userName?: string;
    /**
     * 上传用户手机号
     */
    userMobile?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 状态: 0: 待上传, 1: 已上传, 2: 已发布, 3: 已下架
     */
    status: number;
    /**
     * 图片
     */
    imageUrl?: string;
    /**
     * 文章分类
     */
    type?: number[];
    /**
     * 原文信息
     */
    original?: {
      /**
       * 原文阅读量
       */
      readingVolume?: number;
      /**
       * 链接
       */
      link?: string;
      /**
       * 链接 md5
       */
      linkMd5?: string;
      [k: string]: any;
    };
    /**
     * 文章内容
     */
    content?: string;
    /**
     * 是否原创
     */
    isOriginal?: boolean;
    /**
     * 是否置顶
     */
    isTop?: boolean;
    /**
     * 是否推荐
     */
    isSuggestion?: boolean;
    /**
     * 阅读量,该字段在exponent表中获取
     */
    readingVolume?: number;
    /**
     * 发布时间
     */
    releaseAt?: number;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 修改时间
     */
    modifiedAt?: number;
    /**
     * 标签
     */
    tags?: ("isTop" | "isSuggestion")[];
    /**
     * 文章的来源平台
     */
    fetchAdaptor?: string;
    [k: string]: any;
  }[];
  totalCount?: number;
  [k: string]: any;
}

interface H5GuestArticleInfoSetRequest {
  [k: string]: any;
}

/**
 * 文章id
 */
type H5GuestArticleInfoSetResponse = string;

interface H5GuestArticleInfoUploadRequest {
  /**
   * id
   */
  id?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 文章内容
   */
  content?: string;
  /**
   * 发布时间
   */
  releaseAt?: number;
  [k: string]: any;
}

type H5GuestArticleInfoUploadResponse = null;

/**
 * 文章id
 */
type H5GuestArticleReadingVolumeAddRequest = string;

type H5GuestArticleReadingVolumeAddResponse = null;

interface H5GuestArticleUserLibraryGetRequest {
  /**
   * 人员ID
   */
  userId?: string;
  /**
   * 文章id
   */
  articleId?: string;
  [k: string]: any;
}

type H5GuestArticleUserLibraryGetResponse = null | {
  /**
   * 用户id
   */
  subject: string;
  /**
   * 文章id
   */
  object: string;
  /**
   * 用户上传
   */
  isUpload?: boolean;
  /**
   * 转发
   */
  isShare?: boolean;
  /**
   * 收藏
   */
  isCollect?: boolean;
  createdAt: number;
  modifiedAt?: number;
  [k: string]: any;
};

interface H5GuestArticleUserLibraryListRequest {
  /**
   * 人员ID
   */
  userId?: string;
  /**
   * 排序类型,0: 最新 1: 最热 2: 推荐
   */
  sort?: number;
  /**
   * 用户上传
   */
  isUpload?: boolean;
  /**
   * 转发
   */
  isShare?: boolean;
  /**
   * 收藏
   */
  isCollect?: boolean;
  pageSize: number;
  page: number;
  [k: string]: any;
}

interface H5GuestArticleUserLibraryListResponse {
  data: {
    /**
     * id
     */
    id: string;
    /**
     * userId
     */
    userId: string;
    /**
     * 上传用户名字
     */
    userName?: string;
    /**
     * 上传用户手机号
     */
    userMobile?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 状态: 0: 待上传, 1: 已上传, 2: 已发布, 3: 已下架
     */
    status: number;
    /**
     * 图片
     */
    imageUrl?: string;
    /**
     * 文章分类
     */
    type?: number[];
    /**
     * 原文信息
     */
    original?: {
      /**
       * 原文阅读量
       */
      readingVolume?: number;
      /**
       * 链接
       */
      link?: string;
      /**
       * 链接 md5
       */
      linkMd5?: string;
      [k: string]: any;
    };
    /**
     * 文章内容
     */
    content?: string;
    /**
     * 是否原创
     */
    isOriginal?: boolean;
    /**
     * 是否置顶
     */
    isTop?: boolean;
    /**
     * 是否推荐
     */
    isSuggestion?: boolean;
    /**
     * 阅读量,该字段在exponent表中获取
     */
    readingVolume?: number;
    /**
     * 发布时间
     */
    releaseAt?: number;
    /**
     * 创建时间
     */
    createdAt: number;
    /**
     * 修改时间
     */
    modifiedAt?: number;
    /**
     * 标签
     */
    tags?: ("isTop" | "isSuggestion")[];
    /**
     * 文章的来源平台
     */
    fetchAdaptor?: string;
    [k: string]: any;
  }[];
  totalCount: number;
  count: {
    upload?: number;
    share?: number;
    collect?: number;
    [k: string]: any;
  };
}

interface H5GuestArticleUserLibrarySetRequest {
  /**
   * 人员ID
   */
  userId?: string;
  /**
   * 文章id
   */
  articleId?: string;
  /**
   * 用户上传
   */
  isUpload?: boolean;
  /**
   * 转发
   */
  isShare?: boolean;
  /**
   * 收藏
   */
  isCollect?: boolean;
  [k: string]: any;
}

type H5GuestArticleUserLibrarySetResponse = null;

