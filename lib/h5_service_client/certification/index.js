
// 本文件由toolchain/code_generator/h5_service_client/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {H5CertificationApplicationFinalizeRequest} request
    * @returns {Promise<H5CertificationApplicationFinalizeResponse>}
    */
    applicationFinalize: function (request = null, timeout = 10) {
        return client.call('application.finalize', request, timeout);
    },

    /**
    * @param {H5CertificationApplicationListRequest} request
    * @returns {Promise<H5CertificationApplicationListResponse>}
    */
    applicationList: function (request = null, timeout = 10) {
        return client.call('application.list', request, timeout);
    },

    /**
    * @param {H5CertificationApplyRequest} request
    * @returns {Promise<H5CertificationApplyResponse>}
    */
    apply: function (request = null, timeout = 10) {
        return client.call('apply', request, timeout);
    },

    /**
    * @param {H5CertificationElectronicContractUpdateRequest} request
    * @returns {Promise<H5CertificationElectronicContractUpdateResponse>}
    */
    electronicContractUpdate: function (request = null, timeout = 10) {
        return client.call('electronic_contract.update', request, timeout);
    },

    /**
    * @param {H5CertificationIdIsDuplicateCheckRequest} request
    * @returns {Promise<H5CertificationIdIsDuplicateCheckResponse>}
    */
    idIsDuplicateCheck: function (request = null, timeout = 10) {
        return client.call('id_is_duplicate.check', request, timeout);
    },

    /**
    * @param {H5CertificationRealNameAuthenticateCallbackRequest} request
    * @returns {Promise<H5CertificationRealNameAuthenticateCallbackResponse>}
    */
    realNameAuthenticateCallback: function (request = null, timeout = 10) {
        return client.call('real_name.authenticate.callback', request, timeout);
    },

    /**
    * @param {H5CertificationRealNameAuthenticateRequest} request
    * @returns {Promise<H5CertificationRealNameAuthenticateResponse>}
    */
    realNameAuthenticate: function (request = null, timeout = 10) {
        return client.call('real_name.authenticate', request, timeout);
    },

    Model: require('./model')(client)
});
