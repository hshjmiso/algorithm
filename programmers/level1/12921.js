// 소수 찾기
function solution(n) {
    let dp = new Array(n - 1).fill(false);
    for(let ix = 2; ix <= Math.sqrt(n); ix++) {
        if (dp[ix - 2]) continue;
        for (let iy = ix + ix; iy <= n; iy+= ix) {
            dp[iy - 2] = true;
        }
    }
    return dp.filter(v => !v).length;
}