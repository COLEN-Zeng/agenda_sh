import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import moment = require('moment');

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
