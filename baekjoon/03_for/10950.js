// A+B - 3
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    let count = +input[0];
    let temp = null;
    for (let i = 1; i <= count; i++) {
        temp = input[i].split(" ");
        console.log(+temp[0] + +temp[1]);
    }
    process.exit();
});