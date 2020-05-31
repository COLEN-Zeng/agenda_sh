import { _global } from "./_global";

(global as any as _global).PROJECT_ROOT = __dirname;
(global as any as _global).ENV = process.env.ENV;
(global as any as _global).Common = require(`${PROJECT_ROOT}/common`);

export { };
