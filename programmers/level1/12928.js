// 약수의 합
function solution(n) {
    let answer = 0;
    let sqrt = Math.sqrt(n);
    for (let ix = 1; ix < sqrt; ix++) {
        if (n % ix === 0) {
            answer += ix;
            answer += n / ix;
        
        }
    }
    
    if (n % sqrt === 0) {
        answer += sqrt;
    }
    return answer;
}