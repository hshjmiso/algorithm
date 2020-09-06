// 문제를 똑바로 읽자..
/**
 * 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
     4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
     4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
     4-3. ')'를 다시 붙입니다. 
     4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
     4-5. 생성된 문자열을 반환합니다.
 */

const TYPE_1 = '\(';
const TYPE_2 = '\)';

function check(str) {
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === TYPE_1) {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return true;
}

function divide(str) {
    let index = 0;
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === TYPE_1) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            index = i + 1;
            break;
        }
    }
    
    return [str.slice(0, index), str.slice(index)];
}

function convert(str) {
    let newStr = '';
    for (let i = 1, len = str.length - 1; i < len; i++) {
        if (str[i] === TYPE_1) {
            newStr += TYPE_2;
        } else {
            newStr += TYPE_1;
        }
    }
    return newStr;
}

function recursion(p) {
    if (p === '') {
        return '';
    }
    const [u, v] = divide(p);
    if (check(u)) {
        return u + recursion(v);
    } else {
        let temp = `${TYPE_1}${recursion(v)}${TYPE_2}`;
        temp += convert(u);
        return temp;
    }
}

function solution(p) {
    let answer = recursion(p);
    return answer;
}