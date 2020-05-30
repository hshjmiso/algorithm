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

// others solution
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution2 = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
