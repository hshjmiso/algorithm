# 문제 모음
* [2021 KAKAO BLIND RECRUITMENT]()
* [2020 KAKAO BLIND RECRUITMENT]()
* [2019 KAKAO BLIND RECRUITMENT]()
* [2018 KAKAO BLIND RECRUITMENT]()
* [2019 카카오 개발자 겨울 인턴십]()
* [2020 카카오 인턴십]()
* [2017 카카오코드 예선]()
* [2017 카카오코드 본선]()
* [Summer/Winter Coding(~2018)]()
* [Summer/Winter Coding(2019)]()
* [월간 코드 챌린지 시즌1]()
* [찾아라 프로그래밍 마에스터]()
* [2017 팁스타운]()



## 2021 KAKAO BLIND RECRUITMENT

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/72410">신규 아이디 추천</a></summary>
        
```javascript
function solution(new_id) {
    let answer = new_id.toLowerCase();
    let len = 0;
    answer = answer.replace(/[^-_\.a-z0-9]/g, '');
    answer = answer.replace(/\.\.+/g, '.');
    answer = checkPeriod(answer);
    
    len = answer.length;
    if (!len) {
        answer = 'a';
    } else if (len >= 16) {
        answer = answer.slice(0, 15);
        answer = checkPeriod(answer);
    }
    
    len = answer.length;
    if (len <= 2) {
        answer = answer + answer[len - 1].repeat(3 - len);
    }
    
    return answer;
}

function checkPeriod(str) {
    str = str.replace(/^\./, '');
    str = str.replace(/\.$/, '');
    return str;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/72411">메뉴 리뉴얼</a></summary>
        
```javascript
function solution(orders, course) {
    let answer = Array(course.length).fill().map(() => ({max: 0}));
    let temp = '';
    let cIndex = 0;
    orders.forEach(order => {
        const subsets = getSubsets(order);
        subsets.forEach(subset => {
            cIndex = course.indexOf(subset.length);
            if (cIndex !== -1) {
                temp = subset.join('');
                answer[cIndex][temp] = answer[cIndex][temp] ? answer[cIndex][temp] + 1 : 1;
                if (answer[cIndex].max < answer[cIndex][temp]) {
                    answer[cIndex].max = answer[cIndex][temp];
                }
            }
        });
    });
    
    answer = answer.map(c => Object.entries(c).filter(v => v[0] !== 'max' && v[1] === c.max && v[1] > 1).map(([key, value]) => key)).reduce((acc, cur) => [...acc, ...cur]).sort();
    
    return answer;
}

function getSubsets(order) {
    const subsets = [];
    const len = order.length;
    const foods = order.split('').sort();
    const flags = Array(len).fill(false);

    function recursion (depth) {
        if (depth === len) {
            subsets.push(foods.filter((food, i) => flags[i]));
            return;
        }
        flags[depth] = true;
        recursion(depth + 1);
        flags[depth] = false;
        recursion(depth + 1);
    }
    recursion(0);

    return subsets;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/72412">순위 검색</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/72413">합승 택시 요금</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/72414">광고 삽입</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/72415">카드 짝 맞추기</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/72416">매출 하락 최소화</a></summary>
        
```javascript
```
</details>


## 2020 KAKAO BLIND RECRUITMENT

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/60057">문자열 압축</a></summary>
        
```javascript
function solution(s) {
    const answer = [];
    const center = s.length / 2 | 0 + 1; // 1개일 경우 0이여서 탐색을 하지 못한다.
    let tempStr = '';
    let count = 0;
    let check = false;
    let sliceStr = '';
    
    for (let unit = 1; unit <= center; unit++) {
        tempStr = '';
        count = 0; 
        for (let i = 0, len = s.length; i < len; i += unit) {
            check = checkStr(s, i, unit);
            if (check) {
                count++;
            } else {
                sliceStr = s.slice(i, i + unit);
                if (count) {
                    tempStr += `${count + 1}${sliceStr}`;
                    count = 0;
                } else {
                    tempStr += sliceStr;
                }
            }
        }
        answer.push(tempStr);
    }
    
    return answer.reduce((acc, cur) => acc < cur.length ? acc : cur.length, Number.MAX_VALUE);
}

function checkStr(s, index, unit) {
    for(let i = 0; i < unit; i++) {
        if (s[index + i] !== s[index + unit + i]) {
            return false;
        }
    }
    return true;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/60058">괄호 변환</a></summary>
        
```javascript
const TYPE_1 = '\(';
const TYPE_2 = '\)';

function check(str) {
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === TYPE_1) {
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

function divide(str) {
    let index = 0;
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === TYPE_1) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            index = i + 1;
            break;
        }
    }
    
    return [str.slice(0, index), str.slice(index)];
}

