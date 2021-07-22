/**
학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요. 
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

▣ 입력설명
첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.
▣ 출력설명
학급 회장으로 선택된 기호를 출력합니다.
▣ 입력예제 1
15 
BACBACCACCBDEDE
▣ 출력예제 1 C
 */

function solution(s) {
    // let answer = 0;
    let obj = {};

    for (let i = 0, len = s.length; i < len; i++) {
        obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
    }

    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];   
}

function solution2(s){  
    let answer;
    let sH = new Map();
    for(let x of s){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    let max=Number.MIN_SAFE_INTEGER;
    for(let [key, val] of sH){
        if(val>max){
            max=val;
            answer=key;
        }
    }
    return answer;
}

console.log(solution('BACBACCACCBDEDE'));
console.log(solution2('BACBACCACCBDEDE'));