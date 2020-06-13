// 체육복
function solution(n, lost, reserve) {
    let students = new Array(n).fill(1);
    reserve.forEach(v => { students[v - 1]++; });
    lost.forEach(v => { students[v - 1]--; });
    students.forEach((v, i) => {
        if (v < 1) {
            if (students[i - 1] > 1) {
                students[i]++;
                students[i - 1]--;
            }
            if (students[i + 1] > 1) {
                students[i]++;
                students[i + 1]--;
            }
        }
    })
    return students.filter(v => v >= 1).length;
}