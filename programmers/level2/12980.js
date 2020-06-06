// 점프와 순간 이동
function solution(n)
{
    let answer = 0;
    
    while(n !== 0) {
        while(n % 2 === 0) {
            n /= 2;
        }
        n--;
        answer++;
    }
    return answer;
}

// others solution
function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}