import os = require('os');
import fs = require('fs');
import path = require('path');
import express = require('express');
import Agenda = require('agenda');
import AgendaSh = require('agendash');
import L = require('nirvana-logger');
import moment = require('moment');

const Logger = L('agenda');
const app = express();

const agenda = new Agenda({
    db: {
        address: 'mongodb://127.0.0.1/agenda',
        options: { useUnifiedTopology: true }
    }
});

agenda.define('deletePicture', async (job: { attrs: { data: { keyword: string, deleteFolder: string } } }) => {
    const { keyword = moment().format('YYYYMMDD'), deleteFolder = 'pictures' } = job.attrs.data;
    const homedir: string = os.homedir();
    const deleteDir = path.join(homedir, deleteFolder);

    Logger('deletePicture', `delete ${deleteFolder} include ${keyword} file`);
    const todayPicturesDirList: string[] = fs.readdirSync(deleteDir)
        .filter(fileName =>
            fs.statSync(path.join(deleteDir, fileName)).isFile() &&
            fileName.includes(keyword)
        );
    todayPicturesDirList.forEach(fileName => {
        fs.unlinkSync(path.join(deleteDir, fileName));
    });
    console.log(todayPicturesDirList);
});

agenda.define('testJob', function (job: { attrs: { data: any; }; }, done: (arg0: any) => void) {
    Logger('testJob', new Date(), job.attrs.data);
});

(async function () {
    await agenda.start()
        .then(() => console.log('agenda start'));
    await agenda.every('2 minutes', 'deletePicture');
    await agenda.every('1 minutes', 'testJob', { name: 'colen' });
})();

app.listen(3000);
app.use('', AgendaSh(agenda, { title: '定时删除图片' }));
