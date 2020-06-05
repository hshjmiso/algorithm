// JadenCase 문자열 만들기
function solution(s) {
    let answer = "";
    let blank = true;
    
    for (let ix = 0, len = s.length; ix < len; ix++) {
        if (s[ix] === " ") {
            blank = true;
            answer += " ";
        } else {
            if (blank) {
                blank = false;
                answer += s[ix].toUpperCase();
            } else {
                answer += s[ix].toLowerCase();
            }
        }
    }
    
    return answer;
}

// others solution
// v.charAt(0)
return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");