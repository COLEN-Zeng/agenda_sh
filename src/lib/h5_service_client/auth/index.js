
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * 删除 session 信息

    * @param {H5AuthSessionDelRequest} request
    * @returns {Promise<H5AuthSessionDelResponse>}
    */
    sessionDel: function (request = null, timeout = 10) {
        return client.call('session.del', request, timeout);
    },

    /**
    * 获取 session 信息

    * @param {H5AuthSessionGetRequest} request
    * @returns {Promise<H5AuthSessionGetResponse>}
    */
    sessionGet: function (request = null, timeout = 10) {
        return client.call('session.get', request, timeout);
    },

    /**
    * 创建 session
    * @param {H5AuthSessionSetRequest} request
    * @returns {Promise<H5AuthSessionSetResponse>}
    */
    sessionSet: function (request = null, timeout = 10) {
        return client.call('session.set', request, timeout);
    },

    /**
    *
    * 为系统用户生成一个临时的针对特定资源的访问权限
    * @param {H5AuthTokenGenerateRequest} request
    * @returns {Promise<H5AuthTokenGenerateResponse>}
    */
    tokenGenerate: function (request = null, timeout = 10) {
        return client.call('token.generate', request, timeout);
    },

    /**
    *
    * 为临时访问添加权限
    * @param {H5AuthTokenPermissionAddRequest} request
    * @returns {Promise<H5AuthTokenPermissionAddResponse>}
    */
    tokenPermissionAdd: function (request = null, timeout = 10) {
        return client.call('token_permission.add', request, timeout);
    },

    /**
    *
    * 验证token和 clientId的对应关系（若数据库中对用 token无 clientId则直接添加）并返回所能查看的数据 id
    * @param {H5AuthTokenPermissionGetRequest} request
    * @returns {Promise<H5AuthTokenPermissionGetResponse>}
    */
    tokenPermissionGet: function (request = null, timeout = 10) {
        return client.call('token_permission.get', request, timeout);
    },

    Model: require('./model')(client)
});
