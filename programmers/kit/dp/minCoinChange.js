function MinCoinChange(coins) {
    // 중복 계산을 최대한 피하고 효율적인 실행을 위해 cache를 두었다.
    let cache = {}; 
  

    this.makeChange = function(amount) {
        let me = this;
        // 금액인 0 또는 음수라면 빈 배열을 반환한다.
        if (amount <= 0) {
            return [];
        }
        // 결과가 캐시되어 있다면 캐시 값을 반환하고, 아직 캐시되기 전이라면 이 후 코드를 실행한다.
        if (cache[amount]) {
            return cache[amount];
        }
        let min = [];
        let newMin = 0;
        let newAmount = 0;
    
        for (let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            // 각 동전에 대해 newAmount를 계산한다.
            newAmount = amount - coin;
            // 양수인 newAmount 값에 대해 다시 재귀 호출을 한다.
            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            }
            if (
                newAmount >= 0 && // newAmount가 유효한지
                (newMin.length < min.length - 1 || !min.length) && // 최적의 newMin이 도출 됐는지
                (newMin.length || !newAmount) // newMin과 newAmount 모두 유효한 값인지
            ) {
                min = [coin].concat(newMin); // 이전보다 더 나은 결과를 얻었다는 반증이다.
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[amount] = min);
    };
}

const minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));