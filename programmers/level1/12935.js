// 제일 작은 수 제거하기
function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }
    let min = Number.MAX_VALUE;
    let minIndex = 0;

    arr.forEach((v, i) => {
        if (min > v) {
            min = v;
            minIndex = i;
        }
    });

    arr.splice(minIndex, 1);

    return arr;
}

// others solution
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}