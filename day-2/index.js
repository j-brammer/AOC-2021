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

console.log("Part 1 Final position: ", position);
console.log("Part 1 Final depth: ", depth);
console.log("Part 1 Solution: ", position * depth);
console.log('\n');

depth = 0;
position = 0;
var aim = 0;

data.map(instruction => {
    if(instruction[0] === "down") {
        aim += instruction[1];
    } else if(instruction[0] === "up") {
        aim -= instruction[1];
    } else {
        position += instruction[1];
        depth += (aim * instruction[1]);
    }
})

console.log("Part 2 Final position: ", position);
console.log("Part 2 Final depth: ", depth);
console.log("Part 2 Aim: ", aim);
console.log("Part 2 Solution: ", position * depth);