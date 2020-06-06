// N개의 최소공배수
function solution(arr) {
    return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur), arr[0]);
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}