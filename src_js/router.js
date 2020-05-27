const controller = require('./controller')

const wrap = ({ func, beforeProviderMiddleware, afterProviderMiddleware }) => {
    return async (job) => {
        // TODO: 对job里的参数进行加工
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
    app.define('deletePicture', wrap({ func: controller.deletePicture }))
    app.define('testJob', wrap({ func: controller.testJob }))
}
