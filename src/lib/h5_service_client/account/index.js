
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {AccountInfoGetRequest} request
    * @returns {AccountInfoGetResponse}
    */
    infoGet: function (request = null, timeout = 10) {
        return client.call('info.get', request, timeout);
    },

    /**
    * @param {AccountLoginRequest} request
    * @returns {AccountLoginResponse}
    */
    login: function (request = null, timeout = 10) {
        return client.call('login', request, timeout);
    },

    /**
    * @param {AccountPasswordResetRequest} request
    * @returns {AccountPasswordResetResponse}
    */
    passwordReset: function (request = null, timeout = 10) {
        return client.call('password.reset', request, timeout);
    },

    /**
    * @param {AccountRegisterRequest} request
    * @returns {AccountRegisterResponse}
    */
    register: function (request = null, timeout = 10) {
        return client.call('register', request, timeout);
    },

    /**
    * @param {AccountSearchBySpecificIdRequest} request
    * @returns {AccountSearchBySpecificIdResponse}
    */
    searchBySpecificId: function (request = null, timeout = 10) {
        return client.call('search_by_specific_id', request, timeout);
    },

    /**
    * @param {AccountSuperiorChangeRequest} request
    * @returns {AccountSuperiorChangeResponse}
    */
    superiorChange: function (request = null, timeout = 10) {
        return client.call('superior.change', request, timeout);
    },

    /**
    * @param {AccountUserNameResetRequest} request
    * @returns {AccountUserNameResetResponse}
    */
    userNameReset: function (request = null, timeout = 10) {
        return client.call('user_name.reset', request, timeout);
    },

    Model: require('./model')(client)
});
