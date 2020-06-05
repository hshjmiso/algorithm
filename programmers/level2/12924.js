// 숫자의 표현
function solution(n) {
    let answer = 0;
    let total = 0;
    let temp = 0;
    
    for (let ix = 1, len = Math.floor(n/2); ix <= len; ix++) {
        total = 0;
        temp = ix;
        while(1) {
            total += temp;
            temp++;
            if (total === n) {
                answer++;
                break;
            } else if (total > n) {
                break;
            }
        }
    }
    
    return answer + 1;
}

// others solution
function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i += 2) {
        if (n % i === 0) {
        answer++;
        }
    }
    return answer;
}