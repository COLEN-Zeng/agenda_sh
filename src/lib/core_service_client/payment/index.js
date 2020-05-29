
// 本文件由toolchain/code_generator/service/build脚本自动生成
const mutex = require('process-key-mutex');

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {PaymentInfoCreateRequest} request
    * @returns {Promise<PaymentInfoCreateResponse>}
    */
    infoCreate: function (request = null, timeout = 30) {
        return client.call('info.create', request, timeout);
    },

    /**
    * @param {PaymentInfoGetByPolicyIdRequest} request
    * @returns {Promise<PaymentInfoGetByPolicyIdResponse>}
    */
    infoGetByPolicyId: function (request = null, timeout = 30) {
        return client.call('info.get.by.policy_id', request, timeout);
    },

    /**
    * @param {PaymentInfoGetRequest} request
    * @returns {Promise<PaymentInfoGetResponse>}
    */
    infoGet: function (request = null, timeout = 30) {
        return client.call('info.get', request, timeout);
    },

    /**
    * @param {PaymentInfoStateChangeRequest} request
    * @returns {Promise<PaymentInfoStateChangeResponse>}
    */
    infoStateChange: function (request = null, timeout = 30) {
        return client.call('info.state.change', request, timeout);
    },

    /**
    * @param {PaymentPaymentCallbackRequest} request
    * @returns {Promise<PaymentPaymentCallbackResponse>}
    */
    paymentCallback: function (request = null, timeout = 30) {
        return client.call('payment.callback', request, timeout);
    },

    /**
    * @param {PaymentWithholdingInfoGetRequest} request
    * @returns {Promise<PaymentWithholdingInfoGetResponse>}
    */
    withholdingInfoGet: function (request = null, timeout = 30) {
        return client.call('withholding.info.get', request, timeout);
    },

    /**
    * @param {PaymentWithholdingInfoSetRequest} request
    * @returns {Promise<PaymentWithholdingInfoSetResponse>}
    */
    withholdingInfoSet: function (request = null, timeout = 30) {
        return client.call('withholding.info.set', request, timeout);
    },

    /**
    * @param {PaymentWithholdingSubmitRequest} request
    * @returns {Promise<PaymentWithholdingSubmitResponse>}
    */
    withholdingSubmit: function (request = null, timeout = 30) {
        return client.call('withholding.submit', request, timeout);
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
