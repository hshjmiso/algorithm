// 최댓값과 최솟값
function solution(s) {
    s = s.split(' ').sort((a, b) => +a - +b);
    return `${s[0]} ${s[s.length - 1]}`;
}