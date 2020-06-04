
// 本文件由toolchain/code_generator/h5_service_client/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {H5AccountInfoGetRequest} request
    * @returns {Promise<H5AccountInfoGetResponse>}
    */
    infoGet: function (request = null, timeout = 10) {
        return client.call('info.get', request, timeout);
    },

    /**
    * @param {H5AccountLoginRequest} request
    * @returns {Promise<H5AccountLoginResponse>}
    */
    login: function (request = null, timeout = 10) {
        return client.call('login', request, timeout);
    },

    /**
    * @param {H5AccountPasswordResetRequest} request
    * @returns {Promise<H5AccountPasswordResetResponse>}
    */
    passwordReset: function (request = null, timeout = 10) {
        return client.call('password.reset', request, timeout);
    },

    /**
    * @param {H5AccountRegisterRequest} request
    * @returns {Promise<H5AccountRegisterResponse>}
    */
    register: function (request = null, timeout = 10) {
        return client.call('register', request, timeout);
    },

    /**
    * @param {H5AccountSearchBySpecificIdRequest} request
    * @returns {Promise<H5AccountSearchBySpecificIdResponse>}
    */
    searchBySpecificId: function (request = null, timeout = 10) {
        return client.call('search_by_specific_id', request, timeout);
    },

    /**
    * @param {H5AccountSuperiorChangeRequest} request
    * @returns {Promise<H5AccountSuperiorChangeResponse>}
    */
    superiorChange: function (request = null, timeout = 10) {
        return client.call('superior.change', request, timeout);
    },

    /**
    * @param {H5AccountUserNameResetRequest} request
    * @returns {Promise<H5AccountUserNameResetResponse>}
    */
    userNameReset: function (request = null, timeout = 10) {
        return client.call('user_name.reset', request, timeout);
    },

    Model: require('./model')(client)
});
