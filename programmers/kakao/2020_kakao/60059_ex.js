/**
 * key는 M x M(3 ≤ M ≤ 20, M은 자연수)크기 2차원 배열입니다.
 * lock은 N x N(3 ≤ N ≤ 20, N은 자연수)크기 2차원 배열입니다.
 * M은 항상 N 이하입니다.
 
 * 2M+N 배열을 만들어 M~ lock을 위치 시키고 key를 움직이면서 lock이 전부 1이 되는지를 체크한다.
 */

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