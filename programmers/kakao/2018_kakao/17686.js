// [3차] 파일명 정렬
// fail
function solution(files) {
    let answer = [];
    let head = '';
    let number = '';
    let tail = '';
    let type = 'head';
    let tempStr = '';
    
    for (let i = 0, iLen = files.length; i < iLen; i++) {
        head = '';
        number = '';
        tail = '';
        type = 'head';
        for (let j = 0, jLen = files[i].length; j < jLen; j++) {
            tempStr = files[i][j];
            if (type === 'head') {
                if (!isNaN(tempStr)) {
                    number += tempStr;
                    type = 'number';
                } else {
                    head += tempStr;
                }
            } else if (type === 'number') {
                if (isNaN(tempStr)) {
                    break;
                } else {
                    number += tempStr;
                }
            }
        }
        answer.push({index: i, fileName: files[i], head: head.toLowerCase(), number: parseInt(number)});
    }
    // console.log(answer);
    answer.sort((a, b) => {
        let sortByHead = (a.head).localeCompare(b.head);
        if (sortByHead === 0) {
            if (a.number < b.number) {
                return - 1;
            } else if (a.number > b.number) {
                return 1;
            } else {
                return a.index - b.index;
            }
        } else if(sortByHead === -1){
             return -1;
         } else {
             return 1;
         }
    })
    return answer.map(v => v.fileName);
}

// succeed
function solution(files) {
    let answer = [];
    
    for (let i = 0, len = files.length; i < len; i++) {
        const regexr = /\d+/;
        const match = files[i].match(regexr);
        const head = (files[i].slice(0, match.index)).toLowerCase();
        const number = +match[0];
        answer.push({
            index: i,
            head,
            number,
            fileName: files[i],
        });
    }
    
    answer.sort((a, b) => {
        const sortByHead = (a.head).localeCompare(b.head);
        if (sortByHead === 0) {
            const sortByNumber = a.number - b.number;
            if (sortByNumber === 0) {
                return a.index - b.index;
            }
            return sortByNumber;
        }
        return sortByHead;
    })
    
    return answer.map(v => v.fileName);
}