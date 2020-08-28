// 크레인 인형뽑기 게임
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