// 사칙연산
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = +input[0];
const b = +input[1];
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b | 0);
console.log(a % b);