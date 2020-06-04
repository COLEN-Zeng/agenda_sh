
// 本文件由toolchain/code_generator/service/fun脚本自动生成
const mutex = require('process-key-mutex');

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {CoreWarehouseCacheClearRequest} request
    * @returns {Promise<CoreWarehouseCacheClearResponse>}
    */
    cacheClear: function (request = null, timeout = 30) {
        return client.call('cache.clear', request, timeout);
    },

    /**
    * @param {CoreWarehouseCustomEntranceListRequest} request
    * @returns {Promise<CoreWarehouseCustomEntranceListResponse>}
    */
    customEntranceList: function (request = null, timeout = 30) {
        return client.call('custom_entrance.list', request, timeout);
    },

    /**
    * @param {CoreWarehouseCustomInsuranceAddRequest} request
    * @returns {Promise<CoreWarehouseCustomInsuranceAddResponse>}
    */
    customInsuranceAdd: function (request = null, timeout = 30) {
        return client.call('custom_insurance.add', request, timeout);
    },

    /**
    * @param {CoreWarehouseCustomInsuranceUpdateRequest} request
    * @returns {Promise<CoreWarehouseCustomInsuranceUpdateResponse>}
    */
    customInsuranceUpdate: function (request = null, timeout = 30) {
        return client.call('custom_insurance.update', request, timeout);
    },

    /**
    * @param {CoreWarehouseEntranceGetRequest} request
    * @returns {Promise<CoreWarehouseEntranceGetResponse>}
    */
    entranceGet: function (request = null, timeout = 30) {
        return client.call('entrance.get', request, timeout);
    },

    /**
    * @param {CoreWarehouseEntranceHasRequest} request
    * @returns {Promise<CoreWarehouseEntranceHasResponse>}
    */
    entranceHas: function (request = null, timeout = 30) {
        return client.call('entrance.has', request, timeout);
    },

    /**
    * @param {CoreWarehouseInsuranceBackendGetRequest} request
    * @returns {Promise<CoreWarehouseInsuranceBackendGetResponse>}
    */
    insuranceBackendGet: function (request = null, timeout = 30) {
        return client.call('insurance.backend.get', request, timeout);
    },

    /**
    * @param {CoreWarehouseInsuranceBackendListRequest} request
    * @returns {Promise<CoreWarehouseInsuranceBackendListResponse>}
    */
    insuranceBackendList: function (request = null, timeout = 30) {
        return client.call('insurance.backend.list', request, timeout);
    },

    /**
    * @param {CoreWarehouseInsuranceBackendUpdateRequest} request
    * @returns {Promise<CoreWarehouseInsuranceBackendUpdateResponse>}
    */
    insuranceBackendUpdate: function (request = null, timeout = 30) {
        return client.call('insurance.backend.update', request, timeout);
    },

    /**
    * @param {CoreWarehouseInsuranceFrontendGetRequest} request
    * @returns {Promise<CoreWarehouseInsuranceFrontendGetResponse>}
    */
    insuranceFrontendGet: function (request = null, timeout = 30) {
        return client.call('insurance.frontend.get', request, timeout);
    },

    /**
    * @param {CoreWarehouseInsuranceFrontendUpdateRequest} request
    * @returns {Promise<CoreWarehouseInsuranceFrontendUpdateResponse>}
    */
    insuranceFrontendUpdate: function (request = null, timeout = 30) {
        return client.call('insurance.frontend.update', request, timeout);
    },

    /**
    * @param {CoreWarehouseInsuranceDefaultBackendGetRequest} request
    * @returns {Promise<CoreWarehouseInsuranceDefaultBackendGetResponse>}
    */
    insuranceDefaultBackendGet: function (request = null, timeout = 30) {
        return client.call('insurance_default.backend.get', request, timeout);
    },

    /**
    * @param {CoreWarehouseInsuranceMapBackendGetRequest} request
    * @returns {Promise<CoreWarehouseInsuranceMapBackendGetResponse>}
    */
    insuranceMapBackendGet: function (request = null, timeout = 30) {
        return client.call('insurance_map.backend.get', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateEffectTemplateGetRequest} request
    * @returns {Promise<CoreWarehousePromotionRateEffectTemplateGetResponse>}
    */
    promotionRateEffectTemplateGet: function (request = null, timeout = 30) {
        return client.call('promotion_rate.effect_template.get', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateGetRequest} request
    * @returns {Promise<CoreWarehousePromotionRateGetResponse>}
    */
    promotionRateGet: function (request = null, timeout = 30) {
        return client.call('promotion_rate.get', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateCreateRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateCreateResponse>}
    */
    promotionRateTemplateCreate: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.create', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateDeleteRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateDeleteResponse>}
    */
    promotionRateTemplateDelete: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.delete', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateGetRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateGetResponse>}
    */
    promotionRateTemplateGet: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.get', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateInsuranceAddRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateInsuranceAddResponse>}
    */
    promotionRateTemplateInsuranceAdd: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.insurance_add', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateInsuranceDeleteRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateInsuranceDeleteResponse>}
    */
    promotionRateTemplateInsuranceDelete: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.insurance_delete', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateListRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateListResponse>}
    */
    promotionRateTemplateList: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.list', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateResetRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateResetResponse>}
    */
    promotionRateTemplateReset: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.reset', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateUpdateRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateUpdateResponse>}
    */
    promotionRateTemplateUpdate: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.update', request, timeout);
    },

    /**
    * @param {CoreWarehousePromotionRateTemplateUseRequest} request
    * @returns {Promise<CoreWarehousePromotionRateTemplateUseResponse>}
    */
    promotionRateTemplateUse: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.use', request, timeout);
    },

    objectSafeUpdate: async function (...args) {
        let objectName, id, updater, timeout = 30;
        if (typeof args[1] === "function") {
            [id, updater, timeout = 30] = args;
        }
        else {
            [objectName, id, updater, timeout = 30] = args;
        }

        if (!id) throw new Error(`${__dirname} objectSafeUpdate fail: invalid id`);

        return await mutex.lock(`service_safe_update_${objectName}_${id}`, async() => {
            let object = await this.call(objectName === undefined ? 'get' : `${objectName}.get`, id, timeout);
            let returnValue = await updater(object);
            await this.call(objectName === undefined ? 'set' : `${objectName}.set`, object, timeout);
            return returnValue;
        });
    },

    Model: require('./model')(client)
});
