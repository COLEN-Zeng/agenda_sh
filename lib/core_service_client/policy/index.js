
// 本文件由toolchain/code_generator/service/fun脚本自动生成
const mutex = require('process-key-mutex');

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {CorePolicyAddRequest} request
    * @returns {Promise<CorePolicyAddResponse>}
    */
    add: function (request = null, timeout = 30) {
        return client.call('add', request, timeout);
    },

    /**
    * @param {CorePolicyClaimGetRequest} request
    * @returns {Promise<CorePolicyClaimGetResponse>}
    */
    claimGet: function (request = null, timeout = 30) {
        return client.call('claim.get', request, timeout);
    },

    /**
    * @param {CorePolicyClaimListRequest} request
    * @returns {Promise<CorePolicyClaimListResponse>}
    */
    claimList: function (request = null, timeout = 30) {
        return client.call('claim.list', request, timeout);
    },

    /**
    * @param {CorePolicyClaimSetRequest} request
    * @returns {Promise<CorePolicyClaimSetResponse>}
    */
    claimSet: function (request = null, timeout = 30) {
        return client.call('claim.set', request, timeout);
    },

    /**
    * @param {CorePolicyEndorsementGetRequest} request
    * @returns {Promise<CorePolicyEndorsementGetResponse>}
    */
    endorsementGet: function (request = null, timeout = 30) {
        return client.call('endorsement.get', request, timeout);
    },

    /**
    * @param {CorePolicyEndorsementListRequest} request
    * @returns {Promise<CorePolicyEndorsementListResponse>}
    */
    endorsementList: function (request = null, timeout = 30) {
        return client.call('endorsement.list', request, timeout);
    },

    /**
    * @param {CorePolicyEndorsementSetRequest} request
    * @returns {Promise<CorePolicyEndorsementSetResponse>}
    */
    endorsementSet: function (request = null, timeout = 30) {
        return client.call('endorsement.set', request, timeout);
    },

    /**
    * @param {CorePolicyGetRequest} request
    * @returns {Promise<CorePolicyGetResponse>}
    */
    get: function (request = null, timeout = 30) {
        return client.call('get', request, timeout);
    },

    /**
    * @param {CorePolicyListRequest} request
    * @returns {Promise<CorePolicyListResponse>}
    */
    list: function (request = null, timeout = 30) {
        return client.call('list', request, timeout);
    },

    /**
    * @param {CorePolicyReceiptGetRequest} request
    * @returns {Promise<CorePolicyReceiptGetResponse>}
    */
    receiptGet: function (request = null, timeout = 30) {
        return client.call('receipt.get', request, timeout);
    },

    /**
    * @param {CorePolicyReceiptSetRequest} request
    * @returns {Promise<CorePolicyReceiptSetResponse>}
    */
    receiptSet: function (request = null, timeout = 30) {
        return client.call('receipt.set', request, timeout);
    },

    /**
    * @param {CorePolicySetRequest} request
    * @returns {Promise<CorePolicySetResponse>}
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
