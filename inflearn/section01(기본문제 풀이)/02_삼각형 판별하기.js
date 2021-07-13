/**
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 
만들 수 없으면 ”NO"를 출력한다.

▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.
▣ 입력예제 1 
6 7 11
▣ 출력예제 1 
YES
▣ 입력예제 2 
13 33 17
▣ 출력예제 2 
NO
 */

// https://mathbang.net/92
// 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 크거나 같으면 삼각형을 그릴 수 없다.
// 예를 들어 세 변의 길이가 1cm, 2cm, 100cm / 1cm, 2cm, 3cm이면 삼각형을 그릴 수 없다.

function solution(a, b, c) {
    const triangle = [a, b, c].sort((a, b) => b - a);
    return triangle[0] < triangle[1] + triangle[2] ? 'YES' : 'NO';
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
console.log(solution(1, 2, 3));