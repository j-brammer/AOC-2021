const Files = require("../utils/files");
const data = Files.readNumbersFromFile(__dirname + '/input.txt')

upCount = 0;
for (let i = 0; i <= data.length; i++){
    if (i == 0){
        console.log("Initial value; no calculation to be made");
    } else if (data[i] > data[i - 1]) {
        upCount++;
    }
}

console.log("Total count of increases in depth: ", upCount);
