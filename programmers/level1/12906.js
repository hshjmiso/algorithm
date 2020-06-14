// 같은 숫자는 싫어
function solution(arr)
{
    const answer = [];
    
    arr.forEach(v => {
        if (answer.length < 1 || answer[answer.length - 1] !== v) {
            answer.push(v);
        }
    })
    
    return answer;
}

// others solution
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

let solution=_=>_.filter((i,$)=>i!=_[--$])