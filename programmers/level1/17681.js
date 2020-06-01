// [1차] 비밀지도
function solution(n, arr1, arr2) {
    let answer = [];
    let temp = "";
    let len = 0;
    for(let ix = 0; ix < n; ix++) {
        temp = (arr1[ix] | arr2[ix]).toString(2);
        len = temp.length;
        if (len < n) {
            temp = "0".repeat(n - len) + temp;
        }
        answer.push(temp.split("").map(v => v === "1" ? "#" : " ").join(""));
    }
    return answer;
}

// others solution
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}

var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
