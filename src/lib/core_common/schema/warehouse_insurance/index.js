const { object, integer, array, string } = require("@qtk/schema").schema;

const frontend = require('./frontend');
const frontendBase = require('./frontend_base');
const frontendUpdate = require('./frontend_update');
const backend = require('./backend');

module.exports = () => ({
    frontend,
    frontendBase,
    backend,
    frontendUpdate
});
