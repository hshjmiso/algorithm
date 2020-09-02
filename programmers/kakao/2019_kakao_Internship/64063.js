// 호텔 방 배정
// fail 84.8
function solution(k, room_number) {
    let answer = [];
    let room = new Array(k + 1);
    let roomNum = 0;
    let emptyRoomNum = 0;
    
    for (let i = 0, len = room_number.length; i < len; i++) {
        roomNum = room_number[i];
        emptyRoomNum = getEmptyRoomNum(room_number[i], room);
        answer.push(emptyRoomNum);
        room[roomNum] = emptyRoomNum + 1;
    }
    return answer;
}

function getEmptyRoomNum(num, room) {
    while(1) {
        if (!room[num]) {
            room[num] = num + 1;
            return num;
        }
        num = room[num];
    }
}