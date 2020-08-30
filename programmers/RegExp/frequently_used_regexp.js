const url = 'http://example.com';
// http로 시작하는지 검사
let regexr = /^http/;
console.log(regexr.test(url)); // true

const fileName = 'index.html';
// html로 끝나는지 검사
regexr = /html$/;
console.log(regexr.test(fileName)); // true

let targetStr = '12345';
// 모두 숫자인지 검사
regexr = /^\d+$/;
console.log(regexr.test(targetStr)); // true

targetStr = ' Hi!';
// 1개 이상의 공백으로 시작하는지 검사
regexr = /^[\s]+/;
console.log(regexr.test(targetStr)); // true

const id = 'abc123';
// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~ 10자리인지 검사
regexr = /^[A-Za-z0-9]{4,10}$/;
console.log(regexr.test(id)); // true

const email = 'test@gamil.com';
regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
console.log(regexr.test(email)); // true

const cellphone = '010-1234-5678';
regexr = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(regexr.test(cellphone)); // true

targetStr = 'abc#123';
// A-Za-z0-9 이외의 문자가 있는지 검사
regexr = /[^A-Za-z0-9]/ig;
console.log(regexr.test(targetStr)); // true
console.log(targetStr.match(regexr)); // [ '#' ]

// 아래 방식도 동작한다. 이 방식의 장점은 특수 문자를 선택적으로 검사할 수 있다.
regexr = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
console.log(regexr.test(targetStr)); // true

// 특수 문자 제거
console.log(targetStr.replace(regexr, '')); // abc123
