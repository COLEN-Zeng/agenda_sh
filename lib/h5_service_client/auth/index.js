
// 本文件由toolchain/code_generator/service/build脚本自动生成
/// <reference path = "global.d.ts" />

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {AuthSessionDelRequest} request
    * @returns {AuthSessionDelResponse}
    */
    sessionDel: function (request = null, timeout = 10) {
        return client.call('session.del', request, timeout);
    },

    /**
    * @param {AuthSessionGetRequest} request
    * @returns {AuthSessionGetResponse}
    */
    sessionGet: function (request = null, timeout = 10) {
        return client.call('session.get', request, timeout);
    },

    /**
    * @param {AuthSessionSetRequest} request
    * @returns {AuthSessionSetResponse}
    */
    sessionSet: function (request = null, timeout = 10) {
        return client.call('session.set', request, timeout);
    },

    /**
    * @param {AuthTokenGenerateRequest} request
    * @returns {AuthTokenGenerateResponse}
    */
    tokenGenerate: function (request = null, timeout = 10) {
        return client.call('token.generate', request, timeout);
    },

    /**
    * @param {AuthTokenPermissionAddRequest} request
    * @returns {AuthTokenPermissionAddResponse}
    */
    tokenPermissionAdd: function (request = null, timeout = 10) {
        return client.call('token_permission.add', request, timeout);
    },

    /**
    * @param {AuthTokenPermissionGetRequest} request
    * @returns {AuthTokenPermissionGetResponse}
    */
    tokenPermissionGet: function (request = null, timeout = 10) {
        return client.call('token_permission.get', request, timeout);
    },

    Model: require('./model')(client)
});
