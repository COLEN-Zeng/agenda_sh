const define = require('../define')

const wrap = ({ func, beforeProviderMiddleware, afterProviderMiddleware }) => {
    return async (job) => {
        try {
            await func(job);
        } catch (err) {
            Logger.record(err)
            Logger.error(err);
            throw new Error(err)
        }
    };
};


module.exports = (app) => {
    app.define('deletePicture', wrap({ func: define.deletePicture }))
    app.define('testJob', wrap({ func: define.testJob }))
}
