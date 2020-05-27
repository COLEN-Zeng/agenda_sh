const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;

module.exports = () => ({
    info: (extraData) => require('./info')(extraData),
});