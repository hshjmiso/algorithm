// 보석 쇼핑
// fail 28.9
function solution(gems) {
    const len = gems.length;
    const totalGemCount = getGemsCount(gems, 0, len);
    let index = 0;
    let increaseCount = totalGemCount;
    let gemCount = 0;
    // console.log(totalGemCount);
    while(1) {
        gemCount = getGemsCount(gems, index, index + increaseCount);
        if (gemCount === totalGemCount) {
            return [index + 1, index + increaseCount];
        }
        index++;
        if (index + increaseCount > len) {
            index = 0;
            increaseCount++;
        }
    }
}

function getGemsCount(gems, x1, x2) {
    const set = new Set();
    for (let i = x1; i < x2; i++) {
        set.add(gems[i]);
    }
    return set.size;    
}