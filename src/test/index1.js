const os = require('os');
const fs = require('fs');
const path = require('path');
const express = require('express');
const Agenda = require('agenda');
const AgendaSh = require('agendash');
const L = require('nirvana-logger');
const moment = require('moment');

const Logger = L('agenda|debug')
const app = express();

const agenda = new Agenda({
    db: {
        address: 'mongodb://127.0.0.1/agenda',
        options: { useUnifiedTopology: true }
    }
});

agenda.define('deletePicture', async (job) => {
    const { keyword = moment().format('YYYYMMDD'), deleteFolder = 'pictures' } = job.attrs.data;
    const homedir = os.homedir();
    const deleteDir = path.join(homedir, deleteFolder);

    Logger('deletePicture', `delete ${deleteFolder} include ${keyword} file`);
    const todayPicturesDirList = fs.readdirSync(deleteDir)
        .filter(fileName =>
            fs.statSync(path.join(deleteDir, fileName)).isFile() &&
            fileName.includes(keyword)
        );
    todayPicturesDirList.forEach(fileName => {
        fs.unlinkSync(path.join(deleteDir, fileName));
    });
    console.log(todayPicturesDirList);
});

agenda.define('testJob', function (job, done) {
    Logger('testJob', new Date(), job.attrs.data);
});

(async function () {
    await agenda.start()
        .then(() => console.log('agenda start'));
    agenda
        .on('start', job => {
            console.log('Job %s starting', job.attrs.name);
        })
        .on('complete', job => {
            console.log(`Job ${job.attrs.name} finished`);
        })
        .on('success:send email', job => {
            console.log(`Sent Email Successfully to ${job.attrs.data.to}`);
        })
        .on('fail:send email', (err, job) => {
            console.log(`Job failed with error: ${err.message}`);
        })


    await agenda.every('2 minutes', 'deletePicture');
    await agenda.every('1 minutes', 'testJob', { name: 'colen' });
})();

app.listen(3000);
app.use('', AgendaSh(agenda, { title: '定时删除图片' }));
