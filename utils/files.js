'use strict';

const fs = require('fs');

class Files {
    static readNumbersFromFile(path, encoding = 'utf8') {
        var valuesAsText = fs.readFileSync(path, { encoding: encoding }).split("\n");
        return valuesAsText.map(value => parseInt(value));
    }
}

module.exports = Files;