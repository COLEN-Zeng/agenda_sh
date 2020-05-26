const { number, object, array, string, integer, boolean } = require('@qtk/schema').schema;
const Constant = require('../../constant');

module.exports = () => ({
    money: () => integer().desc('钱'),
    timestamp: () => integer().min(0).max(253402271999).desc('时间戳，精确到秒,最大只能到9999-12-12 23:59:59'),
    date: () => string().pattern(/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/),
    uuid: () => string().pattern(/^[A-Fa-f0-9]{32}$/).desc('uuid'),
    gender: () => integer().enum(...Object.values(Constant.Gender)).desc(`性别:${JSON.stringify(Constant.Gender)}`),
    mobile: () => string().pattern(/^1\d{10}$/).desc('手机号'),
    image: (desc = '内部图片') => string().desc(desc),
    identityType: () => integer().enum(...Object.values(Constant.IdentityType)).desc(JSON.stringify(Constant.IdentityType)),
    identity: () => string().pattern(/^[a-zA-Z0-9]+$/).desc('证件号码').maxLength(21),
    periodUnit: (...unit) => {
        if (unit.length == 0) {
            return string().enum(...['y', 'Q', 'M', 'd', 'age', 'once']).desc('保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸');
        }
        else {
            return string().enum(...unit).desc('保障期限单位 y:年, Q:季度, M:月, d:日, age:岁, once:趸');
        }
    },
    percentage: () => number().min(0).max(1).desc('百分比'),
});
