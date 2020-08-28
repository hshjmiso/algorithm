let input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split('\n');
let answer = '';
let scores = [];
let avg = 0;
let count = 0;
for (let i = 1, iLen = input.length; i < iLen; i++) {
    scores = input[i].split(' ');
    avg = 0;
    count = 0;
    for (let j = 1, jLen = scores.length; j < jLen; j++) {
        avg += +scores[j];
    }
    avg /= scores[0];
    
    for (let j = 1, jLen = scores.length; j < jLen; j++) {
        if (scores[j] > avg) {
            count++;
        }
    }
    answer += `${(count / scores[0] * 100).toFixed(3)}%\n`;
}
console.log(answer);