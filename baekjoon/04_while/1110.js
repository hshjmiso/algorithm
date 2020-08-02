// 더하기 사이클
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(num) {
    if (+num < 10) {
        num += '0';
    }
    let answer = 0;
    let checkNum = num;
    let temp = '';
    
    while(true) {
        answer++;
        temp = +checkNum[0] + +checkNum[1] + '';
        checkNum = checkNum[1] + temp[temp.length - 1];
        if (checkNum === num) {
            break;
        }
    }
    console.log(answer);
    rl.close();
}).on("close", function() {
    process.exit();
});