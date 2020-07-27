# baekjoon

* 단계
    * [입출력과 사칙연산]()
    * [if문]()
    * [for문]()
    * [while문]()
    * 실습 1
    * 1차원 배열
    * 함수
    * 문자열
    * 수학 1
    * 수학 2
    * 재귀
    * 실습 2
    * 브루트 포스
    * 정렬
    * 백트래킹
    * 동적 계획법 1
    * 실습 3
    * 그리디 알고리즘
    * 수학 3
    * 스택
    * 큐, 덱
    * 실습 4
    * 분할 정복
    * 이분 탐색
    * 우선순위 큐
    * 동적 계획법 2
    * 실습 5
    * DFS와 BFS
    * 최단 경로
    * 동적 계획법 3
    * 동적 계획법과 최단거리 역추적
    * 스위핑 (수정 예정)
    * 실습 6
    * 트리
    * 유니온 파인드
    * 최소 신장 트리
    * 트리에서의 동적 계획법
    * 실습 7
    * 수학 4 (수정 예정)
    * 문자열 알고리즘 1
    * 위상 정렬
    * 최소 공통 조상
    * 강한 연결 요소
    * 실습 8
    * 세그먼트 트리
    * 동적 계획법 4 (수정 예정)
    * 컨벡스 헐
    * 실습 9
    * 이분 매칭
    * 네트워크 플로우
    * MCMF (수정 예정)
    * 수학 5? (수정 중)
    * 문자열 알고리즘 2
    * 실습 10
    * 어려운 구간 쿼리
    * 동적 계획법 최적화
    * 매우 어려운 자료구조와 알고리즘 (수정 예정)
    * 실습 11

## 입출력과 사칙연산
* [Hello World](https://www.acmicpc.net/problem/2557)
  * [solution](./01_IO&arithmetic_operations/2557.js)
* [We love kriii](https://www.acmicpc.net/problem/10718)
  * [solution](./01_IO&arithmetic_operations/10718.js)
* [고양이](https://www.acmicpc.net/problem/10171)
  * [solution](./01_IO&arithmetic_operations/10171.js)
* [개](https://www.acmicpc.net/problem/10172)
  * [solution](./01_IO&arithmetic_operations/10172.js)
* [A+B](https://www.acmicpc.net/problem/1000)
  * [solution](./01_IO&arithmetic_operations/1000.js)
* [A-B](https://www.acmicpc.net/problem/1001)
  * [solution](./01_IO&arithmetic_operations/1001.js)
* [A×B](https://www.acmicpc.net/problem/10998)
  * [solution](./01_IO&arithmetic_operations/10998.js)
* [A/B](https://www.acmicpc.net/problem/1008)
  * [solution](./01_IO&arithmetic_operations/1008.js)
* [사칙연산](https://www.acmicpc.net/problem/10869)
  * [solution](./01_IO&arithmetic_operations/10869.js)
* [나머지](https://www.acmicpc.net/problem/10430)
  * [solution](./01_IO&arithmetic_operations/10430.js)
* [곱셈](https://www.acmicpc.net/problem/2588)
  * [solution](./01_IO&arithmetic_operations/2588.js)

## if문
* [두 수 비교하기](https://www.acmicpc.net/problem/1330)
* [시험 성적](https://www.acmicpc.net/problem/9498)
* [윤년](https://www.acmicpc.net/problem/2753)
* [사분면 고르기](https://www.acmicpc.net/problem/14681)
* [알람 시계](https://www.acmicpc.net/problem/2884)

## for문
* [구구단](https://www.acmicpc.net/problem/2739)
* [A+B - 3](https://www.acmicpc.net/problem/10950)
* [합](https://www.acmicpc.net/problem/8393)
* [빠른 A+B](https://www.acmicpc.net/problem/15552)
* [N 찍기](https://www.acmicpc.net/problem/2741)
* [기찍 N](https://www.acmicpc.net/problem/2742)
* [A+B - 7](https://www.acmicpc.net/problem/11021)
* [A+B - 8](https://www.acmicpc.net/problem/11022)
* [별 찍기 - 1](https://www.acmicpc.net/problem/2438)
* [별 찍기 - 2](https://www.acmicpc.net/problem/2439)
* [X보다 작은 수](https://www.acmicpc.net/problem/10871)

## while문
* [A+B - 5](https://www.acmicpc.net/problem/10952)
* [A+B - 4](https://www.acmicpc.net/problem/10951)
* [더하기 사이클](https://www.acmicpc.net/problem/1110)

### crawling
``` javascript
const titleList = document.querySelectorAll('tr td:nth-child(3)');

titleList.forEach(v => {
console.log(`* [${v.textContent}](${v.children[0].href})`);
});
```