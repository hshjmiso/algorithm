// 핸드폰 번호 가리기
function solution(phone_number) {
    const len = phone_number.length;
    return '*'.repeat(len - 4) + phone_number.slice(-4);
}