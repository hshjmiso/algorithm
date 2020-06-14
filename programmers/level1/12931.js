// 자릿수 더하기
function solution(n)
{
    return (n+"").split('').reduce((acc, cur) => acc + +cur, 0);
}