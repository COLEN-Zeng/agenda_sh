module.exports = async (app) => Promise.all([
    app.every('1 minutes', 'deletePicture', {}),
    app.every('1 minutes', 'testJob', { name: 'colen' }),
    // app.every('', '', { ppppp: 'HeroNeverDie' })
]);
