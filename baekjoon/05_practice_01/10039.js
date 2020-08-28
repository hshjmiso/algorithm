// 평균 점수
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let answer = input.reduce((acc, cur) => cur < 40 ? acc + 40 : acc + +cur, 0);
    console.log(answer / 5);
    process.exit();
});