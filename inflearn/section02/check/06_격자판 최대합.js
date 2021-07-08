/**
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
10 13 10 12 15 
12 39 30 23 11 
11 25 50 53 15 
19 27 29 37 27 
19 13 30 13 19
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 
각 자연수는 100을 넘지 않는 다.
▣ 출력설명 최대합을 출력합니다.
▣ 입력예제 1
5
10 13 10 12 15 
12 39 30 23 11 
11 25 50 53 15 
19 27 29 37 27 
19 13 30 13 19
▣ 출력예제 1 
155
 */

function solution(N, board) {
    let answer = 0;
    let newValue = [0, 0, 0, 0];
    let y = 0, x = 0;
    let temp = 0;
    
    for (let i = 0; i < N; i++) {
        newValue = [0, 0, 0, 0];
        for (let j = 0; j < N; j++) {
            newValue[0] += board[i][j];
            newValue[1] += board[j][i];
            for (let k = 0; k < N; k++) {
                y = i + k;
                x = j + k;
                newValue[2] += checkCoord(y, x, N) ? board[y][x] : 0;
                // console.log('2', y, x, checkCoord(y, x, N) ? board[y][x] : 'none');
                y = i + k;
                x = j - k;
                newValue[3] += checkCoord(y, x, N) ? board[y][x] : 0;
                // console.log('3', y, x, checkCoord(y, x, N) ? board[y][x] : 'none');
            }
            temp = Math.max(newValue[2], newValue[3]);
            answer = answer < temp ? temp : answer;
            newValue[2] = newValue[3] = 0;
        }
        
        temp = Math.max(newValue[0], newValue[1]);
        answer = answer < temp ? temp : answer;
    }

    return answer;
}

function checkCoord(y, x, N) {
    return y >= 0 && y < N && x >= 0 && x < N;
}

function solution2(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    let n=arr.length;
    let sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1=sum2=0;
        for(let j=0; j<n; j++){
            sum1+=arr[i][j];
            sum2+=arr[j][i];
        }
        answer=Math.max(answer, sum1, sum2);
    }
    sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1+=arr[i][i];
        sum2+=arr[i][n-i-1];
    }  
    answer=Math.max(answer, sum1, sum2); 
    return answer;
}

console.log(solution(5, 
    [
        [10, 13, 10, 12, 15],
        [12, 39, 30, 23, 11], 
        [11, 25, 50, 53, 15], 
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19],
    ]));
console.log(solution(3, 
    [
        [1, 1, 1],
        [2, 2, 2], 
        [3, 3, 3], 
    ]));

console.log(solution(3, 
    [
        [1, 1, 2, 1],
        [1, 2, 1, 1], 
        [2, 1, 1, 1], 
        [1, 1, 1, 1], 
    ]));