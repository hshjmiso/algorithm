// 땅따먹기
function solution(land) {
    const len = land.length;
    for (let ix = 1; ix < len; ix++) {
        land[ix][0] += Math.max(land[ix - 1][1], land[ix - 1][2], land[ix - 1][3]);
        land[ix][1] += Math.max(land[ix - 1][0], land[ix - 1][2], land[ix - 1][3]);
        land[ix][2] += Math.max(land[ix - 1][1], land[ix - 1][0], land[ix - 1][3]);
        land[ix][3] += Math.max(land[ix - 1][1], land[ix - 1][2], land[ix - 1][0]);
    }
    
    return Math.max(...land[len - 1]);
}