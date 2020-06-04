global.PROJECT_ROOT = __dirname;
global.ENV = process.env.ENV || 'dev';
global.Common = require(`${PROJECT_ROOT}/common`);
