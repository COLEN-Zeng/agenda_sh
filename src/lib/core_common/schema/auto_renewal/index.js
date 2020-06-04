const { string, array, integer, object, empty, boolean, oneOf, number } = require('@qtk/schema').schema;
const Constant = require('../../constant');

module.exports = () => object().properties({
    flag: integer().enum(0, 1).desc('是否自动续费'),
    bankId: integer().enum(...Object.values(Constant.Bank)).desc('开户行id'),
    bankCardNo: string().minLength(1).desc('银行账户'),
}).additionalProperties(true).require('flag').desc('自动续保信息');
