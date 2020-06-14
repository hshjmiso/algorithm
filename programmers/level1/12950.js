// 행렬의 덧셈
function solution(arr1, arr2) {
    return arr1.map((v1, i) => v1.map((v2, j) => v2 += arr2[i][j]));
}