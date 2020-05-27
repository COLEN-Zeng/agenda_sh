const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../../common');
const Insurance = require('../../insurance');
const Account = require('../../account');
const Quotation = require('../../quotation');

module.exports = () => ({
    id: Common().uuid('议价单id'),
    insuranceId: Insurance().id(),
    insuranceType: Insurance().type(),
    quotationId: Quotation().id(),
    quoteId: Quotation().quote().id(),
    traceId: string().desc('跟踪id'),
    companyId: string(),
    accountId: Account().id(),
    extraData: object().additionalProperties(true),
    createdAt: Common().timestamp(),
    modifiedAt: Common().timestamp(),
    status: integer().enum(0, 1).desc('0:未处理, 1:已处理'),
});
