// 자물쇠와 열쇠
// fail 72.0
function solution(key, lock) {
    let [checkY, checkX] = checkCoord(lock);
    
    // console.log(checkY, checkX);
    for (let i = 0; i < 4; i++) {
        for(let y = 0, yLen = key.length; y < yLen; y++) {
            for (let x = 0, xLen = key[y].length; x < xLen; x++) {
                if (checkKey(key, y, x, lock, checkY, checkX)) {
                    return true;
                }
            }
        }
        key = rotateKey(key);
    }
    
    return false;
}

function checkCoord(lock) {
    const lockLen = lock.length;
    const checkLockY = [lockLen - 1, 0];
    const checkLockX = [lockLen - 1, 0];
    
    for (let y = 0; y < lockLen; y++) {
        for (let x = 0; x < lockLen; x++) {
            if (lock[y][x] === 0) {
                if (checkLockY[0] > y) {
                    checkLockY[0] = y;
                }
                if (checkLockY[1] < y) {
                    checkLockY[1] = y;
                }
                if (checkLockX[0] > x) {
                    checkLockX[0] = x;
                }
                if (checkLockX[1] < x) {
                    checkLockX[1] = x;
                }
            }
        }
    }
    
    return [checkLockY, checkLockX];
}

function checkKey(key, keyY, keyX, lock, checkLockY, checkLockX) {
    let [y, yLen] = checkLockY;
    let [x, xLen] = checkLockY;
    let temp = 0;
    for (;y < yLen; y++, keyY++) {
        for (;x < xLen; x++, keyX++) {
            temp = lock[y][x] + key[keyY][keyX];
            if (temp !== 1) {
                return false;
            }
        }
    }
    return true;
}

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