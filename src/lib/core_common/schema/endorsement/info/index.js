const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../../common');
const Account = require('../../account');
const Policy = require('../../policy');
const Insurance = require('../../insurance');
const Constant = require('../../../constant');
const Electronic = require('../electronic');
const Entrance = require('../../entrance');

module.exports = (extraData = object().additionalProperties(true).desc('批改内容')) => {
    return object({
        id: Common().uuid('批单id'),
        entranceId: Entrance().id(),
        frontendProcessId: string(),
        insuranceType: Insurance().type(),
        insuranceId: Insurance().id(),
        policyId: Common().uuid().desc('policyId'),
        policyNo: Policy().no(),
        traceId: string().desc('跟踪Id'),
        companyId: string(),
        accountId: Account().id(),
        extraData,
        no: string().desc('批单号'),
        electronic: Electronic(),
        createdAt: Common().timestamp(),
        modifiedAt: Common().timestamp(),
        paymentId: Common().uuid().desc('支付id'),
        paidAt: Common().timestamp(),
        refundAt: Common().timestamp(),
        refundId: Common().uuid().desc('退款id'),
        status: integer().enum(...Object.values(Constant.Endorsement.Status)),
    }).require('id', 'entranceId', 'insuranceType', 'insuranceId', 'policyId', 'policyNo', 'companyId', 'accountId', 'extraData', 'createdAt', 'modifiedAt', 'status');
};
