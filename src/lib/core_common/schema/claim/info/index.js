const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../../common');
const Policy =  require('../../policy');
const Insurance = require('../../insurance');
const Account = require('../../account');
const Constant = require('../../../constant');

module.exports = () => object({
    id: string().length(32).desc('claimId'),
    reportor: {
        name: string().desc('报案人'),
        contactNumber: string().desc('报案人联系方式')
    },
    payee: {
        name: string().desc('领款人名字'),
        identityType: Common().identityType(),
        identity: Common().identity(),
        extraData: object().additionalProperties(true).desc('领款人私有属性')
    },
    extraData: object().additionalProperties(true),
    policyId: Policy().id(),
    createdAt: Common().timestamp(),
    modifiedAt: Common().timestamp(),
    status: integer().enum(...Object.values(Constant.Claim.Status)).desc('理赔状态'),
    claimFailedReason: string().desc('支付失败原因'),
    accountId: Account().id(),
    insuranceId: Insurance().id(),
}).require('id', 'insuranceId', 'reportor', 'payee', 'extraData', 'policyId', 'createdAt', 'modifiedAt', 'status', 'accountId');