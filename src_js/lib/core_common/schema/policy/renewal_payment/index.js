const { string, array, integer, object, empty, boolean, oneOf, number } = require('@qtk/schema').schema;
const Constant = require('../../../constant');

module.exports = () => object().properties({
    holderName: string().desc('持卡人名字'),
    bankId: integer().enum(...Object.values(Constant.Bank)).desc('开户行id'),
    bankCardNo: string().desc('银行账户'),
    identityType: integer()
        .enum(...Object.values(Constant.IdentityType))
        .desc('银行卡预留证件类型'),
    identity: string().desc('银行卡预留证件号码'),
    mobile: string().desc('银行预留手机号'),
    bankDistrict: {
        province: string().desc("银行开户省"),
        city: string().desc("银行开户市")
    },
    bankCode: string().desc("银行代码-保险公司"),
    verifyCode: string().desc('短信验证码,代扣必须'),
    payType: integer().enum(...Object.values(Constant.Payment.PayType)).desc('续期缴费方式 目前只支持银行卡'),
    paymentSame: integer().enum(0, 1).desc('是否与支付银行卡一致')
}).additionalProperties(false).require('bankId', 'bankCardNo').desc('代扣银行卡信息');
