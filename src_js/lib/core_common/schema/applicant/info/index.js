const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../../common');
const Constant = require('../../../constant');

module.exports = (extraData = object().desc('投保人私有属性').additionalProperties(true), additionRequire = []) => object({
    type: integer().desc('0:个人, 1:公司'),
    name: string().maxLength(30).desc('投保人名字'),
    identityType: Common().identityType(),
    identity: Common().identity(),
    mobile: Common().mobile(),
    gender: Common().gender(),
    birth: string(),
    extraData
})
    .require('type', 'name', 'identityType', 'identity', 'extraData', ...additionRequire)
    .desc('投保人');
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