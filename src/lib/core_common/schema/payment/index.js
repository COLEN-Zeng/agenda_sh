const Constant = require('../../constant');
const common = require('../common');
const policy = require('../policy');
const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;

module.exports = () => ({
    id: () => common().uuid().desc('自有的支付单ID'),
    info: () => ({
        id: common().uuid().desc('支付单ID'),
        fee: common().money(),
        policyId: policy().id(),
        opsType: integer().enum(...Object.values(Constant.Payment.OpsType))
            .desc(JSON.stringify(Constant.Payment.OpsType)),
        method: integer().enum(...Object.values(Constant.Payment.Method))
            .desc(JSON.stringify(Constant.Payment.Method)),
        state: integer().enum(...Object.values(Constant.Payment.State))
            .desc(JSON.stringify(Constant.Payment.State)),
        shipmentType: integer().enum(...Object.values(Constant.Payment.ShipmentType))
            .desc(JSON.stringify(Constant.Payment.ShipmentType)),

        modifiedAt: integer().desc('最近一次修改时间'),
        createdAt: integer().desc('创建时间'),
    }),
    wechatPayInfo: function () {
        return {
            paymentId: this.id(),
            paymentParam: {
                appId: string().desc('appId'),
                timeStamp: integer().desc('时间戳从1970年1月1日00:00:00至今的秒数'),
                nonceStr: string().desc('随机字符串，长度为32个字符以下'),
                package: string().desc('统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*'),
                signType: string().enum('MD5').desc('签名算法'),
                paySign: string().desc('签名')
            }
        };
    },
    request: () => object().properties({
        policyId: policy().id(),
        fee: common().money(),
        shipmentType: integer().enum(...Object.values(Constant.Payment.ShipmentType))
            .desc(`发货类型: ${JSON.stringify(Constant.Payment.ShipmentType)}`),
        method: integer().enum(...Object.values(Constant.Payment.Method))
            .desc(`支付类型： ${JSON.stringify(Constant.Payment.Method)}`),
        opsType: integer().enum(...Object.values(Constant.Payment.OpsType))
            .desc(`操作类型: ${JSON.stringify(Constant.Payment.OpsType)}`),
        openId: string().minLength(1).desc('openId'),
    }).desc('创建支付/退款订单的请求参数, 由调用者决定 required 哪些属性'),
    PaymentUrl: () => string().desc('支付链接')

});
