// 알람 시계
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    let m = input[1] - 45;
    let h = input[0];
    
    if (m < 0) {
        m += 60;
        h--;
        if (h < 0) {
            h += 24;
        }
    }
    console.log(`${h} ${m}`);
    process.exit();
  });