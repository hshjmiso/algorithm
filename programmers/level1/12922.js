// 수박수박수박수박수박수?
function solution(n) {
    var answer = '수박';
    return n % 2 === 0 ? answer.repeat(n/2) : answer.repeat((n-1)/2) + "수";
}