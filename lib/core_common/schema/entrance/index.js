const { string, array, integer, object, empty, boolean } = require('@qtk/schema').schema;
const Constant = require('../../constant');

module.exports = () => ({
    id: () => string().desc('入口id'),
    info: () => object({
        id: string().maxLength(60),
        mode: string(),
        selectAll: boolean().desc('选择所有可用的险种竞价,仅团险入口有此字段'),
        insuranceId: string(),
        insuranceIds: array(string()),
        orgAccountId: string().maxLength(189),
        frontendProcessId: string().desc('前端流程id')
    })
        .if.properties({mode: [
            Constant.Mode.NORMAL,
            Constant.Mode.THIRD_PARTY_H5
        ]})
        .then.require('id', 'mode', 'insuranceId', 'orgAccountId', 'frontendProcessId')
        .else.require('id', 'mode', 'selectAll', 'insuranceIds', 'orgAccountId', 'frontendProcessId')
        .endIf
});
