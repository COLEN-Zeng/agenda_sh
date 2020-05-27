const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Constant = require('../../../constant');
const Common = require('../../common');
const Payment = require('../../payment');
const Account = require('../../account');
const Applicant = require('../../applicant');
const Insurance = require('../../insurance');
const Insured = require('../../insured');
const QuotePlan = require('../../quotation/quote');
const Beneficiary = require('../../beneficiary');
const Electronic = require('../electronic');
const Entrance = require('../../entrance');
const RenewalPayment = require('../renewal_payment');

module.exports = () => object({
    id: Common().uuid(),
    structure: integer().enum(Constant.Policy.Structure.SIMPLE).desc('0:单个保单号单(simple), 2:组合单(combination)'),
    from: integer().enum(...Object.values(Constant.Policy.From)).desc('保单来自的平台'),
    type: integer().desc('保单类型').enum(...Object.values(Constant.Policy.Type)),
    insuranceId: Insurance().id(),
    entranceId: Entrance().id(),
    frontendProcessId: string(),
    insuranceType: Insurance().type(),
    no: string().desc('保单号'),
    companyId: string(),
    companyArea: string().desc('保险(分)公司所在地, 可选'),
    traceId: string().desc('跟踪id'),
    applicant: Applicant().info(),
    insuredList: array(Insured().info()).desc('被保人'),
    status: integer().enum(...Object.values(Constant.Policy.Status)).desc('保单状态'),
    subStatus: integer().enum(...Object.values(Constant.Policy.SubStatus)).desc('保单子状态'),
    paymentId: Payment().id(),
    accountId: Account().id(),
    orgAccountId: Account().id(),
    premium: Common().money().min(0).desc('保费'),
    firstPremium: Common().money().min(0).desc('保费'),
    createdAt: Common().timestamp().desc('创建时间'),
    paidAt: Common().timestamp().desc('支付时间'),
    insuredAt: Common().timestamp().desc('承保时间'),
    refundAt: Common().timestamp().desc('退款时间'),
    effectedAt: Common().timestamp().desc('生效时间'),
    expiredAt: Common().timestamp().desc('失效时间'),
    receiptAt: Common().timestamp().desc('回执时间'),
    revisitAt: Common().timestamp().desc('回访时间'),
    modifiedAt: Common().timestamp().desc('最近修改时间'),
    surrenderAt: Common().timestamp().desc('退保时间'),
    quotePlan: QuotePlan().info(),
    electronic: Electronic(),
    quotationId: string(),
    extraData: object().additionalProperties(true),
    delivery: {
        name: string().desc('收件人'),
        mobile: Common().mobile(),
        address: {
            province: string().desc('省'),
            city: string().desc('市'),
            country: string().desc('区'),
            street: string().desc('街道')
        }
    },
    beneficiary: object({
        isStatutoryBeneficiary: boolean().desc('是否是法定受益人'),
        list: array(Beneficiary().info()),
    }).require('isStatutoryBeneficiary'),
    proposalNo: string().desc('投保单号'),
    payFailedReason: string().desc('支付失败原因'),
    insureFailedReason: string().desc('承保失败原因'),
    surrender: object({
        type: integer().desc('退保类型：1: 犹豫期退保, 2:普通退保'),
        refundPremium: integer().desc('退还保费'),
        material: array().desc('退保材料')
    }).desc('退保'),
    period: integer().desc('保障期限'),
    periodUnit: string().desc('保障期限单位'),
    payPeriod: integer().desc('缴费期限'),
    payPeriodUnit: string().desc('缴费期限单位'),
    renewal: object({
        record: array(
            object({
                payPeriodNum:integer().desc('所缴费期数 年/月'),
                renewalAt: Common().timestamp().desc('收取保费时间'),
                premium: Common().money().desc('实收保费'),
            })
        ).desc('续期记录信息,后期加上的字段，默认为空'),
        payment: RenewalPayment()
    })
        .additionalProperties(false)
        .desc('续期/续保信息')
})
    .if.properties({ structure: Constant.Policy.Structure.SIMPLE })
    .then.require('id', 'structure', 'from', 'type', 'entranceId', 'insuranceType', 'insuranceId', 'companyId', 'applicant', 'insuredList', 'status', 'subStatus', 'orgAccountId', 'premium', 'createdAt', 'effectedAt', 'expiredAt', 'modifiedAt', 'period', 'periodUnit', 'payPeriod', 'payPeriodUnit')
    .else
    .require('id', 'structure', 'policies')
    .endIf;
