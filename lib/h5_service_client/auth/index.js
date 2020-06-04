
// 本文件由toolchain/code_generator/h5_service_client/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {H5AuthSessionDelRequest} request
    * @returns {Promise<H5AuthSessionDelResponse>}
    */
    sessionDel: function (request = null, timeout = 10) {
        return client.call('session.del', request, timeout);
    },

    /**
    * @param {H5AuthSessionGetRequest} request
    * @returns {Promise<H5AuthSessionGetResponse>}
    */
    sessionGet: function (request = null, timeout = 10) {
        return client.call('session.get', request, timeout);
    },

    /**
    * @param {H5AuthSessionSetRequest} request
    * @returns {Promise<H5AuthSessionSetResponse>}
    */
    sessionSet: function (request = null, timeout = 10) {
        return client.call('session.set', request, timeout);
    },

    /**
    * @param {H5AuthTokenGenerateRequest} request
    * @returns {Promise<H5AuthTokenGenerateResponse>}
    */
    tokenGenerate: function (request = null, timeout = 10) {
        return client.call('token.generate', request, timeout);
    },

    /**
    * @param {H5AuthTokenPermissionAddRequest} request
    * @returns {Promise<H5AuthTokenPermissionAddResponse>}
    */
    tokenPermissionAdd: function (request = null, timeout = 10) {
        return client.call('token_permission.add', request, timeout);
    },

    /**
    * @param {H5AuthTokenPermissionGetRequest} request
    * @returns {Promise<H5AuthTokenPermissionGetResponse>}
    */
    tokenPermissionGet: function (request = null, timeout = 10) {
        return client.call('token_permission.get', request, timeout);
    },

    Model: require('./model')(client)
});
