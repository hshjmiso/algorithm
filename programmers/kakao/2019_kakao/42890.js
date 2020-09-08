// 후보키
// fail 46.4
function solution(relation) {
    let answer = 0;
    let subsets = getSubsets(relation[0].length);
    subsets.sort((a, b) => a.length - b.length);

    let subset = null;
    for (let i = 0, len = subsets.length; i < len; i++) {
        subset = subsets[i];
        // console.log(subset);
        if (subset.length) {
            if (relation.length === getRowCount(relation, subset)) {
                answer++;
                subsets = excludeSubset(subsets, subset);
                i--;
                len = subsets.length;
            }    
        }       
    }
    
    return answer;
}

function getSubsets(len) {
    const subsets = [];
    const indexs = new Array(len).fill(0).map((v, i) => i);
    const flags = new Array(len).fill(false);
    
    function recursion (depth) {
        if (depth === len) {
            subsets.push(indexs.filter((v, i) => flags[i]));
            return;
        }
        flags[depth] = true;
        recursion(depth + 1);
        flags[depth] = false;
        recursion(depth + 1);
    }
    recursion(0);
    
    return subsets;
}

function getRowCount(relation, subset) {
    let obj = {};
    let key = '';
    
    for (let i = 0, iLen = relation.length; i < iLen; i++) {
        key = '';
        for (let j = 0, jLen = subset.length; j < jLen; j++) {
            key += relation[i][subset[j]];
        }
        obj[key] = 1;
    }
    // console.log(obj);
    
    return Object.keys(obj).length;
}

function excludeSubset(subsets, subset) {
    return subsets.filter(v => {
        for(let i = 0, len = subset.length; i < len; i++) {
            if (v.includes(subset[i])) {
                return false;
            }
        }
        return true;
    })
}