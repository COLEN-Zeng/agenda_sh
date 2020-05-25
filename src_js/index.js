import '../ref';
import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import * as AgendaServer from './common/agenda_server';
import * as L from 'nirvana-logger';
import * as moment from 'moment';

const Logger = L('agenda');

let serverHost = 'localHost', serverPort = 3000, env = 'dev', serverName = 'agenda',
    dbHost = 'localHost', dbPort = 27017, dbName = 'agenda'
const server = new AgendaServer(serverHost, serverPort, env, serverName,
    dbHost, dbPort, dbName);

agenda.define('deletePicture', deletePicture);

agenda.define(
    'testJob',
    function (job, done) {
        Logger('testJob', new Date(), job.attrs.data);
    }
);

(async function () {
    await agenda.start()
        .then(() => console.log('agenda start'));
    agenda.on('start', job => {
        console.log('Job %s starting', job.attrs.name);
    });
    await agenda.every('2 minutes', 'deletePicture', {});
    await agenda.every('1 minutes', 'testJob', { name: 'colen' });
})();

app.listen(3000);
app.use('', AgendaSh(agenda, { title: '定时删除图片' }));

async function deletePicture(job) {
    const { keyword = moment().format('YYYYMMDD'), deleteFolder = 'pictures' } = job.attrs.data || {};
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
}
