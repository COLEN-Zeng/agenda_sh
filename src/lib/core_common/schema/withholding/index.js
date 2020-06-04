const { string, array, integer, object, empty, boolean, oneOf, number } = require('@qtk/schema').schema;
const Constant = require('../../constant');

module.exports = () => object().properties({
    holderName: string().minLength(1).desc('持卡人名字'),
    bankId: integer().enum(...Object.values(Constant.Bank)).desc('开户行id'),
    bankCardNo: string().minLength(1).desc('银行账户'),
    identityType: integer()
        .enum(...Object.values(Constant.IdentityType))
        .desc('银行卡预留证件类型'),
    identity: string().desc('银行卡预留证件号码'),
    mobile: string().desc('银行预留手机号')
}).additionalProperties(false).requireAll().desc('代扣银行卡信息');
