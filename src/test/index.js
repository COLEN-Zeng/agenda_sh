const fs = require('fs');
const path = require('path');

const picturesDir = '/home/colen/Pictures/';
console.log(
    fs.readdirSync(picturesDir).filter(fileName =>
        fs.statSync(path.join(picturesDir, fileName)).isFile()
    )
);
