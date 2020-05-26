const fs = require('fs')
const os = require('os')
const moment = require('moment')
const path = require('path')

exports.deletePicture = async function deletePicture(job) {
    Logger.record(JSON.stringify(job))
    const { keyword = moment().format('YYYYMMDD'), deleteFolder = 'Pictures' } = job.attrs.data || {};
    const homedir = os.homedir();
    const deleteDir = path.join(homedir, deleteFolder);

    Logger.record('deletePicture', `delete ${deleteFolder} include ${keyword} file`);

    if (!fs.existsSync(deleteDir)) {
        throw new Error('文件夹不存在:' + deleteDir)
    }
    const todayPicturesDirList = fs.readdirSync(deleteDir)
        .filter(fileName =>
            fs.statSync(path.join(deleteDir, fileName)).isFile() &&
            fileName.includes(keyword)
        );

    if (todayPicturesDirList.length === 0) {
        job.repeatAt('5:30pm');
        await job.remove();
        Logger.record('删除任务')
    }
    todayPicturesDirList.forEach(fileName => {
        fs.unlinkSync(path.join(deleteDir, fileName));
    });
    Logger.record(JSON.stringify(todayPicturesDirList));
}

exports.testJob = async function (job, done) {
    Logger.record(new Date(), + 'testJob，这是一个测试');
}

exports.renewingCoverage = async function (job) {
    Logger.record('续保服务')
    // 对接以下产品的续保保单数据接收：
    // 安联京彩一生
    // 安联臻爱感恩版
    // 安联住院宝
    // 安联臻爱2020
    // 安联百万玫瑰
    // 如果接口为回调形式，则只需开发保单回调接口，续保成功后，按照原出单费率比例创建出单收入（不创建邀请奖励）
    // 如果接口为主动查询，则在距离保单止期的当天、后1天、后2天、后3天的24点进行查询，续保成功后，按照原出单费率比例创建出单收入（不创建邀请奖励）
    // 获取到续保保单数据后，关闭原保单的续保推送提醒
}
