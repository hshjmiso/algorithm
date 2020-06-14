// 정수 내림차순으로 배치하기
function solution(n) {
    return +(n+"").split('').sort((a, b) => b - a).join('');
}