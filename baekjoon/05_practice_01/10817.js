// 세 수
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(v => +v);
})
.on('close', function () {
    console.log(input.sort((a, b) => a - b)[1]);
    process.exit();
});