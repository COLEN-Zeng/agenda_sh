const { array, integer, string, object, empty, boolean } = require('@qtk/schema').schema;
const Constant = require('../../../constant');

module.exports = () => ({
    type: integer().enum(...Object.values(Constant.ElectronicType)).desc(JSON.stringify(Constant.ElectronicType)),
    list: array(string().desc('ul链接')).desc('链接数组'),
});