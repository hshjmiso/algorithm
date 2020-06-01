// 탑
function solution(heights) {
    return heights.map((v, i, arr) => {
        for (let ix = i - 1; ix >= 0; ix--) {
            if (arr[ix] > v) {
                return ix + 1;
            }
        }
        return 0;
    });
}

// others solution
function solution(heights) {
    return heights.map((v, i) => {
        while (i) {
            i--;
            if (heights[i] > v) {
                return i + 1;
            }
        }
        return 0;
    });
}