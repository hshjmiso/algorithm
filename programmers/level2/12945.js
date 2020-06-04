// 피보나치 수
function solution(n) {
    let answer = new Array(n + 1);
    answer[0] = 0;
    answer[1] = 1;
    
    for(let ix = 2; ix <= n; ix++) {
        answer[ix] = (answer[ix - 1] + answer[ix - 2]) % 1234567;
    }
    return answer[n];
}

// others solution
function solution(n) {
    let a = 0, b = 1, f = 1;
    
    for (let ix = 2; ix <= n; ix++) {
        f = (a + b) % 1234567;
        a = b;
        b = f;
    }
    
    return f;
}