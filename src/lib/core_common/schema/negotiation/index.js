const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../common');

module.exports = () => ({
    id: () => Common().uuid('议价单id'),
    info: () => require('./info')(),
});
