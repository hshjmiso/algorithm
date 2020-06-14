// 시저 암호
function solution(s, n) {
    return s.split('').map(v => {
        if (v === ' ') {
            return v;
        }
        const ascii = v.charCodeAt() + n;
        if (v >= 'a' && v <= 'z') {
            if (ascii > 'z'.charCodeAt()) {
                return String.fromCharCode(ascii - 26);
            }
        } else if (v >= 'A' && v <='Z') {
            if (ascii > 'Z'.charCodeAt()) {
                return String.fromCharCode(ascii - 26);
            }
        }
        return String.fromCharCode(ascii);
    }).join('');
}