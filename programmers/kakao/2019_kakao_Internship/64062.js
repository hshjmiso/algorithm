// 징검다리 건너기
// fail 74.4
function solution(stones, k) {
    let answer = Number.MAX_VALUE;
    let maxValue = 0;
    
    for (let i = 0, len = stones.length - k; i < len; i++) {
        maxValue = getMaxValue(i, k, stones);
        // console.log(maxValue);
        if (answer > maxValue) {
            answer = maxValue;
        }
    }
    
    return answer;
}

function getMaxValue(index, k, stones) {
    let max = stones[index];
    for (let i = index + 1, len = index + k; i < len; i++) {
        if (max < stones[i]) {
            max = stones[i];
        }
    }
    return max;
}