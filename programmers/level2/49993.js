// 스킬트리
function solution(skill, skill_trees) {
    let answer = 0;
    let index = 1;
    let skillObj = {};
    let checkSkill = true;
    
    skill.split('').forEach((v, i) => {
        skillObj[v] = ++i;
    });
    
    skill_trees.forEach(v => {
        index = 1;
        checkSkill = true;
        for (let ix = 0, len = v.length; ix < len; ix++) {
            if (skillObj[v[ix]]) {
                if (skillObj[v[ix]] == index) {
                    ++index;
                } else {
                    checkSkill = false;
                    break;
                }
            }
        }
        if (checkSkill) {
            answer++;
        }
    });
    
    return answer;
}

// others solution
function solution(skill, skill_trees) {
    var answer = 0;
    var regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        })
        .length
}

function solution(skill, skill_trees) {
    function isCorrect(n) {
        let test = skill.split('');
        for (var i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        }
        return true;
    }    

    return skill_trees.filter(isCorrect).length;
}