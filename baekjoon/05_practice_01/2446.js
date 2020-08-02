// 별 찍기 - 9
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(num) {
let answer = '';
let count = num * 2 - 1;
let star = count;
let blank = 0;

while(count > 0) {
    for (let i = 0; i < blank; i++) {
        answer += ' ';
    }
    for (let i = star; i > 0; i--) {
        answer += '*';
    }
    answer += '\n';
    count--;
    if (count < num) {
        star+=2;
        blank--;
    } else {
        star-=2;
        blank++;
    }
}

console.log(answer);
    rl.close();
}).on("close", function() {
    process.exit();
});