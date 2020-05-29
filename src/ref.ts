interface _global {
    PROJECT_ROOT: string;
    ENV: string;
    Common: any;
}

(global as any as _global).PROJECT_ROOT = __dirname;
(global as any as _global).ENV = process.env.ENV;
(global as any as _global).Common = require(`${PROJECT_ROOT}/common`);

export { };
