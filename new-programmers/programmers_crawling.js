// 코딩테스트 고득점 Kit title
const kitTitle = () => {
    const $cardTitle = document.querySelectorAll('.card-title');
    let arrStr = [];

    $cardTitle.forEach(title => {
        arrStr.push(title.textContent);
    });

    arrStr.forEach(str => {
        temp += `* [${str}]()\n`
    });
};

/*
<details>
  <summary>Click to expand!</summary>
  
```python
def func():
    return 'hello, world!'
```
</details>
 */
// 각 문제 title, link
const kitProblem = () => {
    const $title = document.querySelectorAll('.title');
    const $a = document.querySelectorAll('.card-algorithm > a');

    let str = [];
    let arrTitle = [];

    $title.forEach((title, i) => {
        let link = $a[i].href;
        str += `<details>
    <summary><a href="${link}">${title.textContent}</a></summary>
        
\`\`\`javascript
\`\`\`
</details>\n\n`;
        arrTitle.push(title.textContent);
    });

    console.log(str);
    console.log(JSON.stringify(arrTitle));
};

const competitionProblem = () => {
    const $competition = document.querySelector('#collapseFilterCompetition');
    const $spanList = $competition.querySelectorAll('span');

    let arrStr = [];

    $spanList.forEach(span => {
        arrStr.push(span.textContent);
    });
};

// ["2021 KAKAO BLIND RECRUITMENT","2020 KAKAO BLIND RECRUITMENT","2019 KAKAO BLIND RECRUITMENT","2018 KAKAO BLIND RECRUITMENT","2019 카카오 개발자 겨울 인턴십","2020 카카오 인턴십","2017 카카오코드 예선","2017 카카오코드 본선","Summer/Winter Coding(~2018)","Summer/Winter Coding(2019)","월간 코드 챌린지 시즌1","찾아라 프로그래밍 마에스터","2017 팁스타운"]

const createKitFile = () => {
    let fs = require('fs');
    
    /** 
     * 코딩테스트 고득점 Kit
    const folders = ["해시","스택/큐","힙(Heap)","정렬","완전탐색","탐욕법(Greedy)","동적계획법(Dynamic Programming)","깊이/너비 우선 탐색(DFS/BFS)","이분탐색","그래프"];
    const files = [
        ["완주하지 못한 선수","전화번호 목록","위장","베스트앨범"], 
        ["다리를 지나는 트럭","주식가격","기능개발","프린터"],
        ["더 맵게","디스크 컨트롤러","이중우선순위큐"],
        ["K번째수","가장 큰 수","H-Index"],
        ["모의고사","소수 찾기","카펫"],
        ["체육복","조이스틱","큰 수 만들기","구명보트","섬 연결하기","단속카메라"],
        ["N으로 표현","정수 삼각형","등굣길","도둑질"],
        ["타겟 넘버","네트워크","단어 변환","여행경로"],
        ["입국심사","징검다리"],
        ["가장 먼 노드","순위","방의 개수"],
    ];
    let tempFolder = '코딩테스트 고득점 Kit';
     */

    /**
     * 문제 모음
     */
    const folders = ["2021 KAKAO BLIND RECRUITMENT","2020 KAKAO BLIND RECRUITMENT","2019 KAKAO BLIND RECRUITMENT","2018 KAKAO BLIND RECRUITMENT","2019 카카오 개발자 겨울 인턴십","2020 카카오 인턴십","2017 카카오코드 예선","2017 카카오코드 본선","Summer/Winter Coding(~2018)","Summer/Winter Coding(2019)","월간 코드 챌린지 시즌1","찾아라 프로그래밍 마에스터","2017 팁스타운"];
    const files = [
        ["신규 아이디 추천","메뉴 리뉴얼","순위 검색","합승 택시 요금","광고 삽입","카드 짝 맞추기","매출 하락 최소화"],
        ["문자열 압축","괄호 변환","자물쇠와 열쇠","가사 검색","기둥과 보 설치","외벽 점검","블록 이동하기"],
        ["오픈채팅방 ","실패율","후보키","무지의 먹방 라이브","길 찾기 게임","매칭 점수","블록 게임"],
        ["[1차] 추석 트래픽","[1차] 뉴스 클러스터링","[1차] 셔틀버스","[1차] 프렌즈4블록","[1차] 캐시","[1차] 비밀지도","[1차] 다트 게임","[3차] 방금그곡","[3차] 압축","[3차] 자동완성","[3차] 파일명 정렬","[3차] n진수 게임"],
        ["크레인 인형뽑기 게임","튜플","불량 사용자","호텔 방 배정","징검다리 건너기"],
        ["키패드 누르기","수식 최대화","보석 쇼핑","경주로 건설","동굴 탐험"],
        [],
        [],
        ["스킬트리","방문 길이","쿠키 구입","배달","스티커 모으기(2)","소수 만들기","기지국 설치","점프와 순간 이동","숫자 게임","지형 편집","영어 끝말잇기","예산"],
        ["멀쩡한 사각형","지형 이동"],
        ["두 개 뽑아서 더하기","삼각 달팽이","풍선 터트리기","짝수 행 세기","3진법 뒤집기","쿼드압축 후 개수 세기","트리 트리오 중간값","내적","이진 변환 반복하기","스타 수열","가짜 해밀토니안"],
        ["사칙연산","게임 맵 최단거리","폰켓몬"],
        ["짝지어 제거하기","단어 퍼즐","예상 대진표"]
    ];
    let tempFolder = '문제 모음';    
    
    const regexp = /[\\/:*?"<>|]/g;
    tempFolder.replace(regexp, '&')

    // temp folder 생성
    if (!fs.existsSync(tempFolder)) {
        fs.mkdirSync(tempFolder);   
    }
    
    folders.forEach((folder, i) => {
        files[i].forEach(file => {
            folder = folder.replace(regexp, '&')
            file = file.replace(regexp, '&')
            console.log(`${folder}/${file}.js`);
            
            if (!fs.existsSync(`${tempFolder}/${folder}`)) {
                fs.mkdirSync(`${tempFolder}/${folder}`);   
            }

            fs.appendFile(`${tempFolder}/${folder}/${file}.js`, '', err => {
                console.log(err);
            });
       });
    });
}

createKitFile();