// 평균 구하기
function solution(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}