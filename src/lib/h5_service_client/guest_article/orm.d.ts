// 本文件为ORM数据结构定义
// 本文件由toolchain/code_generator/h5_service_client/build自动生成,请勿手动修改

interface H5GuestArticleArticleExponent {
  /**
   * id
   */
  id: string;
  /**
   * 阅读量
   */
  readingVolume: number;
  /**
   * 状态: 0: 待上传, 1: 已上传, 2: 已发布, 3: 已下架
   */
  status?: number;
  /**
   * 文章分类
   */
  type?: number[];
  /**
   * 分享的用户id
   */
  shareUserIdList: string[];
  /**
   * 收藏的用户id
   */
  collectUserIdList: string[];
  /**
   * 发布时间
   */
  releaseAt?: number;
  /**
   * 上传者的userId
   */
  userId: string;
  [k: string]: any;
}

interface H5GuestArticleInfo {
  /**
   * id
   */
  id: string;
  /**
   * userId
   */
  userId: string;
  /**
   * 上传人名字
   */
  userName?: string;
  /**
   * 上传人手机号
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
     * 链接的 md5
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

interface H5GuestArticlePush {
  /**
   * id
   */
  id?: string;
  /**
   * 机构id
   */
  orgAccountId?: string;
  /**
   * 推送任务名称
   */
  name?: string;
  /**
   * 状态: 0: 待推送, 1: 已推送
   */
  status?: 0 | 1;
  /**
   * 推送文章
   */
  articleList?: {
    /**
     * id
     */
    id?: string;
    /**
     * 上传人名字
     */
    userName?: string;
    /**
     * 上传人手机号
     */
    userMobile?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 文章分类
     */
    type?: number[];
    /**
     * 是否置顶
     */
    isTop?: boolean;
    /**
     * 是否推荐
     */
    isSuggestion?: boolean;
    /**
     * 发布时间
     */
    releaseAt?: number;
    /**
     * 创建时间
     */
    createdAt?: number;
    [k: string]: any;
  }[];
  /**
   * 创建时间
   */
  createdAt?: number;
  /**
   * 推送时间
   */
  pushedAt?: number;
  /**
   * 修改时间
   */
  modifiedAt?: number;
  /**
   * 推送信息文案
   */
  messageData?: {
    first?: {
      value: string;
    };
    keyword1?: {
      value: string;
    };
    keyword2?: {
      value: string;
    };
    remark?: {
      value: string;
    };
    [k: string]: any;
  };
  [k: string]: any;
}

interface H5GuestArticleArticleReadingRecord {
  /**
   * 文章id, articleId
   */
  subject: string;
  /**
   * 阅读记录id, readingRecordId
   */
  object: string;
  openId?: string;
  /**
   * 阅读时间, 单位毫秒
   */
  readingTime?: number;
  /**
   * 阅读进度
   */
  readingProgress?: number;
  createdAt: number;
  [k: string]: any;
}

interface H5GuestArticleUserLibrary {
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
}

