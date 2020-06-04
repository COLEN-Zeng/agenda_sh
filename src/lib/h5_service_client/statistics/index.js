
// 本文件由toolchain/code_generator/h5_service_client/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * @param {H5StatisticsPremiumCustomUnitGetRequest} request
    * @returns {Promise<H5StatisticsPremiumCustomUnitGetResponse>}
    */
    premiumCustomUnitGet: function (request = null, timeout = 10) {
        return client.call('premium.custom_unit.get', request, timeout);
    },

    /**
    * @param {H5StatisticsSummaryCustomUnitGetRequest} request
    * @returns {Promise<H5StatisticsSummaryCustomUnitGetResponse>}
    */
    summaryCustomUnitGet: function (request = null, timeout = 10) {
        return client.call('summary.custom_unit.get', request, timeout);
    },

    /**
    * @param {H5StatisticsVisitCustomUnitGetRequest} request
    * @returns {Promise<H5StatisticsVisitCustomUnitGetResponse>}
    */
    visitCustomUnitGet: function (request = null, timeout = 10) {
        return client.call('visit.custom_unit.get', request, timeout);
    },

    Model: require('./model')(client)
});
