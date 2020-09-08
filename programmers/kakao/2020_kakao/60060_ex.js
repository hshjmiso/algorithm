// 가사 검색
/**
 * Trie 이용
 * 문자열 길이만큰 Trie 객체 생성
 * ?의 앞 뒤 tries reverseds 두가지 종류를 생성하여 해결 
 **/ 
 
class Node {
    constructor(value, count = 0, child = {}, end = false) {
        this.value = value;
        this.count = count;
        this.child = child;
        this.end = end;
    }
}

class Trie {
    constructor() {
        this.root = new Node('');
    }

    insert(str) {
        let currentNode = this.root;
        currentNode.count++; // ????가 들어왔을 때를 위해
        let currentChar = '';
        let currentValue = '';
        for (let i = 0, len = str.length; i < len; i++) {
            currentChar = str[i];
            if (!currentNode.child[currentChar]) {
                currentValue = currentNode.value + currentChar;
                currentNode.child[currentChar] = new Node(currentValue);
            }
            currentNode = currentNode.child[currentChar];
            currentNode.count++;
        }
        currentNode.end = true;
    }

    search(str) {
        let currentNode = this.root;
        let currentChar = '';
        for (let i = 0, len = str.length; i < len; i++) {
            currentChar = str[i];
            if (currentNode.child[currentChar]) {
                currentNode = currentNode.child[currentChar];
            } else {
                return 0;
            }
        }
        return currentNode.count;
    }
}

function solution(words, queries) {
    let answer = [];
    let arrTrie = new Array(100001).fill();
    let pretrie = null;
    let sutrie = null;
    for (let i = 1, len = arrTrie.length; i < len; i++) {
        pretrie = new Trie();
        sutrie = new Trie();
        arrTrie[i] = [pretrie, sutrie];
    }
    let size = 0;
    let word = '';
    for (let i = 0, len = words.length; i < len; i++) {
        size = words[i].length;
        word = words[i];
        arrTrie[size][0].insert(word);
        word = word.split('').reverse().join('');
        arrTrie[size][1].insert(word);
    }


    for (let i = 0, len = queries.length; i < len; i++) {
        size = queries[i].length;
        word = queries[i].split('?').join('');
        if (size) {
            if (queries[i][0] !== '?') {
                answer.push(arrTrie[size][0].search(word));
            } else {
                word = word.split('').reverse().join('');
                answer.push(arrTrie[size][1].search(word));
            }
        } 
    }
    return answer;
}

// console.log(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??", "????o", "fr???", "fro???", "pro?"]));

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