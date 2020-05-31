import * as controller from './controller';

const wrap = async function ({
    func, beforeProviderMiddleware = undefined, afterProviderMiddleware = undefined
}) {
    return async (job) => {
        // TODO: 对job里的参数进行加工
        try {
            await func({ job, request: job.attrs.data });
        } catch (err) {
            Logger.record(err);
            Logger.error(err);
            throw new Error(err);
        }
    };
};

export default function (app: any) {
    app.define('deletePicture', wrap({ func: controller.deletePicture }));
    app.define('testJob', wrap({ func: controller.testJob }));
}
