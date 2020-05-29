const { object, integer, array, empty, oneOf, boolean, string, number } = require('@qtk/schema').schema;
const Constant = require('../../../constant');

module.exports = () => oneOf(
    object({
        mode: Constant.SettleMode.ONCE,
        insuranceCompanyToOrg: number(),
        orgToJobRankAgent: number(),
        orgToJobRankDirector: number()
    }).require('mode', 'insuranceCompanyToOrg', 'orgToJobRankAgent', 'orgToJobRankDirector'),
    {
        mode: Constant.SettleMode.STAGE,
        insuranceCompanyToOrg: number(),
        orgToAgent: object().additionalProperties(true)
    },
);