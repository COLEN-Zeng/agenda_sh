
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {GuestArticleInfoDuplicateRequest} request
    * @returns {GuestArticleInfoDuplicateResponse}
    */
    infoDuplicate: function (request = null, timeout = 10) {
        return client.call('info.duplicate', request, timeout);
    },

    /**
    * @param {GuestArticleInfoGetRequest} request
    * @returns {GuestArticleInfoGetResponse}
    */
    infoGet: function (request = null, timeout = 10) {
        return client.call('info.get', request, timeout);
    },

    /**
    * @param {GuestArticleInfoListRequest} request
    * @returns {GuestArticleInfoListResponse}
    */
    infoList: function (request = null, timeout = 10) {
        return client.call('info.list', request, timeout);
    },

    /**
    * @param {GuestArticleInfoSetRequest} request
    * @returns {GuestArticleInfoSetResponse}
    */
    infoSet: function (request = null, timeout = 10) {
        return client.call('info.set', request, timeout);
    },

    /**
    * @param {GuestArticleInfoUploadRequest} request
    * @returns {GuestArticleInfoUploadResponse}
    */
    infoUpload: function (request = null, timeout = 10) {
        return client.call('info.upload', request, timeout);
    },

    /**
    * @param {GuestArticleReadingVolumeAddRequest} request
    * @returns {GuestArticleReadingVolumeAddResponse}
    */
    readingVolumeAdd: function (request = null, timeout = 10) {
        return client.call('reading_volume.add', request, timeout);
    },

    /**
    * @param {GuestArticleUserLibraryGetRequest} request
    * @returns {GuestArticleUserLibraryGetResponse}
    */
    userLibraryGet: function (request = null, timeout = 10) {
        return client.call('user_library.get', request, timeout);
    },

    /**
    * @param {GuestArticleUserLibraryListRequest} request
    * @returns {GuestArticleUserLibraryListResponse}
    */
    userLibraryList: function (request = null, timeout = 10) {
        return client.call('user_library.list', request, timeout);
    },

    /**
    * @param {GuestArticleUserLibrarySetRequest} request
    * @returns {GuestArticleUserLibrarySetResponse}
    */
    userLibrarySet: function (request = null, timeout = 10) {
        return client.call('user_library.set', request, timeout);
    },

    Model: require('./model')(client)
});
