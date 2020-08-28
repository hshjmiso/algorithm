// 별 찍기 - 13
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(num) {
    let answer = '';
    let i = 0;
    for (i = 0; i < num; i++) {
        for (j = 0; j <= i; j++) {
            answer += '*';
        }
        answer += '\n';
    }
    for (i = num - 1; i >= 0; i--) {
        for (j = 1; j <= i; j++) {
            answer += '*';
        }
        answer += '\n';
    }
    console.log(answer);
    rl.close();
}).on("close", function() {
    process.exit();
});