
// 本文件由toolchain/code_generator/service/build脚本自动生成
const mutex = require('process-key-mutex');

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {WarehouseCacheClearRequest} request
    * @returns {Promise<WarehouseCacheClearResponse>}
    */
    cacheClear: function (request = null, timeout = 30) {
        return client.call('cache.clear', request, timeout);
    },

    /**
    * @param {WarehouseCustomEntranceListRequest} request
    * @returns {Promise<WarehouseCustomEntranceListResponse>}
    */
    customEntranceList: function (request = null, timeout = 30) {
        return client.call('custom_entrance.list', request, timeout);
    },

    /**
    * @param {WarehouseCustomInsuranceAddRequest} request
    * @returns {Promise<WarehouseCustomInsuranceAddResponse>}
    */
    customInsuranceAdd: function (request = null, timeout = 30) {
        return client.call('custom_insurance.add', request, timeout);
    },

    /**
    * @param {WarehouseCustomInsuranceUpdateRequest} request
    * @returns {Promise<WarehouseCustomInsuranceUpdateResponse>}
    */
    customInsuranceUpdate: function (request = null, timeout = 30) {
        return client.call('custom_insurance.update', request, timeout);
    },

    /**
    * @param {WarehouseEntranceGetRequest} request
    * @returns {Promise<WarehouseEntranceGetResponse>}
    */
    entranceGet: function (request = null, timeout = 30) {
        return client.call('entrance.get', request, timeout);
    },

    /**
    * @param {WarehouseEntranceHasRequest} request
    * @returns {Promise<WarehouseEntranceHasResponse>}
    */
    entranceHas: function (request = null, timeout = 30) {
        return client.call('entrance.has', request, timeout);
    },

    /**
    * @param {WarehouseInsuranceBackendGetRequest} request
    * @returns {Promise<WarehouseInsuranceBackendGetResponse>}
    */
    insuranceBackendGet: function (request = null, timeout = 30) {
        return client.call('insurance.backend.get', request, timeout);
    },

    /**
    * @param {WarehouseInsuranceBackendListRequest} request
    * @returns {Promise<WarehouseInsuranceBackendListResponse>}
    */
    insuranceBackendList: function (request = null, timeout = 30) {
        return client.call('insurance.backend.list', request, timeout);
    },

    /**
    * @param {WarehouseInsuranceBackendUpdateRequest} request
    * @returns {Promise<WarehouseInsuranceBackendUpdateResponse>}
    */
    insuranceBackendUpdate: function (request = null, timeout = 30) {
        return client.call('insurance.backend.update', request, timeout);
    },

    /**
    * @param {WarehouseInsuranceFrontendGetRequest} request
    * @returns {Promise<WarehouseInsuranceFrontendGetResponse>}
    */
    insuranceFrontendGet: function (request = null, timeout = 30) {
        return client.call('insurance.frontend.get', request, timeout);
    },

    /**
    * @param {WarehouseInsuranceFrontendUpdateRequest} request
    * @returns {Promise<WarehouseInsuranceFrontendUpdateResponse>}
    */
    insuranceFrontendUpdate: function (request = null, timeout = 30) {
        return client.call('insurance.frontend.update', request, timeout);
    },

    /**
    * @param {WarehouseInsuranceDefaultBackendGetRequest} request
    * @returns {Promise<WarehouseInsuranceDefaultBackendGetResponse>}
    */
    insuranceDefaultBackendGet: function (request = null, timeout = 30) {
        return client.call('insurance_default.backend.get', request, timeout);
    },

    /**
    * @param {WarehouseInsuranceMapBackendGetRequest} request
    * @returns {Promise<WarehouseInsuranceMapBackendGetResponse>}
    */
    insuranceMapBackendGet: function (request = null, timeout = 30) {
        return client.call('insurance_map.backend.get', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateEffectTemplateGetRequest} request
    * @returns {Promise<WarehousePromotionRateEffectTemplateGetResponse>}
    */
    promotionRateEffectTemplateGet: function (request = null, timeout = 30) {
        return client.call('promotion_rate.effect_template.get', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateGetRequest} request
    * @returns {Promise<WarehousePromotionRateGetResponse>}
    */
    promotionRateGet: function (request = null, timeout = 30) {
        return client.call('promotion_rate.get', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateCreateRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateCreateResponse>}
    */
    promotionRateTemplateCreate: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.create', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateDeleteRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateDeleteResponse>}
    */
    promotionRateTemplateDelete: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.delete', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateGetRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateGetResponse>}
    */
    promotionRateTemplateGet: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.get', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateInsuranceAddRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateInsuranceAddResponse>}
    */
    promotionRateTemplateInsuranceAdd: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.insurance_add', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateInsuranceDeleteRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateInsuranceDeleteResponse>}
    */
    promotionRateTemplateInsuranceDelete: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.insurance_delete', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateListRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateListResponse>}
    */
    promotionRateTemplateList: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.list', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateResetRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateResetResponse>}
    */
    promotionRateTemplateReset: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.reset', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateUpdateRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateUpdateResponse>}
    */
    promotionRateTemplateUpdate: function (request = null, timeout = 30) {
        return client.call('promotion_rate.template.update', request, timeout);
    },

    /**
    * @param {WarehousePromotionRateTemplateUseRequest} request
    * @returns {Promise<WarehousePromotionRateTemplateUseResponse>}
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
