const { object, integer, array, empty, oneOf, boolean, string, number } = require('@qtk/schema').schema;
const Constant = require('../../../constant');
const Common = require('../../common');
const Applicant = require('../../applicant');
const Insurance = require('../../insurance');
const Insured = require('../../insured');
const Beneficiary = require('../../beneficiary');
const Entrance = require('../../entrance');
const Electronic = require('../electronic');
const Account = require('../../account');
const basicRequired = [
    'type',
    'insuranceId',
    'frontendProcessId',
    'insuranceType',
    'no',
    'companyId',
    'applicant',
    'insuredList',
    'subStatus',
    'premium',
    'insuredAt',
    'effectedAt',
    'quotePlan',
    'beneficiary',
    'periodUnit',
    'payPeriod',
    'payPeriodUnit',
    'accountId'
];

module.exports = () => object({
    type: integer().desc('保单类型').enum(Constant.Policy.Type.INDIVIDUAL_RESERVATION),
    insuranceId: Insurance().id(),
    accountId: Account().id(),
    frontendProcessId: "reservationInsurance",
    insuranceType: Insurance().type(),
    no: string().desc('保单号'),
    companyId: string(),
    applicant: Applicant().info(
        object({
            height: integer().min(1).max(999).desc('身高，单位厘米'),
            weight: integer().min(1).max(999).desc('体重，单位公斤'),
            annualIncome: integer().min(0).max(9999999).desc('年收入,单位:万元'),
            email: string().desc('邮箱'),
            job: string().desc('职业').maxLength(30),
            haveSocialInsurance: boolean().desc('是否有社保'),
            province: string().desc('省'),
            city: string().desc('市'),
            country: string().desc('区'),
            street: string().desc('街道信息').maxLength(100),
        })
            .require('province', 'city', 'country', 'street')
            .additionalProperties(false),
        [
            'mobile', 'gender', 'birth'
        ]
    ),
    insuredList: array(
        Insured().info(
            object({
                height: integer().min(1).max(999).desc('身高，单位厘米'),
                weight: integer().min(1).max(999).desc('体重，单位公斤'),
                annualIncome: integer().min(0).max(9999999).desc('年收入,单位:万元'),
                email: string().desc('邮箱'),
                job: string().desc('职业').maxLength(30),
                haveSocialInsurance: boolean().desc('是否有社保'),
                province: string().desc('省'),
                city: string().desc('市'),
                country: string().desc('区'),
                street: string().desc('街道信息').maxLength(100),
                target: string().desc('标的物'),
                relationWithApplicant: integer().desc('与投保人关系').enum(...Object.values(Constant.InsuredRelationWithApplicant)),
            })
                .require('province', 'city', 'country', 'street', 'relationWithApplicant')
                .additionalProperties(false),
            [
                'mobile', 'gender', 'birth'
            ]
        )
    ).desc('被保人'),
    subStatus: integer().enum(
        Constant.Policy.SubStatus.INSURED_WAIT_RECEIPT,
        Constant.Policy.SubStatus.INSURED_WAIT_REVISIT,
        Constant.Policy.SubStatus.INSURED,
    ).desc('保单子状态'),
    premium: Common().money().min(1).desc('保费'),
    insuredAt: Common().timestamp().desc('承保时间'),
    effectedAt: Common().timestamp().desc('生效时间'),
    expiredAt: Common().timestamp().desc('失效时间'),
    receiptAt: Common().timestamp().desc('回执时间'),
    revisitAt: Common().timestamp().desc('回访时间'),
    quotePlan: {
        plan: {
            main: {
                amount: number().desc('主险保额'),
                premium: Common().money().min(1).desc('主险保费'),
            }
        },
        premium: Common().money().min(1).desc('首年总保费')
    },
    extraData: object().additionalProperties(true),
    beneficiary: object({
        isStatutoryBeneficiary: boolean().desc('是否是法定受益人'),
        list: array(
            Beneficiary().info(
                undefined,
                ['gender', 'birth']
            )
        ).maxItems(5),
    }).require('isStatutoryBeneficiary'),
    period: integer().desc('保障期限'),
    periodUnit: Common().periodUnit('y', 'M', 'age', 'd'),
    payPeriod: integer().desc('缴费期限'),
    payPeriodUnit: Common().periodUnit('y', 'M', 'age', 'once'),
    electronic: Electronic(),
})
    .if.properties({periodUnit: 'd'})
    .then.require(...basicRequired, 'expiredAt')
    .else
    .require(...basicRequired, 'period')
    .endIf;
