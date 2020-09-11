// 보석 쇼핑
/**
 * 먼저 보석의 총 개수를 구하고 start, end 변수를 두어 보석의 개수가 모자르다면 end를 늘리고
 * 보석의 개수가 총 개수와 같다면 start를 늘려 start와 end를 늘릴 때 마다 Map에 들어있는 보석의 수를
 * 계산한다. 끝까지 탐색후 가장 짧은 구간을 정답으로 반환한다.

 ** 맨처음 보석을 Map에 넣고 시작한다.
 */

function solution(gems) {
    let len = gems.length;
    let answer = [0, len - 1];
    let start = 0;
    let end = 0;
    let count = new Set(gems).size;
    let gemsMap = new Map();
    let gem = '';
    let temp = '';
    
    gemsMap.set(gems[0], 1);
    // console.log(count);
    
    while(end < len && start <= end) {
        if (gemsMap.size === count) {
            if(answer[1] - answer[0] > end - start) {
                answer = [start, end];
            }
            gem = gems[start];
            temp = gemsMap.get(gem);
            temp > 1 ? gemsMap.set(gem, --temp) : gemsMap.delete(gem);
            start++;
        } else {
            end++;
            gem = gems[end];
            temp = gemsMap.get(gem);
            temp ? gemsMap.set(gem, ++temp) : gemsMap.set(gem, 1);
        }
        // console.log(start, end, gemsMap.size);
    }
    
    return [answer[0] + 1, answer[1] + 1];
}