// 블록 이동하기
class Robot {
    constructor(coord1, coord2, dist) {
        this.coord1 = coord1;
        this.coord2 = coord2;
        this.dist = dist;
    }
}



function solution(board) {
    const move = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const rotateH = [[[0, 0], [1, -1]], [[1, 1], [0, 0]]];
    const rotateV = [[[0, 0], [-1, 1]], [[1, 1], [0, 0]]];
    let len = board.length;
    let nBoard = Array.from(Array(len + 2), () => Array(len + 2).fill(1));
    for (let y = 0; y < len; y++) {
        for (let x = 0; x < len; x++) {
            nBoard[y + 1][x + 1] = board[y][x];
        }
    }
    bfs([1, 1], [1, 2], 0);
    // console.log(nBoard);
    function bfs(coord1, coord2, dist) {
        const robot = new Robot(coord1, coord2, dist);
        const q = [robot];
        const visited = [robot];
        while(q.length) {
            const temp = q.shift();
            if (temp.coord1[0] === len && temp.coord1[1] === len ||
                temp.coord2[0] === len && temp.coord2[1] === len) {
                return temp.dist;
            }
            for (let i = 0, len = move.length; i < len; i++) {
                const nCoord1 = [temp.coord1[0] + move[i][0], temp.coord1[1] + move[i][1]];
                const nCoord2 = [temp.coord2[0] + move[i][0], temp.coord2[1] + move[i][1]];

                if (nBoard[nCoord1[0]][nCoord1[1]] !== 1 && nBoard[nCoord2[0]][nCoord2[1]] !== 1) {
                    const nDist = temp.dist + 1;
                    
                     if (!checkVisited(visited, nCoord1, nCoord2)) {
                        const nRobot = new Robot(nCoord1, nCoord2, nDist);
                        q.push(nRobot);
                        visited.push(nRobot);
                    }
                }
            }
            
            for (let i = 0, len = rotateH.length; i < len; i++) {
                const nCoord1 = [temp.coord1[0] + rotateH[i][0][0], temp.coord1[1] + rotateH[i][0][1]];
                const nCoord2 = [temp.coord2[0] + rotateH[i][1][0], temp.coord2[1] + rotateH[i][1][1]];

                if (nBoard[nCoord1[0]][nCoord1[1]] !== 1 && nBoard[nCoord2[0]][nCoord2[1]] !== 1) {
                    const nDist = temp.dist + 1;
                    
                    if (!checkVisited(visited, nCoord1, nCoord2)) {
                        const nRobot = new Robot(nCoord1, nCoord2, nDist);
                        q.push(nRobot);
                        visited.push(nRobot);
                    }
                }
                
            }
            
            for (let i = 0, len = rotateV.length; i < len; i++) {
                const nCoord1 = [temp.coord1[0] + rotateV[i][0][0], temp.coord1[1] + rotateV[i][0][1]];
                const nCoord2 = [temp.coord2[0] + rotateV[i][1][0], temp.coord2[1] + rotateV[i][1][1]];
                
                if (nBoard[nCoord1[0]][nCoord1[1]] !== 1 && nBoard[nCoord2[0]][nCoord2[1]] !== 1) {
                    const nDist = temp.dist + 1;
                    
                    if (!checkVisited(visited, nCoord1, nCoord2)) {
                        const nRobot = new Robot(nCoord1, nCoord2, nDist);
                        q.push(nRobot);
                        visited.push(nRobot);
                    }
                }
            }
        }
    }
}

function checkVisited(visited, nCoord1, nCoord2) {
    for (let i = 0, len = visited.length; i < len; i++) {
        const coord1 = visited[i].coord1;
        const coord2 = visited[i].coord2;
        if (coord1[0] === nCoord1[0] && coord1[1] === nCoord1[1] &&
            coord2[0] === nCoord2[0] && coord2[1] === nCoord2[1]) {
            return true;
        }
    }
    return false;
}

solution([[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]);