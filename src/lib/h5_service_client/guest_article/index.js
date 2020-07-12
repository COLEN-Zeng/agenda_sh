
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * 根据链接来判断文章是否已存在
    *
    * 若存在, 则返回文章, 否则返回 null
    * @param {H5GuestArticleInfoDuplicateRequest} request
    * @returns {Promise<H5GuestArticleInfoDuplicateResponse>}
    */
    infoDuplicate: function (request = null, timeout = 10) {
        return client.call('info.duplicate', request, timeout);
    },

    /**
    * 获取文章信息
    * @param {H5GuestArticleInfoGetRequest} request
    * @returns {Promise<H5GuestArticleInfoGetResponse>}
    */
    infoGet: function (request = null, timeout = 10) {
        return client.call('info.get', request, timeout);
    },

    /**
    * 获取文章列表
    * @param {H5GuestArticleInfoListRequest} request
    * @returns {Promise<H5GuestArticleInfoListResponse>}
    */
    infoList: function (request = null, timeout = 10) {
        return client.call('info.list', request, timeout);
    },

    /**
    * 添加文章
    * @param {H5GuestArticleInfoSetRequest} request
    * @returns {Promise<H5GuestArticleInfoSetResponse>}
    */
    infoSet: function (request = null, timeout = 10) {
        return client.call('info.set', request, timeout);
    },

    /**
    * 上传文章
    * @param {H5GuestArticleInfoUploadRequest} request
    * @returns {Promise<H5GuestArticleInfoUploadResponse>}
    */
    infoUpload: function (request = null, timeout = 10) {
        return client.call('info.upload', request, timeout);
    },

    /**
    * 添加文章阅读量
    * @param {H5GuestArticleReadingVolumeAddRequest} request
    * @returns {Promise<H5GuestArticleReadingVolumeAddResponse>}
    */
    readingVolumeAdd: function (request = null, timeout = 10) {
        return client.call('reading_volume.add', request, timeout);
    },

    /**
    * @param {H5GuestArticleUserLibraryGetRequest} request
    * @returns {Promise<H5GuestArticleUserLibraryGetResponse>}
    */
    userLibraryGet: function (request = null, timeout = 10) {
        return client.call('user_library.get', request, timeout);
    },

    /**
    * 我的文库
    * @param {H5GuestArticleUserLibraryListRequest} request
    * @returns {Promise<H5GuestArticleUserLibraryListResponse>}
    */
    userLibraryList: function (request = null, timeout = 10) {
        return client.call('user_library.list', request, timeout);
    },

    /**
    * 添加文章关联
    *
    * 可通过用户id和文章id
    * @param {H5GuestArticleUserLibrarySetRequest} request
    * @returns {Promise<H5GuestArticleUserLibrarySetResponse>}
    */
    userLibrarySet: function (request = null, timeout = 10) {
        return client.call('user_library.set', request, timeout);
    },

    Model: require('./model')(client)
});
