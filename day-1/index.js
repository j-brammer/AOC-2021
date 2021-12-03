const Files = require("../utils/files");
const data = Files.readNumbersFromFile(__dirname + '/input.txt');

function calculateSolution(data) {
    solution = 0;
    for (let i = 0; i <= data.length; i++){
        if (i == 0){
            console.log("Initial value; no calculation to be made");
        } else if (data[i] > data[i - 1]) {
            solution++;
        }
    }
    return solution;
}

var part1Solution = calculateSolution(data);

var slidingDataSet = [];
for (let i = 2; i < data.length; i++){
    slidingDataSet.push(data[i] + data[i - 1] + data[i - 2]);
}

var part2Solution = calculateSolution(slidingDataSet);

console.log("Part 1 Solution: ", part1Solution);
console.log("Part 2 Solution: ", part2Solution);

