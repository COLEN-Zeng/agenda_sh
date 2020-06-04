const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Constant = require('../../constant');

module.exports = () => ({
    id: () => string().length(32).desc('理赔单id'),
    info: () => require('./info')(),
    status: () => integer().enum(...Object.values(Constant.Claim.Status)).desc('理赔状态'),
});
