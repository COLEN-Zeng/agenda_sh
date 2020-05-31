const { string, array, integer, object, empty, boolean } = require('@qtk/schema').schema;
const Constant = require('../../../constant');
const Common = require('../../common');
const Account = require('../../account');
const Quote = require('../quote');
const Entrance = require('../../entrance');

module.exports = () => object({
    id: Common().uuid().desc('报价单id'),
    accountId: Account().id(),
    entranceId: Entrance().id(),
    frontendProcessId: string(),
    traceId: string().desc('追踪ID'),
    from: integer().enum(...Object.values(Constant.Policy.From)).desc('来自的平台'),
    quoteList: array().item(Quote().info()),
    createdAt: Common().timestamp(),
    modifiedAt: Common().timestamp(),
    extraData: object().additionalProperties(true)
})
    .desc('报价任务数据')
    .require(
        'id',
        'accountId',
        'entranceId',
        'createdAt',
        'modifiedAt',
        'from',
        'quoteList',
        'extraData'
    );
