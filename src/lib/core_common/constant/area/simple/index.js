const full = require(__dirname + '/../full');

const simplify = (array) => {
    return array.map(_ => {
        if (_.children !== undefined) {
            return {
                label: _.label,
                value: _.areaCode,
                children: simplify(_.children)
            };
        }
        else {
            return {
                label: _.label,
                value: _.areaCode
            };
        }
    });
};

module.exports = simplify(full);
