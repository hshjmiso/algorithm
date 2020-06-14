// 문자열 내 p와 y의 개수
function solution(s){
    let pCount = 0;
    let yCount = 0;
    s.split('').forEach(v => {
        if (v === 'p' || v === 'P') pCount++;
        if (v === 'y' || v === 'Y') yCount++;
    })

    return pCount === yCount;
}