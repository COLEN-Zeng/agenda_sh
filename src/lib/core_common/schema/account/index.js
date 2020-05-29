const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;

module.exports = () => ({
    id: () => string().maxLength(190).desc('操作者账户id')
});
