const { string, array, integer, object, empty, boolean, oneOf, number } = require('@qtk/schema').schema;
const Common = require('../../common');
const QuoteStatus = require('../../../constant').Quote.Status;

module.exports = () => ({
    id: () => Common().uuid().desc('报价方案id'),
    info: (
        plan = object({}).additionalProperties(true),
        quoteDetail = object().additionalProperties(true).desc('报价详情')
    ) => object({
        id: Common().uuid().desc('报价方案id'),
        insuranceId: string().desc('险种id'),
        companyId: string().desc('公司id'),
        status: integer().desc('任务状态'),
        plan,
        premium: Common().money().desc('总保费'),
        firstPremium: integer().desc('首期保费'),
        commissionRate: number().desc('保险公司给机构的佣金比例'),
        effectedAt: Common().timestamp().desc('生效时间'),
        expiredAt: Common().timestamp().desc('保险止期'),
        quoteDetail,
        errorMessage: string().desc('错误信息'),
        modifiedAt: Common().timestamp().desc('修改时间'),
        period: integer().desc('保障期限'),
        periodUnit: string().desc('保障期限单位'),
        payPeriod: integer().desc('缴费期限'),
        payPeriodUnit: string().desc('缴费期限单位'),
    }).require(
        'id', 'insuranceId', 'companyId', 'status',
        'premium', 'effectedAt', 'modifiedAt',
        'period','periodUnit','payPeriod','payPeriodUnit'
    )
});
