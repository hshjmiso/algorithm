// 모의고사
function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0, 0, 0];
    
    answers.forEach((v, i) => {
        if (pattern1[i % pattern1.length] === v) score[0]++;
        if (pattern2[i % pattern2.length] === v) score[1]++;
        if (pattern3[i % pattern3.length] === v) score[2]++;
    })
    
    const max = Math.max(...score);
    
    return [1, 2, 3].filter((v, i) => max === score[i]);
}

