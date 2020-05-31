const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../../common');
const Constant = require('../../../constant');

module.exports = (extraData = object().desc('受益人私有属性').additionalProperties(true), additionRequire = []) => object({
    relationWithInsured: integer().desc('与被保人关系').enum(...Object.values(Constant.BeneficiaryRelationWithInsured)),
    name: string().maxLength(30).desc('投保人名字'),
    identityType: Common().identityType(),
    identity: Common().identity(),
    gender: Common().gender(),
    birth: string(),
    rate: integer().desc('受益比例'),
    grade: integer().desc('受益顺序').enum(1, 2, 3),
    extraData
})
    .require('name', 'identityType', 'identity', 'extraData', 'relationWithInsured', 'rate', 'grade', ...additionRequire)
    .desc('受益人');
// .if.properties({identityType: Constant.IdentityType.ID_CARD})
// .then.properties({identity: string().length(18)})
// .elseIf.properties({identityType: Constant.IdentityType.PASSPORT})
// .then.properties({identity: string().minLength(3)})
// .elseIf.properties({identityType: Constant.IdentityType.RETURN})
// .then.properties({identity: string().minLength(8)})
// .elseIf.properties({identityType: Constant.IdentityType.TAIWAN})
// .then.properties({identity: string().minLength(8)})
// .elseIf.properties({identityType: Constant.IdentityType.MILITARY})
// .then.properties({identity: string().minLength(11).maxLength(17)})
// .elseIf.properties({identityType: Constant.IdentityType.POLICE})
// .then.properties({identity: string().minLength(11).maxLength(17)})
// .else.properties({identity: string()})
// .endIf;
