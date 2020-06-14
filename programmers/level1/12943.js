// 콜라츠 추측
function solution(num) {
    let answer = 0;
    
    while(1) {
        if (num === 1) {
            return answer;
        }
        answer++;
        if (answer >= 500)
            return -1;
        
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
    }
}

