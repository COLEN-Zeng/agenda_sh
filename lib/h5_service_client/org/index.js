
// 本文件由toolchain/code_generator/h5_service_client/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {H5OrgAppointmentCreateRequest} request
    * @returns {Promise<H5OrgAppointmentCreateResponse>}
    */
    appointmentCreate: function (request = null, timeout = 10) {
        return client.call('appointment.create', request, timeout);
    },

    /**
    * @param {H5OrgAppointmentGetRequest} request
    * @returns {Promise<H5OrgAppointmentGetResponse>}
    */
    appointmentGet: function (request = null, timeout = 10) {
        return client.call('appointment.get', request, timeout);
    },

    /**
    * @param {H5OrgAppointmentListRequest} request
    * @returns {Promise<H5OrgAppointmentListResponse>}
    */
    appointmentList: function (request = null, timeout = 10) {
        return client.call('appointment.list', request, timeout);
    },

    /**
    * @param {H5OrgAppointmentUpdateRequest} request
    * @returns {Promise<H5OrgAppointmentUpdateResponse>}
    */
    appointmentUpdate: function (request = null, timeout = 10) {
        return client.call('appointment.update', request, timeout);
    },

    /**
    * @param {H5OrgConfigInitFromSuperiorOrgRequest} request
    * @returns {Promise<H5OrgConfigInitFromSuperiorOrgResponse>}
    */
    configInitFromSuperiorOrg: function (request = null, timeout = 10) {
        return client.call('config.init_from_superior_org', request, timeout);
    },

    /**
    * @param {H5OrgEntranceListRequest} request
    * @returns {Promise<H5OrgEntranceListResponse>}
    */
    entranceList: function (request = null, timeout = 10) {
        return client.call('entrance.list', request, timeout);
    },

    /**
    * @param {H5OrgFinalMobileFrontendConfigGetRequest} request
    * @returns {Promise<H5OrgFinalMobileFrontendConfigGetResponse>}
    */
    finalMobileFrontendConfigGet: function (request = null, timeout = 10) {
        return client.call('final_mobile_frontend_config.get', request, timeout);
    },

    /**
    * @param {H5OrgRawMobileFrontendConfigGetRequest} request
    * @returns {Promise<H5OrgRawMobileFrontendConfigGetResponse>}
    */
    rawMobileFrontendConfigGet: function (request = null, timeout = 10) {
        return client.call('raw_mobile_frontend_config.get', request, timeout);
    },

    /**
    * @param {H5OrgRawMobileFrontendConfigSetRequest} request
    * @returns {Promise<H5OrgRawMobileFrontendConfigSetResponse>}
    */
    rawMobileFrontendConfigSet: function (request = null, timeout = 10) {
        return client.call('raw_mobile_frontend_config.set', request, timeout);
    },

    /**
    * @param {H5OrgSubGetRequest} request
    * @returns {Promise<H5OrgSubGetResponse>}
    */
    subGet: function (request = null, timeout = 10) {
        return client.call('sub.get', request, timeout);
    },

    /**
    * @param {H5OrgWechatConfigGetRequest} request
    * @returns {Promise<H5OrgWechatConfigGetResponse>}
    */
    wechatConfigGet: function (request = null, timeout = 10) {
        return client.call('wechat_config.get', request, timeout);
    },

    Model: require('./model')(client)
});
