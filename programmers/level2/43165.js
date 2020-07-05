// 타겟 넘버
function solution(numbers, target) {
    const len = numbers.length;
    const targetNumbers = new Array(2 ** (len + 1) - 1);
    const checkIndex = 2 ** len - 1;
    targetNumbers[0] = 0;
    
    function setTargetNumbers(depth, index) {
        if (depth === len) {
            return;
        }
        targetNumbers[index * 2 + 1] = targetNumbers[index] + numbers[depth];
        targetNumbers[index * 2 + 2] = targetNumbers[index] - numbers[depth];
        depth++;
        setTargetNumbers(depth, index * 2 + 1);
        setTargetNumbers(depth, index * 2 + 2);
    }
    setTargetNumbers(0, 0);
    // console.log(targetNumbers, checkIndex);
    return targetNumbers.filter((v, i) => i >= checkIndex && v === target).length;
}

// others solution
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}