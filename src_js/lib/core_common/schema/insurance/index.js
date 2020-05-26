const { string, array, integer, object, empty, boolean } = require('@qtk/schema').schema;
const Constant = require('../../constant');

module.exports = () => ({
    id: () => string().desc('险种id'),
    type: () => string().length(6).desc(JSON.stringify(Constant.Insurance.Type))
});
