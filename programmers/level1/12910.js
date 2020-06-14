// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let answer = arr.filter(v => v % divisor === 0);
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}