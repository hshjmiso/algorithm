// 별 찍기 - 1
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(num) {
  let answer = '';
  for (let i = 1; i <= num; i++) {
      for (let j = 0; j < i; j++) {
          answer += '*';
      }
      answer += '\n';
  }
  console.log(answer);
}).on("close", function() {
  process.exit();
});