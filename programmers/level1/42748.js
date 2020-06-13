// K번째수
function solution(array, commands) {
    let answer = [];
    commands.forEach(v => {
        answer.push(array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]);
    })
    return answer;
}

// others solution
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

function solution(array, commands) {
    return commands.map(v => array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0]);
    // commands.map(([from,to,k])=>array.slice(from-1,to).sort((x,y)=>x>y)[k-1])
}