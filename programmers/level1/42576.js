// 완주하지 못한 선수
function solution(participant, completion) {
    let answer = '';
    const temp = {};
    completion.forEach(v => {
        if (temp[v]) {
            temp[v] = ++temp[v];
        } else {
            temp[v] = 1;
        }
    });
    participant.forEach(v => {
        if (temp[v] && temp[v] > 0) {
            temp[v] = --temp[v];
        } else {
            answer = v;
        }
    })
    return answer;
}

// others solution
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let ix = 0, ixLen = participant.length; ix < ixLen; ix++) {
        if(participant[ix] !== completion[ix]) return participant[ix];
    }
}

function solution(participant, completion) {
    var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    return participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
}

