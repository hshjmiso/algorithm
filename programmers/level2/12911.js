// 다음 큰 숫자
function solution(n) {
    let binary = n.toString(2);
    let nCount = binary.split('').filter(v => v ==='1').length;
    while(1) {
        if (nCount === (++n).toString(2).split('').filter(v => v ==='1').length) {
            return n;
        }
    }
}

// others solution
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}