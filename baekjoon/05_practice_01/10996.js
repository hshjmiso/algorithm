// 별 찍기 - 21
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(num) {
    let answer = '';
    const bottom = num / 2 | 0;
    const top = num - bottom;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < top; j++) {
            answer += '* ';
        }
        answer += '\n'
        for (let j = 0; j < bottom; j++) {
            answer += ' *';
        }
        answer += '\n'
    }
    console.log(answer);
    rl.close();
}).on("close", function() {
    process.exit();
});