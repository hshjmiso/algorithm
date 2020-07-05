// 프린터
function solution(priorities, location) {
    let answer = 0;
    let max = 0;
    
    priorities = priorities.map((v, i) => ({value: v, location: i}));

    while(priorities.length > 0) {
        max = Math.max(...priorities.map(v => v.value));
        
        if (priorities[0].value === max) {
            answer++;
            if (priorities[0].location === location) {
                return answer;
            } else {
                priorities.shift();   
            }
        } else {
            priorities.push(priorities.shift());    
        }
    }

}

// others solution
function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}

function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}