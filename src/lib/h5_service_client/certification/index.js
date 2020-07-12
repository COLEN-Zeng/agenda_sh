
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    *
    * 审核认证是否通过
    * @param {H5CertificationApplicationFinalizeRequest} request
    * @returns {Promise<H5CertificationApplicationFinalizeResponse>}
    */
    applicationFinalize: function (request = null, timeout = 10) {
        return client.call('application.finalize', request, timeout);
    },

    /**
    *
    * 获取申请认证用户审核列表
    * @param {H5CertificationApplicationListRequest} request
    * @returns {Promise<H5CertificationApplicationListResponse>}
    */
    applicationList: function (request = null, timeout = 10) {
        return client.call('application.list', request, timeout);
    },

    /**
    *
    * 资质认证申请
    * @param {H5CertificationApplyRequest} request
    * @returns {Promise<H5CertificationApplyResponse>}
    */
    apply: function (request = null, timeout = 10) {
        return client.call('apply', request, timeout);
    },

    /**
    *
    * 更新资质认证合同
    * @param {H5CertificationElectronicContractUpdateRequest} request
    * @returns {Promise<H5CertificationElectronicContractUpdateResponse>}
    */
    electronicContractUpdate: function (request = null, timeout = 10) {
        return client.call('electronic_contract.update', request, timeout);
    },

    /**
    *
    * 检查身份证是否重复
    * @param {H5CertificationIdIsDuplicateCheckRequest} request
    * @returns {Promise<H5CertificationIdIsDuplicateCheckResponse>}
    */
    idIsDuplicateCheck: function (request = null, timeout = 10) {
        return client.call('id_is_duplicate.check', request, timeout);
    },

    /**
    *
    * 法大大实名认证结果通知
    * @param {H5CertificationRealNameAuthenticateCallbackRequest} request
    * @returns {Promise<H5CertificationRealNameAuthenticateCallbackResponse>}
    */
    realNameAuthenticateCallback: function (request = null, timeout = 10) {
        return client.call('real_name.authenticate.callback', request, timeout);
    },

    /**
    *
    * 法大大－进行实名认证
    * @param {H5CertificationRealNameAuthenticateRequest} request
    * @returns {Promise<H5CertificationRealNameAuthenticateResponse>}
    */
    realNameAuthenticate: function (request = null, timeout = 10) {
        return client.call('real_name.authenticate', request, timeout);
    },

    Model: require('./model')(client)
});
