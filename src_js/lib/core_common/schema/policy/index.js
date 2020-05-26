const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../common');
const Constant = require('../../constant');

module.exports = () => ({
    id: () => Common().uuid().desc('保单id'),
    no: () => string().desc('保单号'),
    structure: () => integer().enum(Constant.Policy.Structure.SIMPLE).desc('0:单个保单号单(simple), 2:组合单(combination)'),
    status: () => integer().enum(...Object.values(Constant.Policy.Status)).desc('保单状态'),
    subStatus: () => integer().enum(...Object.values(Constant.Policy.SubStatus)).desc('保单子状态'),
    type: () => integer().desc('保单类型').enum(...Object.values(Constant.Policy.Type)),
    info: () => require('./info')(),
    electronic: () => require('./electronic')(),
    from: () => integer().enum(...Object.values(Constant.Policy.From)).desc('保单来自的平台'),
    reservation: () => require('./reservation')(),
    renewalPayment: () => require('./renewal_payment')(),
    group: require('./group'),
});
