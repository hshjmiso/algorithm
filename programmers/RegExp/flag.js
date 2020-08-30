const targetStr = 'Is this all there is?';

let regexr = /is/;

console.log(targetStr.match(regexr)); // ['is', index: 5, input: 'Is this all there is?', groups: undefined]

regexr = /is/ig;

console.log(targetStr.match(regexr)); // ['Is', 'is', 'is']
console.log(targetStr.match(regexr).length); // 3