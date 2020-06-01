
// 本文件由toolchain/code_generator/service/build脚本自动生成
/// <reference path = "global.d.ts" />

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {OrgAppointmentCreateRequest} request
    * @returns {OrgAppointmentCreateResponse}
    */
    appointmentCreate: function (request = null, timeout = 10) {
        return client.call('appointment.create', request, timeout);
    },

    /**
    * @param {OrgAppointmentGetRequest} request
    * @returns {OrgAppointmentGetResponse}
    */
    appointmentGet: function (request = null, timeout = 10) {
        return client.call('appointment.get', request, timeout);
    },

    /**
    * @param {OrgAppointmentListRequest} request
    * @returns {OrgAppointmentListResponse}
    */
    appointmentList: function (request = null, timeout = 10) {
        return client.call('appointment.list', request, timeout);
    },

    /**
    * @param {OrgAppointmentUpdateRequest} request
    * @returns {OrgAppointmentUpdateResponse}
    */
    appointmentUpdate: function (request = null, timeout = 10) {
        return client.call('appointment.update', request, timeout);
    },

    /**
    * @param {OrgAvailableEntranceListRequest} request
    * @returns {OrgAvailableEntranceListResponse}
    */
    availableEntranceList: function (request = null, timeout = 10) {
        return client.call('available_entrance.list', request, timeout);
    },

    /**
    * @param {OrgRecommendProductUpdateRequest} request
    * @returns {OrgRecommendProductUpdateResponse}
    */
    recommendProductUpdate: function (request = null, timeout = 10) {
        return client.call('recommend_product.update', request, timeout);
    },

    /**
    * @param {OrgSubGetRequest} request
    * @returns {OrgSubGetResponse}
    */
    subGet: function (request = null, timeout = 10) {
        return client.call('sub.get', request, timeout);
    },

    /**
    * @param {OrgWechatConfigGetRequest} request
    * @returns {OrgWechatConfigGetResponse}
    */
    wechatConfigGet: function (request = null, timeout = 10) {
        return client.call('wechat_config.get', request, timeout);
    },

    Model: require('./model')(client)
});
