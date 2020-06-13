// 가운데 글자 가져오기
function solution(s) {
    const len = s.length;
    return len % 2 === 0 ? s[len / 2 - 1] + s[len / 2] : s[(len - 1) / 2];
}