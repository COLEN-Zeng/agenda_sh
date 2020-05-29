const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const common = require('../common');

module.exports = () => ({
    id: () => common().uuid('批单id'),
    no: () => string().desc('批单号'),
    info: (extraData) => require('./info')(extraData),
    electronic: () => require('./electronic')(),
});