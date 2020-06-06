// 예상 대진표
function solution(n,a,b)
{
    let answer = 1;
    a--;
    b--;
    
    while(1) {
        a = a / 2 | 0;
        b = b / 2 | 0;
        if (a === b) {
            return answer;
        }
        answer++;
    }
}

// others solution
function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}