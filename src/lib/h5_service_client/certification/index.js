
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {CertificationApplicationFinalizeRequest} request
    * @returns {CertificationApplicationFinalizeResponse}
    */
    applicationFinalize: function (request = null, timeout = 10) {
        return client.call('application.finalize', request, timeout);
    },

    /**
    * @param {CertificationApplicationListRequest} request
    * @returns {CertificationApplicationListResponse}
    */
    applicationList: function (request = null, timeout = 10) {
        return client.call('application.list', request, timeout);
    },

    /**
    * @param {CertificationApplyRequest} request
    * @returns {CertificationApplyResponse}
    */
    apply: function (request = null, timeout = 10) {
        return client.call('apply', request, timeout);
    },

    /**
    * @param {CertificationElectronicContractUpdateRequest} request
    * @returns {CertificationElectronicContractUpdateResponse}
    */
    electronicContractUpdate: function (request = null, timeout = 10) {
        return client.call('electronic_contract.update', request, timeout);
    },

    /**
    * @param {CertificationIdIsDuplicateCheckRequest} request
    * @returns {CertificationIdIsDuplicateCheckResponse}
    */
    idIsDuplicateCheck: function (request = null, timeout = 10) {
        return client.call('id_is_duplicate.check', request, timeout);
    },

    /**
    * @param {CertificationRealNameAuthenticateCallbackRequest} request
    * @returns {CertificationRealNameAuthenticateCallbackResponse}
    */
    realNameAuthenticateCallback: function (request = null, timeout = 10) {
        return client.call('real_name.authenticate.callback', request, timeout);
    },

    /**
    * @param {CertificationRealNameAuthenticateRequest} request
    * @returns {CertificationRealNameAuthenticateResponse}
    */
    realNameAuthenticate: function (request = null, timeout = 10) {
        return client.call('real_name.authenticate', request, timeout);
    },

    Model: require('./model')(client)
});
