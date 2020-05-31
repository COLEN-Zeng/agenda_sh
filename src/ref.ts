import { _global } from "./_global";

(global as any as _global).PROJECT_ROOT = __dirname;
(global as any as _global).ENV = process.env.ENV;
import * as Common from './common';
(global as any as _global).Common = Common;

export { };
