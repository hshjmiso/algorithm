// 124 나라의 숫자
function solution(n) {
    let answer = '';
    while(n > 0) {
        if (n % 3 === 0) {
            answer += '4';
            n--;
        } else {
            answer += n % 3;
        }
        n = n / 3 | 0;
    }          
    return answer.split("").reverse().join("");
}

// others solution
function change124(n) {
    var answer = "";
        var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

    while(n) {
        answer = array1_2_4[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }

    return answer;
}
  