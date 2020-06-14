// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    for (let ix = 1; ix <= n; ix++) {
        answer.push(x * ix);
    }
    return answer;
}