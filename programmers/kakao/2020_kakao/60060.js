// 가사 검색
// fail 55.0
function solution(words, queries) {
    let answer = [];
    for (let i = 0, iLen = queries.length; i < iLen; i++) {
        const regexp = new RegExp(`^${queries[i].replace(/\?/g, '.')}$`);
        answer[i] = 0;
        for (let j = 0, jLen = words.length; j < jLen; j++){
            if (words[j].match(regexp)) {
                answer[i]++;
            }
        }
    }
    return answer;
}