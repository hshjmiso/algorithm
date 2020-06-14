// 문자열 다루기 기본
function solution(s) {
    let regexp = /^[0-9]*$/;    
    return regexp.test(s) && s.length === 4 || s.length === 6;
}