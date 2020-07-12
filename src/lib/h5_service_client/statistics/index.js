
// 本文件由toolchain/code_generator/service/build脚本自动生成

module.exports = (client) => ({
    client,
    call: function (...argv) {
        return client.call(...argv);
    },

    /**
    * 获取公司列表
    * @param {H5ProductCompareCompanyListRequest} request
    * @returns {Promise<H5ProductCompareCompanyListResponse>}
    */
    companyList: function (request = null, timeout = 10) {
        return client.call('company.list', request, timeout);
    },

    /**
    * 获取特定险种类型的产品列表, 支持的筛选条件 -- 公司, 产品特色, 年龄段
    * @param {H5ProductCompareProductListRequest} request
    * @returns {Promise<H5ProductCompareProductListResponse>}
    */
    productList: function (request = null, timeout = 10) {
        return client.call('product.list', request, timeout);
    },

    /**
    * 产品搜索, 搜索条件仅支持产品名
    * @param {H5ProductCompareProductSearchRequest} request
    * @returns {Promise<H5ProductCompareProductSearchResponse>}
    */
    productSearch: function (request = null, timeout = 10) {
        return client.call('product.search', request, timeout);
    },

    /**
    * 获取特定产品的信息
    * @param {H5ProductCompareProductDetailListRequest} request
    * @returns {Promise<H5ProductCompareProductDetailListResponse>}
    */
    productDetailList: function (request = null, timeout = 10) {
        return client.call('product_detail.list', request, timeout);
    },

    /**
    * 获取产品对应的银小保 insuranceId
    * @param {H5ProductCompareProductInsuranceIdGetRequest} request
    * @returns {Promise<H5ProductCompareProductInsuranceIdGetResponse>}
    */
    productInsuranceIdGet: function (request = null, timeout = 10) {
        return client.call('product_insurance_id.get', request, timeout);
    },

    /**
    * 获取特定产品的疾病信息
    * @param {H5ProductCompareProductSundryListRequest} request
    * @returns {Promise<H5ProductCompareProductSundryListResponse>}
    */
    productSundryList: function (request = null, timeout = 10) {
        return client.call('product_sundry.list', request, timeout);
    },

    Model: require('./model')(client)
});
