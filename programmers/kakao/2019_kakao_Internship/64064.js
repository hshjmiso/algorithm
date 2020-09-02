// 불량 사용자
// fail
function solution(user_id, banned_id) {
    const userObj = {};
    const bannedObj = {};
    let regexp = '';
    let bannedId = '';
    let userId = '';
    let answer = [];
    
    for (let i = 0, iLen = banned_id.length; i < iLen; i++) {
        bannedId = banned_id[i];
        // bannedObj[bannedId] = [];
        answer[i] = []; 
        regexp = new RegExp(`^${bannedId.replace(/[*]/g, '.')}$`, 'g');
        for (let j = 0, jLen = user_id.length; j < jLen; j++) {
            userId = user_id[j];
            if (userId.match(regexp)) {
                answer[i].push(userId);
                // userObj[userId] = userObj[userId] ? ++ userObj[userId] : 1;
            }
        }
    }
    
    console.log(answer, bannedObj, userObj);
}