// 정수 제곱근 판별
function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? (sqrt+1)**2:-1;
}