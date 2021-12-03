const Files = require("../utils/files");
const data = Files.read2Dinstructions(__dirname + '/input.txt');

var depth = 0;
var position = 0;

data.map(instruction => {
    if(instruction[0] === "down") {
        depth += instruction[1];
    } else if(instruction[0] === "up") {
        depth -= instruction[1];
    } else {
        position += instruction[1];
    }
})

console.log("Final position: ", position);
console.log("Final depth: ", depth);

console.log("Solution: ", position * depth);