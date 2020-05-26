const { string, array, integer, object, empty, boolean } = require('@qtk/schema').schema;
const account = require('../../account');
const common = require('../../common');
const insurance = require('../../insurance');
const Constant = require('../../../constant');

module.exports = () => object({
    id: insurance().id(),

    type: string().desc("险种类型"),
    companyId: string()
        .enum(...Object.values(Constant.Company.Id))
        .desc("公司id"),

    saleType: integer().enum(
        ...Object.values(Constant.SaleType)
    ),
    state: integer().enum(
        ...Object.values(Constant.WareHouseInsuranceState)
    ),

    orgSaleBlackList: array(account().id()),
    applicantIdentitySaleBlackList: array(
        integer().enum(
            ...Object.values(Constant.ApplicantIdentity)
        )
    ),
    shareToInsureBlackList: array(
        integer().enum(
            ...Object.values(Common.Constant.ApplicantIdentity)
        )
    ).desc('分享投保黑名单'),

    frontendProcessId: string().desc("前端流程id"),

    createdAt: integer().desc("创建时间"),
    modifiedAt: integer().desc("最近修改时间"),

    //犹豫期
    hesitantPeriod: integer().desc('犹豫期'), 
    hesitantPeriodUnit: common().periodUnit().desc('犹豫期单位'),

    hidden: boolean().desc('是否在我的产品里可见'),

    useProductTemplate: boolean().desc('是否使用产品工厂模板'),
    premiumRate: object().additionalProperties(true),
    creatorOrgAccountId: string().desc('险种创建者coreAccountId,系统级为"",预约险种为创建者核心id')
})
    .require(
        "id",
        "type",
        "companyId",
        "saleType",
        "state",
        "orgSaleBlackList",
        "applicantIdentitySaleBlackList",
        "frontendProcessId",
        "createdAt",
        "modifiedAt",
        "creatorOrgAccountId"
        // "name",
        // "companyName",
        // "banner",
        // "docs"
    )
    .additionalProperties(true);