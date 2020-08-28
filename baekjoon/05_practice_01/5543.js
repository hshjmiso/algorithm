// 상근날드
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const hamburger = Math.min(input[0], input[1], input[2]);
    const drink = Math.min(input[3], input[4]);
    console.log(hamburger + drink - 50)
    process.exit();
});