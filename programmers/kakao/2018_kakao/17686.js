// [3차] 파일명 정렬
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