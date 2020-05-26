const { string, array, integer, object, empty, boolean, oneOf, number } = require('@qtk/schema').schema;
const base = require(__dirname + "/../frontend_base");

module.exports = () => object({
    id: Common.Schema.insurance().id(),
    base: base(),
    areaCode: array(object().additionalProperties(true)).desc('地区编码'),
    jobCode: array(object().additionalProperties(true)).desc('职业编码'),
    supportBank: array(integer()).desc('支持的银行编码列表'),
    plan: object().additionalProperties(true),
    insureInfo: object().additionalProperties(true),
    underwrite: object({
        type: string().enum('normal', 'thirdParty', 'custom')
            .desc('normal:普通健康告知、 thirdParty直接跳第三方核保， custom自定义核保'),
        data: string().desc('前端序列化为字符串， 答题树')
    })
        .require('type')
        .additionalProperties(false)
        .desc('核保配置化 H5类型暂时不实现。 处理是否展示健康告知, 第三方核保和 自定义核保'),
    extraData: object({
        reservationInsurance: object()
            .additionalProperties(true)
            .desc('存放预约险种配置，等待后期做模板迁移迁移')
    }),
})
    .additionalProperties(false);
