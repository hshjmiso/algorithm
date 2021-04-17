# programmers

* 코딩테스트 고득점 Kit
  * [해시](./hash/hashTable.mjs)
  * [스택](./stack/stack.mjs)/[큐](./queue/queue.mjs)
  * 힙(Heap)
  * 정렬
  * 완전탐색
  * 탐욕법(Greedy)
  * 동적계획법(Dynamic Programming)
  * [깊이/너비 우선 탐색(DFS/BFS)](./graph/graph.mjs)
  * 이분탐색
  * [그래프](./graph/graph.mjs)
* 기타
  * [집합](./set/set.mjs)

## 딕셔너리와 해시
* 집합처럼 딕셔너리와 해시는 유일한 값(반복되지 않는 값)을 저장하기 위한 자료 구조다.
* 집합이 원소의 값에 초점을 두었다면, 딕셔너리(또는 맵)는 값을 [키, 값] 형태로 저장한다.
* 해시 역시 [키, 값]으로 저장하지만 자료 구조를 구현하는 방법이 조금 다르다.

### 딕셔너리(dictionary) 
* 딕셔너리(dictionary)는 데이터를 [키, 값] 쌍으로 담아두는 자료 구조로, 키는 원소를 찾기 위한 식별자다. 
* 집합이 [키, 키], 딕셔너리가 [키, 값] 형태의 원소를 모아놓은 공간이라는 점에서 두 자료 구조는 비슷하다.
* 딕셔너리는 맵(map)이라고도 한다.

**메소드 목록**
* set(키, 값): 딕셔너리에 원소를 추가한다.
* remove(키): 키에 해당하는 원소를 삭제한다.
* has(키): 키에 해당하는 원소가 딕셔너리에 존재하면 true를, 그렇지 않으면 false를 반환한다.
* get(키): 키에 해당하는 원소의 값을 반환한다.
* clear(): 모든 원소를 삭제한다.
* size(): 원소의 개수를 반환한다. 배열의 length 프로퍼티와 비슷한다.
* keys(): 딕셔너리의 모든 키를 배열로 반환한다.
* values(): 딕셔너리의 모든 값을 배열로 반환한다.

```javascript
export default class Dictionary {
    constructor(items = {}) {
        this.items = items;
    }
    
    has(key) {
        return key in this.items;
    }

    set(key, value) {
        this.items[key] = value;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    values() {
        const values = [];
        for (let k in this.items) {
            if (this.has(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    keys() {
        return Object.keys(this.items);
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    getItems() {
        return this.items;
    }
}
```

### 해시 테이블
* 해싱(hashing)은 자료 구조에서 특정 값을 가장 신속하게 찾는 방법이다. 
* 해시 함수는 어떤 키에 해당하는 값의 주소를 테이블에서 찾아주는 함수이므로 조회 속도가 매우 빠르고 간단하다.

**메소드 목록**
```javascript
export default class HashTable {
    constructor(table = []) {
        this.table = table;
    }

    _loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // 임의의 숫자
    }

    put(key, value) {
        let position = this._loseloseHashCode(key);
        console.log(position + ' - ' + key);
        this.table[position] = value;
    }

    get(key) {
        return this.table[this._loseloseHashCode(key)];
    }

    remove(key) {
        return this.table[this._loseloseHashCode(key)] = undefined;
    }
}
```

## 정렬(Sort)

### 삽입 정렬(Insertion Sort)
* 삽입 정렬은 한 번에 한 원소씩 정렬된 배열을 만들어가는 알고리즘이다.
* 첫 번째 원소는 정렬이 끝났다고 가정하고, 두 번째 원소와 비교해 첫 번째 원소보다 더 작다면 첫 번째 원소 앞으로 옮긴다.
* 그래서 처음 두 원소의 정렬이 끝나면 다음엔 세 번째 원소와의 비교를 계속한다(첫 번째, 두 번째, 세 번째 위치 중 어디에 삽입할지 결정한다).

```javascript
this.insertionSort = function() {
  const length = array.length;
  let j = 0;
  let temp = 0;

  for (let i = 1; i < length; i++) {
    j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
}
```

