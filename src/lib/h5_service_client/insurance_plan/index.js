
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * 删除计划书信息
    * @param {H5InsurancePlanInfoDelRequest} request
    * @returns {Promise<H5InsurancePlanInfoDelResponse>}
    */
    infoDel: function (request = null, timeout = 10) {
        return client.call('info.del', request, timeout);
    },

    /**
    * 获取计划书信息
    * @param {H5InsurancePlanInfoGetRequest} request
    * @returns {Promise<H5InsurancePlanInfoGetResponse>}
    */
    infoGet: function (request = null, timeout = 10) {
        return client.call('info.get', request, timeout);
    },

    /**
    * 获取计划书列表
    * @param {H5InsurancePlanInfoListRequest} request
    * @returns {Promise<H5InsurancePlanInfoListResponse>}
    */
    infoList: function (request = null, timeout = 10) {
        return client.call('info.list', request, timeout);
    },

    /**
    * 编辑计划书
    * @param {H5InsurancePlanInfoSetRequest} request
    * @returns {Promise<H5InsurancePlanInfoSetResponse>}
    */
    infoSet: function (request = null, timeout = 10) {
        return client.call('info.set', request, timeout);
    },

    /**
    * 添加访问量
    * @param {H5InsurancePlanReadingVolumeAddRequest} request
    * @returns {Promise<H5InsurancePlanReadingVolumeAddResponse>}
    */
    readingVolumeAdd: function (request = null, timeout = 10) {
        return client.call('reading_volume.add', request, timeout);
    },

    Model: require('./model')(client)
});
