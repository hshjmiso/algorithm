// 최대공약수와 최소공배수
function solution(n, m) {
    const lcmVal = lcm(n, m);
    return [lcmVal, n * m / lcmVal];
}

function lcm (n, m) {
    const remain = n % m;
    return remain ? lcm(m, remain) : m;
}