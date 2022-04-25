/**
https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/

Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

 

Example 1:

Input: nums = ["777","7","77","77"], target = "7777"
Output: 4
Explanation: Valid pairs are:
- (0, 1): "777" + "7"
- (1, 0): "7" + "777"
- (2, 3): "77" + "77"
- (3, 2): "77" + "77"
Example 2:

Input: nums = ["123","4","12","34"], target = "1234"
Output: 2
Explanation: Valid pairs are:
- (0, 1): "123" + "4"
- (2, 3): "12" + "34"
Example 3:

Input: nums = ["1","1","1"], target = "11"
Output: 6
Explanation: Valid pairs are:
- (0, 1): "1" + "1"
- (1, 0): "1" + "1"
- (0, 2): "1" + "1"
- (2, 0): "1" + "1"
- (1, 2): "1" + "1"
- (2, 1): "1" + "1"
 

Constraints:

2 <= nums.length <= 100
1 <= nums[i].length <= 100
2 <= target.length <= 100
nums[i] and target consist of digits.
nums[i] and target do not have leading zeros.
 */

/**
 * nums i번째일 때 전체를 탐색하는 것이 비효율적이라고 생각해 각 num을 Object에 담아 target 앞부분이 nums[i]와 같을 때 뒷부분을 Object에서 바로 탐색할 수 있게 풀이했다.
 * 하지만 전체 탐색해 nums[i] + nums[j]를 target과 비교하는게 제일 빨리 끝나는건 함정..
 */

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
 var numOfPairs = function(nums, target) {
    let answer = 0;
    const objNums = {};
    let i = 0;
    nums.forEach(num => {
        objNums[num] = objNums[num] ? objNums[num] + 1 : 1;
    });
    
    nums.forEach(num => {
        i = 0;
        for (len = num.length; i < len; i++) {
            if (num[i] !== target[i])
                return;
        }
        const temp = target.slice(i);
        answer += objNums[temp] || 0
        if (num === temp) 
            answer--;
    })
    
    return answer;
};

// Accepted Minimum Runtime Solution
/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
 var numOfPairs = function(nums, target) {
    let count = 0
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length ; j++){
            if(j != i){
               if(nums[i] + nums[j] == target){
                   count++
               }
            }
        }
    }
    return count
};

// Accepted Minimum Memory Solution
/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
 var numOfPairs = function(nums, target) {
    let count = 0;
    let map = new Map();
    
    for(let i=0; i<nums.length; i++){
        map.set(nums[i], (map.has(nums[i])?map.get(nums[i]):0)+1);
    }
    
    //console.log(map)
    
    for(let i=0; i<target.length; i++){
        let pre = target.slice(0, i+1);
        let suf = target.slice(i+1);
        //console.log(pre, suf)
        if(pre===suf){
            count += (map.has(pre)?map.get(pre):0) * (map.has(pre)?map.get(pre)-1:0);
        }else{
            count += (map.has(pre)?map.get(pre):0) * (map.has(suf)?map.get(suf):0);
        }
    }
    
    return count;
};