/**
 * 효율성 테스트 실패
 * 정확성: 40.0
 * 효율성: 0.0
 * 합계: 40.0 / 100.0
 **/ 

function solution(infoes, queries) {
    let len = queries.length;
    let answer = Array(len).fill(0);
    let infoMap = {};
    
    infoes.forEach(info => {
        const splited = info.split(' ');
        const score = +splited.pop();
        
        function combination (arr, remainArr) {
            if (!remainArr.length) {
                const key = arr.join('');
                
                if (infoMap[key]) {
                    infoMap[key].push(score);
                } else {
                    infoMap[key] = [score];
                }
                return;
            }
            
            const target = remainArr.shift();
            
            combination([...arr, target], [...remainArr]);
            combination([...arr, '-'], [...remainArr]);
        }
        
        combination([], splited);
    });
    
    queries.forEach((query, i) => {
        const splited = query.replace(/and /g, '').split(' ');
        const queryScore = +splited.pop();
        const key = splited.join('');
        
        if (infoMap[key]) {
            const scores = infoMap[key];
            scores.forEach(score => {
                if (score >= queryScore) {
                    answer[i]++;
                }
            });
        }
    });
    
    return answer;
}

// others solution
function solution(info, query) {
    const answer = [];
    const infoMap = {};
    
    function combination(array, score, start) {
        const key = array.join("");
        const value = infoMap[key];
        
        if (value) {
            infoMap[key].push(score);
        } else {  
            infoMap[key] = [score];
        }
        
        for (let i = start; i < array.length; i++) {
            const temp = [...array];
            temp[i] = "-";
            combination(temp, score, i + 1);
        }
    }
    
    for (const e of info) {
        const splited = e.split(" ");
        const score = Number(splited.pop());
        combination(splited, score, 0);
    }
    
    for (const key in infoMap) {
        infoMap[key] = infoMap[key].sort((a, b) => a - b);
    }
    
    for (const e of query) {
        const splited = e.replace(/ and /g, " ").split(" ");
        const score = Number(splited.pop());
        const key = splited.join("");
        const array = infoMap[key];
        
        if (array) {
            let start = 0;
            let end = array.length;
            while (start < end) {
                const mid = Math.floor((start + end) / 2);
                
                if (array[mid] >= score) {
                    end = mid;
                } else if (array[mid] < score) {
                    start = mid + 1;
                }
            }
            
            const result = array.length - start;
            answer.push(result);
        } else {
            answer.push(0);
        }
    }
    
    return answer;
}