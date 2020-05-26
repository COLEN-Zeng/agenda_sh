const Common = require('../common');

module.exports = () => ({
    id: () => Common().uuid().desc('报价单id'),
    info: () => require('./info')(),
    quote: () => require('./quote')(),
});
