// X보다 작은 수
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let answer = '';
    let X = +input[0].split(' ')[1];
    input[1].split(' ').forEach(v => {
        if (v < X) {
            answer += `${v} `;
        }
    });
    console.log(answer);
  
    process.exit();
});