### 병합 정렬(Merge Sort)
* 병합 정렬의 알고리즘의 핵심은 분할과 정복이다.
* 정렬할 배열을 원소가 하나뿐인 배열 단위로 나뉠 때까지 분할하고, 반대로 이렇게 분할된 배열을 점점 더 큰 배열로 병합하면서 정렬을 완성한다.

```javascript
this.mergeSort = function() {
  array = mergeSortRec(array);
};

const mergeSortRec = function(array) {
  const length = array.length;
  if (length === 1) {
    return array;
  }
  const mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, length);

  return merge(mergeSortRec(left), mergeSortRec(right))
}

const merge = function(left, rigth) {
  let result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  while (il < left.length) {
    result.push(left[il++]);
  }

  while (ir < right.length) {
    result.push(right[ir++]);
  }

  return result;
};
```

### 퀵 정렬(Quick Sort)
* 병합 정렬과 마찬가지로 분할/정복 방식으로 접근한다(그러나 병합 정렬과는 달리, 원소를 하나 가진 배열까지 잘게 쪼개지 않는다).
1. 배열의 중간 지점에 위치한 원소(피봇 pivot이라고 한다)를 선택한다.
2. 2개의 포인터(배열의 첫 번째 원소를 가리키는 좌측 포인터, 배열의 마지막 원소를 가리키는 우측 포인터)를 생성한다. 피봇보다 더 큰 원소가 나올 때까지 좌측 포인터를 움직이고, 피봇보다 더 작은 원소가 나올 때까지 우측 포인터를 움직인 다음, 두 포인터에 해당하는 원소를 서로 교환한다. 이 과정을 좌측 포인터가 우측 포인터보다 더 커질 때까지 반복한다. 이렇게 함으로써 피봇보다 작은 원소는 좌측에, 그리고 큰 원소는 우측에 나열된다. 이 작업을 파티션(partition)이라고 한다.
3. 그 결과 피봇을 중심으로 나뉜 두 서브배열(더 작은 원소 배열과 더 큰 원소 배열)에대해 정렬이 끝날 때까지 위 과정을 재귀적으로 반복한다.

```javascript
this.quickSort = function() {
  quick(array, 0, array.length - 1);
};

const quick = function(array, left, right) {
  let index = 0;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quick(array, left, index - 1);
    }

    if (index < right) {
      quick(array, index, right);
    }
  }
};

const partition = function(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)]

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swapQuickSort(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

const swapQuickSort = function(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
```

## 동적 프로그래밍(DP, dynamic programming)
* 동적 프로그래밍은 복잡한 문젤르 작은 하위 문제들로 나누어 푸는 최적화 기법이다.
1. 하위 문제들을 정의한다.
2. 하위 문제들을 풀기 위한 재귀를 구현한다.
3. 베이스 케이스를 찾아낸다.

* 배낭 문제: 담을 수 있는 짐 무게의 최대값이 정해져 '배낭'에 일정 가치와 무게의 짐들을 넣을 때 가치의 총합을 최대로 할 방법을 찾는 문제다.
* 최장 공통 부분수열(LCS, longest common subsequence): 주어진 다수의 수열 모두의 부분수열이 되는 수열 중에 가장 긴 것(남아 있는 원소의 순서를 바꾸지 않은 채 일부 원소를 삭제하든지 하여 다른 수열로부터 파생 가능한 수열)을 찾는 문제다.
* 행렬 연쇄 곱셈(matrix chain multiplication): 주어진 행렬 집합에서 가장 효율적으로(가능하다면 적은 연산으로) 행렬들을 곱하는 방법을 찾는 문제다. 실제로 곱셈을 하는 것은 아니고, 행렬의 곱셈 순서 조합을 찾는 것이다.
* 동전 교환: 정해진 금액을 동적 d1, d2, ..., dn으로 바꿔주는 경우의 수를 찾는 문제다.
* 그래프에서 모든 쌍의 최단 경로: 그래프의 모든 정점 쌍 (u, v) 간의 최단 거리를 찾는 문제다.

```javascript
function MinCoinChange(coins) {
  let coins = coins;
  let cache = {};

  this.makeChange = function(amount) {
    let me = this;
    if (!amount) {
      return [];
    }
    if (cache[amount]) {
      return cache[amount];
    }
    let min = [];
    let newMin = 0;
    let newAmount = 0;

    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      newAmount = amount - coin;
      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[amount] = min);
  };
}
```