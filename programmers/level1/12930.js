// 이상한 문자 만들기
function solution(s) {
    return s.split(' ').map(w => (
        w.split('').map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
    )).join(' ');
}

function solution(s) { return s.split(' ').map(v => v.split('').map((p, i) => (i % 2 ? p.toLowerCase() : p.toUpperCase())).join('')).join(' '); }

// others solution
function solution(s) {
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}