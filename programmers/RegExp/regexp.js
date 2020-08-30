const targetStr = 'This is a pen';
const regexr = /is/ig;

console.log(regexr.exec(targetStr)); // ['is', index: 2, input: 'This is a pen', groups: undefined]
console.log(regexr.test(targetStr)); // true

console.log(targetStr.match(regexr)); // ['is', 'is']
console.log(targetStr.replace(regexr, 'IS')); // ThIS IS a pen

console.log(targetStr.search(regexr)); // 2 <- index
console.log(targetStr.split(regexr)); // ['Th', ' ', ' a pen']