const express = require('express');
const app = express();
const Agenda = require('agenda');
const AgenDash = require('agendash');
const Logger = require('nirvana-logger')('agenda');
const EventEmitter = require('mongodb').MongoClient;
const Mongodb = require('mongodb').MongoClient;

(async function () {
    // const db = await EventEmitter.connect('mongodb://127.0.0.1/agenda', { useUnifiedTopology: true }).collection();
    const db = await Mongodb.connect('mongodb://127.0.0.1/agenda', { useUnifiedTopology: true }).collection();

    const agenda = new Agenda().mongo(db, 'agenda');
    // const agenda = new Agenda({
    //     // mongo
    //     // db: {
    //     //     address: 'mongodb://127.0.0.1/agenda',
    //     //     // collection: 'jobCollectionName',
    //     //     options: { useUnifiedTopology: true }
    //     // }
    // }).mongo(db);
    await agenda.start()
        .then(_ => console.log('agenda start'));

    agenda.define('删除哪一天的图片？', async job => {
        console.log(`删除哪一天的图片？${JSON.stringify(job)}`);
    });
    agenda.define('testJob', function (job, done) {
        try {
            Logger('hello', job.attrs.data, new Date());
            done();
        } catch (err) {
            done(new Error(err));
        }
    });

    await agenda.every('2 minutes', '删除哪一天的图片？', '123');

    // await agenda.every('*/5 * * * *', 'console');
    app.listen(3000);
    app.use('', AgenDash(agenda, { title: '定时删除图片' }));
})();

