let targetStr = 'AA AAA BB ZZ Aa Bb 24,000';
let regexr = /.../;
console.log(targetStr.match(regexr)); // [ 'AA ', index: 0, input: 'AA BB Aa Bb', groups: undefined ]

regexr = /.../g;
console.log(targetStr.match(regexr));
/*
 [
  'AA ', 'AAA',
  ' BB', ' ZZ',
  ' Aa', ' Bb',
  ' 24', ',00'
 ]
 */

regexr = /./g;
console.log(targetStr.match(regexr));
/*
 [
  'A', 'A', ' ', 'A', 'A', 'A',
  ' ', 'B', 'B', ' ', 'Z', 'Z',
  ' ', 'A', 'a', ' ', 'B', 'b',
  ' ', '2', '4', ',', '0', '0',
  '0'
 ]
 */

regexr = /A/;
console.log(targetStr.match(regexr)); // [ 'A', index: 0, input: 'AA AAA BB Aa Bb', groups: undefined ]

regexr = /A/ig;
console.log(targetStr.match(regexr)); // [ 'A', 'A', 'A', 'A', 'A', 'A', 'a' ]

regexr = /A+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'A' ]

regexr = /A|B/g;
console.log(targetStr.match(regexr)); // [ 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'A', 'B' ]

regexr = /A+|B+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'A', 'B' ]

regexr = /[AB]+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'A', 'B' ]

regexr = /[A-Z]+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'ZZ', 'A', 'B' ]

regexr = /[A-Za-z]+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'ZZ', 'Aa', 'Bb' ]

regexr = /[0-9]+/g;
console.log(targetStr.match(regexr)); // [ '24', '000' ]

regexr = /[0-9,]+/g;
console.log(targetStr.match(regexr)); // [ '24,000' ]

regexr = /[\d,]+/g;
console.log(targetStr.match(regexr)); // [ '24,000' ]

regexr = /[\D,]+/g;
console.log(targetStr.match(regexr)); // [ 'AA AAA BB ZZ Aa Bb ', ',' ]

regexr = /[\w,]+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'ZZ', 'Aa', 'Bb', '24,000' ]

regexr = /[\W,]+/g;
console.log(targetStr.match(regexr));
/*
 [
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  ','
 ]
 */
