function solution(arrangement) {
    let answer = 0;
    let count = 0;
    for (let ix = 0, ixLen = arrangement.length; ix < ixLen ; ix++) {
        if (arrangement[ix] === '(' && arrangement[ix + 1] === ')') {
            answer += count;
            ix++;
        } else if (arrangement[ix] === '(') {
            count++;
        } else if (arrangement[ix] === ')') {
            answer++;
            count--;
        }
    }
    
    return answer;
}
