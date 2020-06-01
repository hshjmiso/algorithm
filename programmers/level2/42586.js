// 기능개발
function solution(progresses, speeds) {
    let answer = [];
    let temp = 0;
    let count = 0;
    
    progresses = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    temp = progresses[0];
    for (let ix = 1, len = progresses.length; ix < len; ix++) {
        if (progresses[ix] <= temp) {
            count++;
        } else {
            temp = progresses[ix];
            answer.push(++count);
            count = 0;
        }
    }
    answer.push(++count);
    return answer;
}

// others solution
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}