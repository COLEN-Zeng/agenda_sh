
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * 创建预约信息
    * @param {H5OrgAppointmentCreateRequest} request
    * @returns {Promise<H5OrgAppointmentCreateResponse>}
    */
    appointmentCreate: function (request = null, timeout = 10) {
        return client.call('appointment.create', request, timeout);
    },

    /**
    * 获取预约信息
    * @param {H5OrgAppointmentGetRequest} request
    * @returns {Promise<H5OrgAppointmentGetResponse>}
    */
    appointmentGet: function (request = null, timeout = 10) {
        return client.call('appointment.get', request, timeout);
    },

    /**
    * 获取该机构的所有预约信息
    * @param {H5OrgAppointmentListRequest} request
    * @returns {Promise<H5OrgAppointmentListResponse>}
    */
    appointmentList: function (request = null, timeout = 10) {
        return client.call('appointment.list', request, timeout);
    },

    /**
    * 更新预约信息
    * @param {H5OrgAppointmentUpdateRequest} request
    * @returns {Promise<H5OrgAppointmentUpdateResponse>}
    */
    appointmentUpdate: function (request = null, timeout = 10) {
        return client.call('appointment.update', request, timeout);
    },

    /**
    * 初始化机构配置
    * @param {H5OrgConfigInitFromSuperiorOrgRequest} request
    * @returns {Promise<H5OrgConfigInitFromSuperiorOrgResponse>}
    */
    configInitFromSuperiorOrg: function (request = null, timeout = 10) {
        return client.call('config.init_from_superior_org', request, timeout);
    },

    /**
    * 获取该机构的产品入口
    * @param {H5OrgEntranceListRequest} request
    * @returns {Promise<H5OrgEntranceListResponse>}
    */
    entranceList: function (request = null, timeout = 10) {
        return client.call('entrance.list', request, timeout);
    },

    /**
    * 获取最终的前端配置
    *
    * 部分字段会自动继承上级配置
    * @param {H5OrgFinalMobileFrontendConfigGetRequest} request
    * @returns {Promise<H5OrgFinalMobileFrontendConfigGetResponse>}
    */
    finalMobileFrontendConfigGet: function (request = null, timeout = 10) {
        return client.call('final_mobile_frontend_config.get', request, timeout);
    },

    /**
    * 获取原始的前端配置
    *
    * 字段全部为数据库里字段，此接口一般只有管理后台获取原始配置会用到，一般调用final_mobile_frontend_config.get
    * @param {H5OrgRawMobileFrontendConfigGetRequest} request
    * @returns {Promise<H5OrgRawMobileFrontendConfigGetResponse>}
    */
    rawMobileFrontendConfigGet: function (request = null, timeout = 10) {
        return client.call('raw_mobile_frontend_config.get', request, timeout);
    },

    /**
    * 设置原始的前端配置
    * @param {H5OrgRawMobileFrontendConfigSetRequest} request
    * @returns {Promise<H5OrgRawMobileFrontendConfigSetResponse>}
    */
    rawMobileFrontendConfigSet: function (request = null, timeout = 10) {
        return client.call('raw_mobile_frontend_config.set', request, timeout);
    },

    /**
    * 获取机构信息
    *
    * 根据 mode 来判断获取哪些子机构注意：如果获取所有子机构，该接口返回的依旧是一维数组，需要由调用者自行排序
    * @param {H5OrgSubGetRequest} request
    * @returns {Promise<H5OrgSubGetResponse>}
    */
    subGet: function (request = null, timeout = 10) {
        return client.call('sub.get', request, timeout);
    },

    /**
    * 获取机构的微信配置
    *
    * 如果该机构没有配置微信,则向它的上级机构找,都找不到则返回默认配置
    * @param {H5OrgWechatConfigGetRequest} request
    * @returns {Promise<H5OrgWechatConfigGetResponse>}
    */
    wechatConfigGet: function (request = null, timeout = 10) {
        return client.call('wechat_config.get', request, timeout);
    },

    Model: require('./model')(client)
});
