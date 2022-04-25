/**
https://leetcode.com/problems/print-words-vertically/

Given a string s. Return all the words vertically in the same order in which they appear in s.
Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
Each word would be put on only one column and that in one column there will be only one word.

 

Example 1:

Input: s = "HOW ARE YOU"
Output: ["HAY","ORO","WEU"]
Explanation: Each word is printed vertically. 
 "HAY"
 "ORO"
 "WEU"
Example 2:

Input: s = "TO BE OR NOT TO BE"
Output: ["TBONTB","OEROOE","   T"]
Explanation: Trailing spaces is not allowed. 
"TBONTB"
"OEROOE"
"   T"
Example 3:

Input: s = "CONTEST IS COMING"
Output: ["CIC","OSO","N M","T I","E N","S G","T"]
 

Constraints:

1 <= s.length <= 200
s contains only upper case English letters.
It's guaranteed that there is only one space between 2 words.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
 var printVertically = function(s) {
    const answer = [];
    const splitStr = s.split(' ');
    let i = 0;
    
    while(true) {
        let temp = "";
        splitStr.forEach(v => {
            temp += v[i] || " ";
        });
        
        temp = temp.trimEnd();
        
        if (!temp)
            break;
        
        answer.push(temp);
        i++;
    }
    return answer;
};

// others

/**
 * @param {string} s
 * @return {string[]}
 */
 var printVertically = function(s) {
    const prints = [];
    
    const words = s.split(' ');
    const maxWordLength = words.reduce((max, w) => w.length > max ? w.length : max, 0);
    for (let cnt = 0; cnt < maxWordLength; cnt++) {
        let print = '';
        
        for (let idx = 0; idx < words.length; idx++) {
            if (words[idx].charAt(cnt) === '') {
                print = print.concat(' ');
            } else {
                print = print.concat(words[idx].charAt(cnt));
            }
        }
        
        prints.push(print.trimEnd());
    }
    
    return prints;
};

/**
 * @param {string} s
 * @return {string[]}
 */
 var printVertically = function(s) {
    s = s.split(" ").map(x => x.trim());
    let maxSize = Math.max(...s.map(x=>x.length))
    let result=[], i=0;
    while(i<maxSize) {
        let temp = ''
        for(let j=0;j<s.length;j++) {
            let currChar = s[j].charAt(i) ? s[j].charAt(i) : ' '  ;
            temp +=currChar
        }
        result.push(temp.trimEnd());
        i++;
    }
    return result;
};