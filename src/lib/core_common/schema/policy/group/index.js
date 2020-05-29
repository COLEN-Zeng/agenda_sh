const {
    boolean,
    string,
    integer,
    object,
    array,
} = require('@qtk/schema').schema;

const qian = 1000;

const Account = require('../../account');
const Common = require('../../common');
const Constant = require('../../../constant');
const Insurance = require('../../insurance');
const Applicant = require('../../applicant');
const Electronic = require('../electronic');

const basicRequired = [
    'quotePlan',
    'frontendProcessId',
    'accountId',
    'premium',
    'companyId',
    'subStatus',
    'no',
    'payPeriod',
    'payPeriodUnit',
    'period',
    'periodUnit',
    'insuranceId',
    'insuranceType',
    'applicant',
    'insuredAt',
    'effectedAt',
    'expiredAt',
    'createdAt',
];

const basic = (quotePlan, extraData = {}) =>
    object({
        quotePlan,
        extraData,

        frontendProcessId: string().enum(
            'raceEnterprisePropertyInsurance',
            'raceLogisticsLiability'
        ),
        accountId: Account().id(),
        premium: Common()
            .money()
            .min(1)
            .desc('保费'),
        companyId: string(),
        companyArea: string(),
        subStatus: integer()
            .enum(
                Constant.Policy.SubStatus.INSURED_WAIT_RECEIPT,
                Constant.Policy.SubStatus.INSURED_WAIT_REVISIT,
                Constant.Policy.SubStatus.INSURED
            )
            .desc('保单子状态'),
        no: string().desc('保单号'),
        payPeriod: integer()
            .enum(1)
            .desc('缴费期限'),
        payPeriodUnit: Common().periodUnit('once'),
        period: integer()
            .min(1)
            .desc('保障期限'),
        periodUnit: Common().periodUnit('M'),
        insuranceId: Insurance().id(),
        insuranceType: Insurance().type(),

        applicant: Applicant().info({
            licenseImage: string().desc('证件照'),
        }),

        delivery: object()
            .properties({
                name: string().desc('姓名'),
                mobile: string().desc('电脑'),
                address: {
                    province: string().desc('省'),
                    city: string().desc('市'),
                    country: string().desc('区'),
                    street: string().desc('详细地址'),
                },
            })
            .requireAll()
            .additionalProperties(false)
            .desc('联系人信息'),

        createdAt: Common()
            .timestamp()
            .desc('投保日期 - 即报价单创建日期'),
        insuredAt: Common()
            .timestamp()
            .desc('承保时间'),
        effectedAt: Common()
            .timestamp()
            .desc('生效时间'),
        expiredAt: Common()
            .timestamp()
            .desc('失效时间'),
        receiptAt: Common()
            .timestamp()
            .desc('回执时间'),
        electronic: Electronic(),
    }).require(...basicRequired);

module.exports = () => ({
    enterpriseProperty: () =>
        basic(
            {
                plan: object()
                    .properties({
                        main: object()
                            .properties({
                                cangChuWuBaoZhang: Common()
                                    .money()
                                    .desc('仓储物'),
                                includeDecoration: boolean().desc('是否含装修'),
                                jiQiSheBeiGuZhang: Common()
                                    .money()
                                    .desc('机器设备'),
                                jianZuWuJiFuShuSheShiBaoZhang: Common()
                                    .money()
                                    .desc('建筑物'),
                                zhuangZhiJiaJuJiBanGongYongPinBaoZhang: Common().money(
                                    '装置, 家具'
                                ), //
                            })
                            .require('includeDecoration'),
                        rider: {
                            yiBanShiGuMianPei: {
                                type: 'complex',
                                yiBanShiGuMianPeiRate: {
                                    amount: string().enum(
                                        '5%',
                                        '10%',
                                        '15%',
                                        '20%',
                                        '25%',
                                        '30%'
                                    ),
                                },
                                yiBanShiGuMianPeiMoney: {
                                    amount: integer().enum(
                                        1 * qian,
                                        5 * qian,
                                        10 * qian,
                                        20 * qian,
                                        50 * qian,
                                        100 * qian
                                    ),
                                },
                            },
                            daoQieQiangJieMianPei: {
                                type: 'complex',
                                daoQieQiangJieMianPeiRate: {
                                    amount: string().enum(
                                        '5%',
                                        '10%',
                                        '15%',
                                        '20%',
                                        '25%',
                                        '30%'
                                    ),
                                },
                                daoQieQiangJieMianPeiMoney: {
                                    amount: integer().enum(
                                        1 * qian,
                                        5 * qian,
                                        10 * qian,
                                        20 * qian,
                                        50 * qian,
                                        100 * qian
                                    ),
                                },
                            },
                        },
                        termList: array().item(string()),
                    })
                    .require('main', 'rider'),
                quoteDetail: object()
                    .properties({
                        type: string().desc('保障类别'),
                        insuredObjectType: string().desc('工业等级'),
                        companyName: string().desc('公司名'),

                        specialAgreement: array()
                            .item(string())
                            .desc('特别约定'),
                    })
                    .require('type', 'insuredObjectType', 'companyName'),
            },
            object()
                .properties({
                    address: object({
                        province: string().desc('省'),
                        city: string().desc('市'),
                        country: string().desc('区'),
                        street: string().desc('详细地址'),
                    })
                        .requireAll()
                        .desc('标的地址'),
                    industry: string().desc('所属行业'),
                    insuredObjectImage: array()
                        .item(string())
                        .desc('标的相关图片'),

                    remark: string().desc('备注信息'),
                    firstBeneficiary: string().desc('受益人'), // 受益人
                })
                .require('address', 'industry', 'insuredObjectImage')
        ),

    logisticsLiability: () =>
        basic(
            {
                plan: {
                    main: {
                        amount: string().enum(
                            '80万（累计150万）',
                            '100万（累计200万）',
                            '150万（累计300万）',
                            '200万（累计400万）',
                            '250万（累计500万）',
                            '300万（累计600万）',
                            '500万（累计1000万）'
                        ),
                    },
                    rider: {
                        muCai: {
                            amount: string().enum('投保', '不投保'),
                        },
                        xinJiang: {
                            amount: string().enum('投保', '不投保'),
                        },
                        lengCangPin: {
                            amount: string().enum('投保', '不投保'),
                        },
                        jingMiZuJian: {
                            amount: string().enum('投保', '不投保'),
                        },
                        daoQieQiangJie: {
                            amount: string().enum('投保', '不投保'),
                        },
                    },
                },
                quoteDetail: object({
                    companyName: string().desc('公司名'),
                    cargoType: array()
                        .item(string())
                        .desc('货物种类'),
                    cargoImgList: array()
                        .item(string())
                        .desc('标的资质图片'),
                    transportType: string().desc('运输方式'),
                    estimatedRevenue: Common()
                        .money()
                        .desc('预估营收'),

                    remark: string().desc('备注'),
                    specialAgreement: array()
                        .item(string())
                        .desc('特别约定'),
                }).require(
                    'companyName',
                    'cargoType',
                    'cargoImgList',
                    'transportType',
                    'estimatedRevenue'
                ),
            },
            object().properties({
                firstBeneficiary: string().desc(
                    '受益人(同第一受益人), 因企业已经用了该字段, 为了统一, 这里依旧在前面加 first'
                ),
            })
        ),
});
