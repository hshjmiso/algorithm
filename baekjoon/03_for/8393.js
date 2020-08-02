// 합
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(num) {
  console.log((1 + +num) * num / 2);
  rl.close();
}).on("close", function() {
  process.exit();
});