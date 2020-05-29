const { object, integer, array, empty, oneOf, boolean, string } = require('@qtk/schema').schema;
const Common = require('../../common');
const Constant = require('../../../constant');

module.exports = (extraData = object().desc('每个被保人私有属性').additionalProperties(true), additionRequire = []) => object({
    name: string().maxLength(30).desc('被保人名字'),
    identityType: Common().identityType(),
    identity: Common().identity(),
    mobile: oneOf(
        string().pattern(/^$/).desc('空手机号'),
        Common().mobile(),
    ).desc('要么为空，要么为正确的手机号'),
    gender: Common().gender(),
    birth: string(),
    extraData
})
    .require('name', 'identityType', 'identity', 'extraData', ...additionRequire)
    .desc('被保人');
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