function convert(str) {
    let newStr = '';
    for (let i = 1, len = str.length - 1; i < len; i++) {
        if (str[i] === TYPE_1) {
            newStr += TYPE_2;
        } else {
            newStr += TYPE_1;
        }
    }
    return newStr;
}

function recursion(p) {
    if (p === '') {
        return '';
    }
    const [u, v] = divide(p);
    if (check(u)) {
        return u + recursion(v);
    } else {
        let temp = `${TYPE_1}${recursion(v)}${TYPE_2}`;
        temp += convert(u);
        return temp;
    }
}

function solution(p) {
    let answer = recursion(p);
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/60059">자물쇠와 열쇠</a></summary>
        
```javascript
function rotateKey(key) {
    const len = key.length;
    const rKey = [];
    let temp = [];
    for (let x = 0; x < len; x++) {
        temp = [];
        for (let y = len - 1; y >= 0; y--) {
            temp.push(key[y][x]);      
        }
        rKey.push(temp);
    }
    return rKey;
}

function clearBoard(board) {
    for (let y = 0, yLen = board.length; y < yLen; y++) {
        for (let x = 0, xLen = board[y].length; x < xLen; x++) {
            board[y][x] = 0;
        }
    }
}

function setLock(board, M, lock) {
    for (let y = 0, yLen = lock.length; y < yLen; y++) {
        for (let x = 0, xLen = lock[y].length; x < xLen; x++) {
            board[y + M][x + M] = lock[y][x];
        }
    }
}

function setKey(board, y, x, key) {
    for (let keyY = 0, yLen = key.length; keyY < yLen; keyY++) {
        for (let keyX = 0, xLen = key[keyY].length; keyX < xLen; keyX++) {
            board[y + keyY][x + keyX] += key[keyY][keyX];
        }
    }
}

function checkLock(board, M, lock) {
    for (let y = 0, yLen = lock.length; y < yLen; y++) {
        for (let x = 0, xLen = lock[y].length; x < xLen; x++) {
            if (board[y + M][x + M] !== 1)
                return false;
        }
    }
    return true;
}

function solution(key, lock) {
    const M = key.length;
    const N = lock.length;
    const boardSize = M + M + N; 
    let board = Array.from(Array(boardSize), () => Array(boardSize));
    for (let i = 0; i < 4; i++) {
        for (let y = 0, yLen = M + N; y < yLen; y++) {
            for (let x = 0, xLen = M + N; x < xLen; x++) {
                clearBoard(board);        
                setLock(board, M, lock);  
                setKey(board, y, x, key);
                if (checkLock(board, M, lock)) {
                    return true;
                }
                // console.log(board);
            }
        }
        key = rotateKey(key);
    }
    return false;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/60060">가사 검색</a></summary>
        
```javascript
class Trie {
    constructor() {
        this.children = {};
        this.sum = 0;
    }

    insert(word) {
        let trie = this;
        ++this.sum;

        for (const letter of word) {
            if (typeof trie.children[letter] === 'undefined') {
                trie.children[letter] = new Trie();
            }

            trie = trie.children[letter];
            ++trie.sum;
        }
    }

    getSum(query) {
        let trie = this;
        for (const letter of query) {
            if (letter === '?') {
                return trie.sum;
            } else if (typeof trie.children[letter] === 'undefined') {
                return 0;
            }

            trie = trie.children[letter];
        }
    }
}

function solution(words, queries) {
    const tries = {};
    const reverseds = {};

    for (const word of words) {
        const length = word.length;
        if (typeof tries[length] === 'undefined') {
            tries[length] = new Trie();
            reverseds[length] = new Trie();
        }

        tries[length].insert(word);
        reverseds[length].insert([...word].reverse().join(''));
    }

    return queries.map((query) => {
        const length = query.length;
        if (typeof tries[length] === 'undefined') {
            return 0;
        }

        if (query[0] === '?') {
            return reverseds[length].getSum([...query].reverse().join(''));
        }

        return tries[length].getSum(query);
    });
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/60061">기둥과 보 설치</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/60062">외벽 점검</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/60063">블록 이동하기</a></summary>
        
```javascript
```
</details>


## 2019 KAKAO BLIND RECRUITMENT

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42888">오픈채팅방 </a></summary>
        
```javascript
function solution(record) {
    let answer = [];
    let idList = {};
    let temp = [];
    
    for (let i = 0, len = record.length; i < len; i++) {
        temp = record[i].split(' ');
        if (temp[2]) {
            idList[temp[1]] = temp[2];    
        }
    }
    
    for (let i = 0, len = record.length; i < len; i++) {
        temp = record[i].split(' ');
        if (temp[0] === 'Enter') {
            answer.push(`${idList[temp[1]]}님이 들어왔습니다.`);
        } else if (temp[0] === 'Leave') {
            answer.push(`${idList[temp[1]]}님이 나갔습니다.`);
        }
    }
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42889">실패율</a></summary>
        
```javascript
function solution(N, stages) {
    let answer = new Array(N);
    let len = stages.length;
    let count = 0;
    
    stages.sort((a, b) => a - b);
    for (let ix = 1; ix <= N; ix++) {
        count = stages.filter(v => v === ix).length;
        answer[ix - 1] = {
            i: ix,
            rate: count / len || 0,
        };
        len -= count;
    }
    
    return answer.sort((a, b) => b.rate === a.rate ? a.i - b.i : b.rate - a.rate).map(v => v.i);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42890">후보키</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42891">무지의 먹방 라이브</a></summary>
        
```javascript
function solution(food_times, k) {
    food_times = food_times.map((time, i) => ({index: i + 1, time}));
    food_times.sort((a, b) => a.time - b.time);
    
    for (let i = 0, len = food_times.length; i < len; i++) {
        const foodTime = food_times[i];
        const remainLen = len - i;
        const roopTime = (foodTime.time - (i === 0 ? 0 : food_times[i - 1].time)) * remainLen;
        // console.log(roopTime);
        if (k < roopTime) {
            return food_times.slice(i).sort((a, b) => a.index - b.index)[k % remainLen].index;
        }
        k -= roopTime;
    }
    return -1;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42892">길 찾기 게임</a></summary>
        
```javascript
class Node {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.answer = [[], []];
    }
    
    insert(x, y, i) {
        const node = new Node(x, y, i);
        if (!this.root) {
            this.root = node;
        } else {
            this.subInsert(this.root, node);
        }
    }
    subInsert(parent, child) {
        if (parent.x > child.x) {
            if (!parent.left) {
                parent.left = child;
            } else {
                this.subInsert(parent.left, child);
            }
        } else {
            if (!parent.right) {
                parent.right = child;
            } else {
                this.subInsert(parent.right, child);
            }
        }
    }
    preorder(node) {
        this.answer[0].push(node.index);
        if (node.left) this.preorder(node.left);
        if (node.right) this.preorder(node.right);
    }
    postorder(node) {
        if (node.left) this.postorder(node.left);
        if (node.right) this.postorder(node.right);
        this.answer[1].push(node.index);
    }
}

function solution(nodeinfo) {
    nodeinfo = nodeinfo.map((node, i) => [...node, i + 1])
    nodeinfo.sort((a, b) => {
        if (a[1] - b[1] === 0) {
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });
    
    const bTree = new BinaryTree();
    nodeinfo.forEach(([x, y, i]) => {
        bTree.insert(x, y, i);
    });
    bTree.preorder(bTree.root);
    bTree.postorder(bTree.root);
    
    return bTree.answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42893">매칭 점수</a></summary>
        
```javascript
// 매칭 점수
function solution(word, rawPages) {
    word = word.toLowerCase();
    return rawPages
        .map((rawPage, index) => {
            const [_, url] = rawPage.match(/<meta property="og:url" content="([^"]+)"\/>/i);
            const tags = rawPage.match(/<[^>]+>/g);
            const basicScore = tags
                .reduce((raw, tag) => raw.replace(tag, ""), rawPage)
                .split(/[^a-zA-Z]/)
                .filter(w => w.toLowerCase() == word).length;
            const outUrls = tags.reduce((links, tag) => {
                const result = tag.match(/<a href="([^"]+)">/i);
                return result ? links.concat(result[1]) : links;
            }, []);

            return {
                index,
                url,
                outUrls,
                basicScore,
            };
        })
        .map((page, index, pages) => {
            page.linkScore = pages
                .filter(p => p.outUrls.some(url => url == page.url))
                .reduce((sum, p) => sum + p.basicScore/p.outUrls.length, 0);
            page.totalScore = page.linkScore + page.basicScore;
            return page;
        })
        .sort((a,b) => a.totalScore == b.totalScore ? a.index-b.index : b.totalScore - a.totalScore)[0].index;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/42894">블록 게임</a></summary>
        
```javascript
```
</details>


## 2018 KAKAO BLIND RECRUITMENT

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17676">[1차] 추석 트래픽</a></summary>
        
```javascript
function solution(lines) {
    const logTimes = [];
    const logPoints = [];
    if (lines.length === 1) {
        return 1;
    }
    lines.forEach(line => {
        const [date, time, duration] = line.split(' ');
        const [h, m, s] = time.split(':');
        // const ms = s.split('.')[1];
        const d = duration.substring(0, duration.length - 1);
        const endTime = (h * 60 * 60) + (m * 60) + +s;
        const startTime = endTime - +d + 0.001;
        logTimes.push([startTime, endTime]);
        logPoints.push(startTime, endTime);
    });
    
    let max = 0;
    logPoints.forEach(point => {
        const startTime = point;
        const endTime = point + 1;
        let count = 0;
        logTimes.forEach(logTime => {
            const [logStartTime, logEndTime] = logTime;
            if (logStartTime >= startTime && logStartTime < endTime ||
                logEndTime >= startTime && logEndTime < endTime ||
                logStartTime <= startTime && logEndTime >= endTime) {
                count++;
            } 
        });
        if (max < count) {
            max = count;
        }
    });
    return max;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17677">[1차] 뉴스 클러스터링</a></summary>
        
```javascript
function solution(str1, str2) {
    const answer = 65536;
    const splitStr1 = splitStr(str1);
    const splitStr2 = splitStr(str2);
    const intersection = {};
    let intersectionCount = 0;
    
    for (let i = 0, len = splitStr1.length; i < len; i++) {
        intersection[splitStr1[i]] = intersection[splitStr1[i]] ? ++intersection[splitStr1[i]] : 1;
    }
    
    for (let i = 0, len = splitStr2.length; i < len; i++) {
        if (intersection[splitStr2[i]] > 0) {
            intersectionCount++;
            intersection[splitStr2[i]]--;
        }
    }
    
    let unionCount = splitStr1.length + splitStr2.length - intersectionCount;
    
    return unionCount ? answer * intersectionCount / unionCount | 0 : answer;
}

function splitStr(str) {
    let arr = [];
    let temp = '';
    let lowerStr = str.toLowerCase();
    for (let i = 0, len = lowerStr.length; i < len; i++) {
        if (lowerStr[i] >= 'a' && lowerStr[i] <= 'z' && lowerStr[i + 1] >= 'a' && lowerStr[i + 1] <= 'z') {
            arr.push(lowerStr[i] + lowerStr[i + 1]);
        }
    }
    return arr;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17678">[1차] 셔틀버스</a></summary>
        
```javascript
function getMinutes(time) {
    const [h, m] = time.split(':');
    return h * 60 + m * 1;
}

function getTimes(minutes) {
    const h = (minutes / 60 | 0) + "";
    const m = (minutes % 60) + "";
    
    return `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
}

function solution(n, t, m, timetable) {
    // 셔틀 운행 횟수 n, 셔틀 운행 간격 t, 한 셔틀에 탈 수 있는 최대 크루 수 m
    let startTime = 9 * 60;
    const lastTime = startTime + (n - 1) * t;
    let crews = timetable.map(getMinutes).filter(time => time <= lastTime).sort((a, b) => a - b);
    
    while (startTime <= lastTime) {
        if (!crews.length) {
            return getTimes(lastTime);
        }
        
        if (startTime === lastTime) {
            if (crews.length >= m) {
                return getTimes(crews[m - 1] - 1);
            } else {
                return getTimes(startTime);
            }
        }
        let count = crews.filter(time => time <= startTime).length;
        count = count > m ? m : count;
        // console.log(count);
        
        crews.splice(0, count);
        startTime += t;
    }
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17679">[1차] 프렌즈4블록</a></summary>
        
```javascript
function solution(m, n, board) {
    board = board.map(row => row.split(''));
    let clearBlockList = [];
    while(1) {
        clearBlockList = checkBoard();
    
        if (!clearBlockList.length) {
            return board.reduce((acc, cur) => acc + cur.filter(v => v === '').length, 0);
        } else {
            // console.log(clearBlockList);
            for (let i = 0, len = clearBlockList.length; i < len; i++) {
                clearBlock(clearBlockList[i]);
            }
            // console.log(board);
            for (let y = board.length - 1; y > 0; y--) {
                for (let x = board[y].length - 1; x >= 0; x--) {
                    if (board[y][x] === '') {
                        dropBlock(y, x);
                    }
                }
            }
            // console.log(board);
        }
    }
    
    function checkBoard() {
        const boardCoord = [];
        for (let y = 1, yLen = board.length; y < yLen; y++) {
            for (let x = 1, xLen = board[y].length; x < xLen; x++) {
                if (checkBlock(y, x)) {
                    boardCoord.push([y, x]);
                }
            }
        }
        return boardCoord;
    }

    function checkBlock(y, x) {
        const block = board[y][x];
        if (block === '') {
            return false;
        }
        if (block === board[y - 1][x - 1] && 
            block === board[y - 1][x] &&
            block === board[y][x - 1]) {
            return true;
        }
    }
    
    function clearBlock(coord) {
        const [y, x] = coord;
        board[y - 1][x - 1] = '';
        board[y - 1][x] = '';
        board[y][x - 1] = '';
        board[y][x] = '';
    }
    
    function dropBlock(y, x) {
        let index = y;
        while(index > 0) {
            index--;
            if (board[index][x] !== '') {
                // console.log(y, x, board[y][x], index, x, board[index][x]);
                board[y][x] = board[index][x];
                board[index][x] = '';
                break;
            }
        }
    }
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17680">[1차] 캐시</a></summary>
        
```javascript
function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    let cacheIndex = -1;
    let city = '';
    
    for (let i = 0, len = cities.length; i < len; i++) {
        city = cities[i].toLowerCase();
        cacheIndex = cache.indexOf(city);
        if (cacheIndex >= 0) {
            answer++;
            cache.splice(cacheIndex, 1);
        } else {
            answer+=5;
        }
        cache.unshift(city);
        if (cache.length > cacheSize) {
            cache.pop();
        }
    }
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17681">[1차] 비밀지도</a></summary>
        
```javascript
function solution(n, arr1, arr2) {
    let answer = [];
    let temp = "";
    let len = 0;
    for(let ix = 0; ix < n; ix++) {
        temp = (arr1[ix] | arr2[ix]).toString(2);
        len = temp.length;
        if (len < n) {
            temp = "0".repeat(n - len) + temp;
        }
        answer.push(temp.split("").map(v => v === "1" ? "#" : " ").join(""));
    }
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17682">[1차] 다트 게임</a></summary>
        
```javascript
function solution(dartResult) {
    let answer = ['', '', ''];
    let i = 0;
    let temp = 0;
    dartResult.split('').forEach(v => {
        if (v >= '0' && v <= '9') {
            answer[i] += v;
        } else {
            temp = answer[i];
            if (v === 'S') {
                i++;
            } else if (v === 'D') {
                answer[i] = temp ** 2;
                i++;
            } else if (v === 'T') {
                answer[i] = temp ** 3;
                i++;
            } else if (v === '*') {
                if (answer[i - 2]) {
                    answer[i - 2] *= 2;
                }
                answer[i - 1] *=2;
            } else if (v === '#') {
                answer[i - 1] = -answer[i - 1]
            }
        }
    })
    
    return answer.reduce((acc, cur) => acc + +cur, 0);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17683">[3차] 방금그곡</a></summary>
        
```javascript
function solution(m, musicinfos) {
    let answer = [];
    let info = [];
    let startTime = [];
    let endTime = [];
    let time = 0;
    let sound = [];
    for (let i = 0, len = musicinfos.length; i < len; i++) {
        info = musicinfos[i].split(',');
        startTime = info[0].split(':');
        endTime = info[1].split(':');
        time = (endTime[0] - startTime[0]) * 60 + (endTime[1] - startTime[1]),
        sound = scaleUpSound(time, convertSound(info[3]));
        answer.push({
            index: i,
            time, 
            answer: info[2],
            sound,
        });
    }
    m = convertSound(m);
    
    answer = answer.filter(ans => ans.sound.includes(m));
    if (answer.length) {
        answer.sort((a, b) => {
            if (a.time < b.time) {
                return 1;
            } else if (a.time > b.time) {
                return -1;
            } else {
                return a.index - b.index;
            }
        });
        // console.log(answer);
        return answer[0].answer;
    } else {
        return '(None)';
    }
}

function convertSound(str) {
    // A, B, C, D, E, F, G, A#   , C#   , D#   , F#   , G#,
    // A, B, C, D, E, F, G, A + 7, C + 7, D + 7, F + 7, G + 7
    let convertStr = '';
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i + 1] === '#') {
            convertStr += String.fromCharCode(str[i].charCodeAt(0) + 7);
            i++;
        } else {
            convertStr += str[i];
        }
    }
    
    return convertStr;
}

function splitSound(str) {
    let arr = [];
    let tempStr = '';
    
    for (let i = 0, len = str.length; i < len; i++) {
        if (tempStr && str[i] >= 'A' && str[i] <= 'G') {
            arr.push(tempStr);
            tempStr = '';
        } 
        tempStr += str[i];
    }
    if (tempStr) {
        arr.push(tempStr);
    }

    return arr;
}

function scaleUpSound(time, sound) {
    let str = '';
    let soundLen = sound.length;
    for (let i = 0; i < time; i++) {
        str += sound[i % soundLen];
    }
    
    return str;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17684">[3차] 압축</a></summary>
        
```javascript
function solution(msg) {
    let answer = [];
    let objIndex = {};
    let alphabet = '';
    let curStr = '';
    let index = 27;
    // init
    for (let i = 1; i <= 26; i++) {
        alphabet = String.fromCharCode(65 + (i - 1));
        objIndex[alphabet] = i;
    }
    
    for (let i = 0, len = msg.length; i <= len; i++) {
        if (!objIndex[curStr + msg[i]]) {
            answer.push(objIndex[curStr]);
            objIndex[curStr + msg[i]] = index++;
            curStr = '';
        }
        curStr += msg[i];
    }

    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17685">[3차] 자동완성</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17686">[3차] 파일명 정렬</a></summary>
        
```javascript
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
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/17687">[3차] n진수 게임</a></summary>
        
```javascript
function solution(n, t, m, p) {
    let answer = '';
    let maxLen = t * m;
    let temp = '';
    let num = 0;
    while(temp.length < maxLen) {
        temp += num.toString(n);
        num++;
    }
    temp = temp.toUpperCase();
    for (let i = 0; i < t; i++) {
        answer += temp[i * m + p - 1];
    }
    return answer;
}
```
</details>


## 2019 카카오 개발자 겨울 인턴십

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/64061">크레인 인형뽑기 게임</a></summary>
        
```javascript
function solution(board, moves) {
    const basket = [];
    let answer = 0;
    let temp = 0;
    let len = 0;
    
    moves.forEach(v => {
        len = board.length;
        for(let i = 0; i < len; i++) {
            temp = board[i][v - 1];
            if (temp && temp !== 0) {
                basket.push(temp);
                board[i][v - 1] = 0;
                break;
            }
        }
        
        while(1) {
            len = basket.length;
            if (len > 1) {
                if (basket[len - 1] === basket[len - 2]) {
                    answer += 2;
                    basket.pop();
                    basket.pop();
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    });
    
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/64065">튜플</a></summary>
        
```javascript
function solution(s) {
    const obj = {};
    s = (s.replace(/[{}]/g, '').split(',')).forEach(v => {
        obj[v] = obj[v] ? ++obj[v] : 1;
    });
    return Object.entries(obj).sort((a, b) => b[1] - a[1]).map(v => +v[0]);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/64064">불량 사용자</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/64063">호텔 방 배정</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/64062">징검다리 건너기</a></summary>
        
```javascript
function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    
    function checkStone(mid) {
        let step = 0;
        for (let i = 0, len = stones.length; i < len; i++) {
            if (stones[i] < mid) {
                step++;
            } else {
                step = 0;
            }
            if (step >= k) {
                return false;
            }
        }
        return true;
    }
    
    while(left < right - 1) {
        let mid = (left + right) / 2 | 0;
        if (checkStone(mid)) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    return left;
}
```
</details>


## 2020 카카오 인턴십

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/67256">키패드 누르기</a></summary>
        
```javascript
function solution(numbers, hand) {
    const keyIndex = {
        '1': 3, '2': 3, '3': 3,
        '4': 2, '5': 2, '6': 2,
        '7': 1, '8': 1, '9': 1,
        '*': 0, '0': 0, '#': 0,
    };
    let left = '*';
    let right = '#';
    let answer = '';
    let num = -1;
    let numIndex = -1;
    let leftGap = -1;
    let rightGap = -1;
    
    for (let i = 0, len = numbers.length; i < len; i++) {
        num = numbers[i];
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            left = num;
        } else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            right = num;
        } else {
            numIndex = keyIndex[num];
            leftGap = Math.abs(numIndex - keyIndex[left]);
            if (left === 1 || left === 4 || left === 7 || left === '*') {
                leftGap++;
            }
            rightGap = Math.abs(numIndex - keyIndex[right]);
            if (right === 3 || right === 6 || right === 9 || right === '#') {
                rightGap++;
            }
            if (leftGap < rightGap) {
                answer += 'L';
                left = num;
            } else if (leftGap > rightGap) {
                answer += 'R';
                right = num;
            } else {
                if (hand === 'left') {
                    answer += 'L';
                    left = num;
                } else {
                    answer += 'R';
                    right = num;
                }
            }
        }
    }
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/67257">수식 최대화</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/67258">보석 쇼핑</a></summary>
        
```javascript
function solution(gems) {
    let len = gems.length;
    let answer = [0, len - 1];
    let start = 0;
    let end = 0;
    let count = new Set(gems).size;
    let gemsMap = new Map();
    let gem = '';
    let temp = '';
    
    gemsMap.set(gems[0], 1);
    // console.log(count);
    
    while(end < len && start <= end) {
        if (gemsMap.size === count) {
            if(answer[1] - answer[0] > end - start) {
                answer = [start, end];
            }
            gem = gems[start];
            temp = gemsMap.get(gem);
            temp > 1 ? gemsMap.set(gem, --temp) : gemsMap.delete(gem);
            start++;
        } else {
            end++;
            gem = gems[end];
            temp = gemsMap.get(gem);
            temp ? gemsMap.set(gem, ++temp) : gemsMap.set(gem, 1);
        }
        // console.log(start, end, gemsMap.size);
    }
    
    return [answer[0] + 1, answer[1] + 1];
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/67259">경주로 건설</a></summary>
        
```javascript
class Road {
    constructor(x, y, cost, dir) {
        this.x = x;
        this.y = y;
        this.cost = cost;
        this.dir = dir;
    }
}

function solution(board) {
    let answer = Number.MAX_VALUE;
    const directions = [
        { x: -1, y: 0 },
        { x: 0, y: -1 },
        { x: 1, y: 0 }, 
        { x: 0, y: 1 }, 
    ];
    const len = board.length;
    bfs (0, 0, 0, -1);
    return answer;
    
    function bfs(x, y, cost, dir) {
        const q = [new Road(x, y, cost, dir)];
        board[0][0] = 1;
        while(q.length) {
            // console.log(q);
            const temp = q.shift();
            if (temp.x === len - 1 && temp.y === len - 1) {
                answer = Math.min(answer, temp.cost);
            }
            
            for (let i = 0; i < 4; i++) {
                const newX = temp.x + directions[i].x;
                const newY = temp.y + directions[i].y;
                if (newX >= 0 && newX < len &&
                    newY >= 0 && newY < len &&
                    board[newY][newX] !== 1) {
                    let newCost = 0;
                    if (temp.dir === -1 || temp.dir === i) {
                        newCost = temp.cost + 100;
                    } else {
                        newCost = temp.cost + 600;
                    }
                    
                    if (board[newY][newX] === 0 || board[newY][newX] >= newCost) {
                        board[newY][newX] = newCost;
                        q.push(new Road(newX, newY, newCost, i));
                    }
                }
            }
        }
    }
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/67260">동굴 탐험</a></summary>
        
```javascript
```
</details>


## 2017 카카오코드 예선




## 2017 카카오코드 본선




## Summer/Winter Coding(~2018)

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/49993">스킬트리</a></summary>
        
```javascript
function solution(skill, skill_trees) {
    let answer = 0;
    let index = 1;
    let skillObj = {};
    let checkSkill = true;
    
    skill.split('').forEach((v, i) => {
        skillObj[v] = ++i;
    });
    
    skill_trees.forEach(v => {
        index = 1;
        checkSkill = true;
        for (let ix = 0, len = v.length; ix < len; ix++) {
            if (skillObj[v[ix]]) {
                if (skillObj[v[ix]] == index) {
                    ++index;
                } else {
                    checkSkill = false;
                    break;
                }
            }
        }
        if (checkSkill) {
            answer++;
        }
    });
    
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/49994">방문 길이</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/49995">쿠키 구입</a></summary>
        
```javascript
function solution(cookie) {
    let len = cookie.length;
    let answer = [];
    let left = 0;
    let right = 0;
    let leftIndex = 0;
    let rightIndex = 0;
    
    for (let i = 0; i < len - 1; i++) {
        leftIndex = 0;
        rightIndex = len - 1;
        left = getCookieCount(leftIndex, i);
        right = getCookieCount(i + 1, rightIndex)
        while(leftIndex !== rightIndex) {
            if (left > right) {
                left -= cookie[leftIndex];
                leftIndex++;
                // console.log(left, right, leftIndex, rightIndex);
            }
            else if (left < right) {
                right -= cookie[rightIndex];
                rightIndex--;
                // console.log(left, right, leftIndex, rightIndex);
            } else {
                answer.push(left);
                break;
            }
        }
    }
    function getCookieCount(left, right) {
        let total = 0;
        for (let i = left; i <= right; i++) {
            total += cookie[i];
        }
        return total;
    }
    // console.log(answer);
    return answer.length ? Math.max(...answer) : 0;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12978">배달</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12971">스티커 모으기(2)</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12977">소수 만들기</a></summary>
        
```javascript
function solution(nums) {
    let answer = 0;
    let temp = 10000;
    let primeNumber = Array(temp).fill(true);
    primeNumber[0] = false;
    primeNumber[1] = false;
    
    for (let i = 2, len = Math.sqrt(temp); i <= len; i++) {
        if (!primeNumber[i])
            continue;
    
        for (let j = i + i; j <= temp; j +=i) {
            primeNumber[j] = false;
        }
    }
    
    for (let i = 0, len = nums.length; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (primeNumber[nums[i] + nums[j] + nums[k]]) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12979">기지국 설치</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12980">점프와 순간 이동</a></summary>
        
```javascript
function solution(n)
{
    let answer = 0;
    
    while(n !== 0) {
        while(n % 2 === 0) {
            n /= 2;
        }
        n--;
        answer++;
    }
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12987">숫자 게임</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12984">지형 편집</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12981">영어 끝말잇기</a></summary>
        
```javascript
function solution(n, words) {
    let objWords = {};
    objWords[words[0]] = 1;
    let lastAlphabet = words[0][words[0].length - 1];
    let check = true;
    
    for (let ix = 1, len = words.length; ix < len; ix++) {
        if (objWords[words[ix]]) {
            check = false;
        }
        if (lastAlphabet !== words[ix][0]) {
            check = false;
        }
        if (!check) {
            return [ix % n + 1, Math.ceil((ix + 1) / n)];
        }
        objWords[words[ix]] = 1;
        lastAlphabet = words[ix][words[ix].length - 1];
    }

    return [0, 0];
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12982">예산</a></summary>
        
```javascript
function solution(d, budget) {
    let total = 0;
    let len = d.length;
    d.sort((a, b) => a - b);
    for (let ix = 0; ix < len; ix++) {
        total += d[ix];
        if (total > budget) {
            return ix;
        }
    }
    return len;
}
```
</details>



## Summer/Winter Coding(2019)

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/62048">멀쩡한 사각형</a></summary>
        
```javascript
function solution(w, h) {
    const _gcd = gcd(w, h);
    
    return (w * h) - (w / _gcd + h / _gcd - 1) * _gcd;
}

function gcd (a, b) {
    return !b ? a : gcd(b, a % b);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/62050">지형 이동</a></summary>
        
```javascript
```
</details>


## 월간 코드 챌린지 시즌1

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/68644">두 개 뽑아서 더하기</a></summary>
        
```javascript
function solution(numbers) {
    let answer = new Set();
    for (let i = 0, len = numbers.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            answer.add(numbers[i] + numbers[j]);
        }
    }
    
    return Array.from(answer).sort((a, b) => a - b);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/68645">삼각 달팽이</a></summary>
        
```javascript
function solution(n) {
    let answer = Array.from(Array(n), (v, i) => Array(i + 1).fill(0));
    let total = answer.reduce((acc, cur) => acc + cur.length, 0);
    let level = 0;
    let index = 0;
    let val = 1;
    let type = 'down'; // down, right, up
    
    while (val <= total) {
        switch(type) {
            case 'down':
                index = answer[level].indexOf(0);
                answer[level][index] = val;
                level++;
                
                if (level === answer.length || answer[level].indexOf(0) === -1) {
                    type = 'right';
                    level--;
                }
                break;
            case 'right':
                index = answer[level].indexOf(0);
                answer[level][index] = val;
                
                if (answer[level].indexOf(0) === -1) {
                    type = 'up';
                    level--;
                }
                break;
            case 'up':
                index = answer[level].lastIndexOf(0);
                answer[level][index] = val;
                level--;
                
                if (level === 0 || answer[level].indexOf(0) === -1) {
                    type = 'down';
                    level+=2;
                }
                break;
        }
        val++;
    }
    
    return answer.reduce((acc, cur) => [...acc, ...cur], []);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/68646">풍선 터트리기</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/68647">짝수 행 세기</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/68935">3진법 뒤집기</a></summary>
        
```javascript
function solution(n) {
    return Number.parseInt(n.toString(3).split('').reverse().join(''), 3);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/68936">쿼드압축 후 개수 세기</a></summary>
        
```javascript
function solution(arr) {    
    let answer = [0, 0];
    checkNum(0, 0, arr.length);
    
    function checkNum(y, x, size) {
        if (size === 1) {
            answer[arr[y][x]]++;
            return;
        }
        
        let temp = arr[y][x];
        for (let ty = y; ty < y + size; ty++) {
            for (let tx = x; tx < x + size; tx++) {
                if (temp !== arr[ty][tx]) {
                    size /= 2;
                    checkNum(y, x, size);
                    checkNum(y, x + size, size);
                    checkNum(y + size, x, size);
                    checkNum(y + size, x + size, size);
                    return;
                }
            }
        }
        // console.log(y, x, size);
        answer[arr[y][x]]++;
    }
    return answer;
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/68937">트리 트리오 중간값</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/70128">내적</a></summary>
        
```javascript
function solution(a, b) {
    return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/70129">이진 변환 반복하기</a></summary>
        
```javascript
function solution(s) {
    let repeatCount = 0;
    let removeCount = 0;
    let temp = "";
    
    while(s != 1) {
        repeatCount++;
        temp = s.split("").reduce((acc, cur) => cur > 0 ? acc + cur : acc, "");
        removeCount += s.length - temp.length;
        s = temp.length.toString(2);
    }
    
    return [repeatCount, removeCount];
}
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/70130">스타 수열</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/70132">가짜 해밀토니안</a></summary>
        
```javascript
```
</details>


## 찾아라 프로그래밍 마에스터

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/1843">사칙연산</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/1844">게임 맵 최단거리</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/1845">폰켓몬</a></summary>
        
```javascript
function solution(nums) {
    let answer = {};
    nums.forEach(v => answer[v] = 1);
    const len = Object.keys(answer).length
    return nums.length / 2 < len ? nums.length / 2 : len;
}
```
</details>



## 2017 팁스타운

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12973">짝지어 제거하기</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12983">단어 퍼즐</a></summary>
        
```javascript
```
</details>

<details>
    <summary><a href="https://programmers.co.kr/learn/courses/30/lessons/12985">예상 대진표</a></summary>
        
```javascript
function solution(n,a,b)
{
    let answer = 1;
    a--;
    b--;
    
    while(1) {
        a = a / 2 | 0;
        b = b / 2 | 0;
        if (a === b) {
            return answer;
        }
        answer++;
    }
}
```
</details>