// 괄호 변환
// fail 20.0
function solution(p) {
    if (!p) {
        return p;
    }
    if (checkBracket(p))
        return p;
    
    return recursive(p);
}

function recursive(p) {
    if (p === '') 
        return '';
    
    let [u, v] = divideBracket(p);
    console.log(u, v);
    if (checkBracket(u)) {
        return u + recursive(v);
        // answer += u;
        // p = v;
    } else {
        let temp = '(';
        for (let i = u.length - 2; i >= 1; i--) {
            temp += u[i];
        }
        temp += ')';
        // answer += temp;
        // p = v;
        console.log(temp);
        return temp + recursive(v);
    }
}

function divideBracket(p) {
    let index = 0;
    let count = 0;
    for (let i = 0, len = p.length; i < len; i++) {
        if (p[i] === '(') {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            index = i + 1;
            break;
        }
    }
    
    return [p.slice(0, index), p.slice(index)];
}

function checkBracket(str) {
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === '(') {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return true;
}