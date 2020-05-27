
// 本文件由toolchain/code_generator/service/build脚本自动生成
const mutex = require('process-key-mutex');

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {PolicyAddRequest} request
    * @returns {Promise<PolicyAddResponse>}
    */
    add: function (request = null, timeout = 30) {
        return client.call('add', request, timeout);
    },

    /**
    * @param {PolicyClaimGetRequest} request
    * @returns {Promise<PolicyClaimGetResponse>}
    */
    claimGet: function (request = null, timeout = 30) {
        return client.call('claim.get', request, timeout);
    },

    /**
    * @param {PolicyClaimListRequest} request
    * @returns {Promise<PolicyClaimListResponse>}
    */
    claimList: function (request = null, timeout = 30) {
        return client.call('claim.list', request, timeout);
    },

    /**
    * @param {PolicyClaimSetRequest} request
    * @returns {Promise<PolicyClaimSetResponse>}
    */
    claimSet: function (request = null, timeout = 30) {
        return client.call('claim.set', request, timeout);
    },

    /**
    * @param {PolicyEndorsementGetRequest} request
    * @returns {Promise<PolicyEndorsementGetResponse>}
    */
    endorsementGet: function (request = null, timeout = 30) {
        return client.call('endorsement.get', request, timeout);
    },

    /**
    * @param {PolicyEndorsementListRequest} request
    * @returns {Promise<PolicyEndorsementListResponse>}
    */
    endorsementList: function (request = null, timeout = 30) {
        return client.call('endorsement.list', request, timeout);
    },

    /**
    * @param {PolicyEndorsementSetRequest} request
    * @returns {Promise<PolicyEndorsementSetResponse>}
    */
    endorsementSet: function (request = null, timeout = 30) {
        return client.call('endorsement.set', request, timeout);
    },

    /**
    * @param {PolicyGetRequest} request
    * @returns {Promise<PolicyGetResponse>}
    */
    get: function (request = null, timeout = 30) {
        return client.call('get', request, timeout);
    },

    /**
    * @param {PolicyListRequest} request
    * @returns {Promise<PolicyListResponse>}
    */
    list: function (request = null, timeout = 30) {
        return client.call('list', request, timeout);
    },

    /**
    * @param {PolicyReceiptGetRequest} request
    * @returns {Promise<PolicyReceiptGetResponse>}
    */
    receiptGet: function (request = null, timeout = 30) {
        return client.call('receipt.get', request, timeout);
    },

    /**
    * @param {PolicyReceiptSetRequest} request
    * @returns {Promise<PolicyReceiptSetResponse>}
    */
    receiptSet: function (request = null, timeout = 30) {
        return client.call('receipt.set', request, timeout);
    },

    /**
    * @param {PolicySetRequest} request
    * @returns {Promise<PolicySetResponse>}
    */
    set: function (request = null, timeout = 30) {
        return client.call('set', request, timeout);
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
