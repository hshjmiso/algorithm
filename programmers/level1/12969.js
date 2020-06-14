// 직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = '';
    for(let y = 0; y < b; y++) {
        for(let x = 0; x < a; x++) {
            star+='*';
        }
        star+='\n';
    }
    console.log(star);
});