/**
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면
1 3 1 2 3
합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.

▣ 입력설명
첫째 줄에 N(1 ≤ N ≤ 100,000), M(1 ≤ M ≤ 100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
▣ 출력설명
첫째 줄에 경우의 수를 출력한다.
▣ 입력예제 1 
5 5 
1 3 1 2 3
▣ 출력예제 1 
10
 */

function solution(M, seq) {
    const len = seq.length;
    let answer = 0;
    let sum = 0;
    let lp = 0, rp = 0;

    while (rp < len) {
        sum += seq[rp++];
        if (sum <= M) {
            answer++;
            // console.log(lp, rp - 1, sum);
        }
        while (sum > 0) {
            sum -= seq[lp++];
            if (sum <= M) {
                answer++;
                // console.log(lp, rp - 1, sum);
            }
        }
    }

    return answer;
}

function solution2(m, arr){
    let answer=0, sum=0, lt=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        while(sum>m){
            sum-=arr[lt++];
        }
        answer+=(rt-lt+1);
    }               
    return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
console.log(solution2(5, [1, 3, 1, 2, 3]));
console.log(solution(5, [1, 3, 1, 2, 1, 3]));
console.log(solution2(5, [1, 3, 1, 2, 1, 3]));