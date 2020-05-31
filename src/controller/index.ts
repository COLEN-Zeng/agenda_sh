import * as fs from 'fs';
import * as os from 'os';
import * as moment from 'moment';
import * as path from 'path';

export async function deletePicture({ job, request }) {
    Logger.debug(JSON.stringify(request));
    const { keyword = moment().format('YYYYMMDD'), deleteFolder = 'Pictures' } = request || {};
    const homedir = os.homedir();
    const deleteDir = path.join(homedir, deleteFolder);

    Logger.debug('deletePicture', `delete ${deleteFolder} include ${keyword} file`);

    if (!fs.existsSync(deleteDir)) {
        throw new Error('文件夹不存在:' + deleteDir);
    }
    const todayPicturesDirList = fs.readdirSync(deleteDir)
        .filter(fileName =>
            fs.statSync(path.join(deleteDir, fileName)).isFile() &&
            fileName.includes(keyword)
        );

    if (todayPicturesDirList.length === 0) {
        job.repeatAt('5:30pm');
        await job.remove();
        Logger.debug('删除任务');
    }
    todayPicturesDirList.forEach(fileName => {
        fs.unlinkSync(path.join(deleteDir, fileName));
    });
    Logger.debug(JSON.stringify(todayPicturesDirList));
}

export async function testJob({ job, request }) {
    Logger.debug(new Date(), + 'testJob，这是一个测试');
    Logger.debug(JSON.stringify(request));
    Logger.debug(JSON.stringify(job));
};

export async function renewingCoverage(job) {
    Logger.debug('续保服务');
    // 对接以下产品的续保保单数据接收：
    // 安联京彩一生
    // 安联臻爱感恩版
    // 安联住院宝
    // 安联臻爱2020
    // 安联百万玫瑰
    // 如果接口为回调形式，则只需开发保单回调接口，续保成功后，按照原出单费率比例创建出单收入（不创建邀请奖励）
    // 如果接口为主动查询，则在距离保单止期的当天、后1天、后2天、后3天的24点进行查询，续保成功后，按照原出单费率比例创建出单收入（不创建邀请奖励）
    // 获取到续保保单数据后，关闭原保单的续保推送提醒
};

export * from './daily_wechat_msg.send';
