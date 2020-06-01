// 카펫
function solution(brown, yellow) {
    const total = brown + yellow;
    let temp = 0;
    for (let ix = yellow; ix > 0; ix--) {
        if (yellow % ix === 0) {
            temp = yellow / ix;
            if (total === (ix + 2) * (temp + 2)) {
                return [ix + 2, temp + 2];
            }
        }
    }
}