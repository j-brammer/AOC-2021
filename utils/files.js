'use strict';

const fs = require('fs');

class Files {
    static readNumbersFromFile(path, encoding = 'utf8') {
        var valuesAsText = fs.readFileSync(path, { encoding: encoding }).split("\n");
        return valuesAsText.map(value => parseInt(value));
    }

    static read2Dinstructions(path, encoding = 'utf8') {
        var valuesAsText = fs.readFileSync(path, { encoding: encoding }).split("\n");
        return valuesAsText.map(line => {
            var values = line.split(' ');
            return [
                values[0],
                parseInt(values[1])
            ];
        });
    }
}

module.exports = Files;