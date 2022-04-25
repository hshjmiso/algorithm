/**
https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3x.

 

Example 1:

Input: n = 12
Output: true
Explanation: 12 = 31 + 32
Example 2:

Input: n = 91
Output: true
Explanation: 91 = 30 + 32 + 34
Example 3:

Input: n = 21
Output: false
 

Constraints:

1 <= n <= 107
 */

/**
 * @param {number} n
 * @return {boolean}₩`
 */
 var checkPowersOfThree = function(n) {
    let answer = false;
    const powersOfThree = [0];
    let temp = 1;
    
    while (n >= temp) {
        powersOfThree.push(temp);
        temp *= 3;
    }
    
    const len = powersOfThree.length;
    
    function checkNumber(i, v) {
        if (v <= 0 || i >= len) {
            if (v === 0) {
                answer = true;
            }
            return;
        }
        
        i++;
        checkNumber(i, v - powersOfThree[i]);
        checkNumber(i, v);
        
    }
    
    checkNumber(0, n);
    
    
    return answer;
};

// others

/**
 * @param {number} n
 * @return {boolean}
 */
 var checkPowersOfThree = function(n) {
    if(n===1)return true;
  if(n<3) return false;

    return sumOfThree(Math.floor(n/3), n%3);
};

let sumOfThree=function(n,rem){
    if(n===1 && (rem===1||rem===0)) return true;
    if(n<1 || rem>1) return false;
    return sumOfThree(Math.floor(n/3),n%3);
}

/**
 * @param {number} n
 * @return {boolean}
 */
 const checkPowersOfThree = n => {
    return n.toString(3).split('').every(d => Number(d) === 0 || Number(d) === 1);
};