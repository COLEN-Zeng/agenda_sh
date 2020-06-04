const DayJs = require('dayjs');
const assert = require('assert');
export async function dailyWechatMsgSend({ request: { aaaaa, ppppp } }) {
    // 仅做简单的验证
    // assert(aaaaa === DayJs().format('YYYY-MM-DD'), '验证不通过');
    assert(ppppp === 'HeroNeverDie', '验证不通过');

    const taskList = ['policy_renewed'];

    // 访客统计消息, 每周只在周一推
    if (DayJs().day() === 1) {
        taskList.push('customer');
    }

    await H5.Personnel.dailyWechatMsgSend(taskList);
};
