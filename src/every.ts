export default function async(app: any) {
    Promise.all([
        app.every('1 minutes', 'deletePicture', {}),
        app.every('0 1,2 16 * * *', 'testJob', { name: 'colen' }),
        app.every('0 0/30 8 * * *', '', { ppppp: 'HeroNeverDie' })
    ]);
}
