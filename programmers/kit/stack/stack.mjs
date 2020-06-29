/**
 * 스택(stack)은 LIFO(Last In First Out / 후입선출) 원리에 따라 정렬된 컬렉션(ordered collection)이다.
 * 스택의 자료는 항상 동일한 종단점에서 추가/삭제된다. 
 * 스택에서 종단점은 꼭대기(top)와 바닥(base) 둘뿐인데, 가장 최근 자료는 꼭대기 근처에, 가장 오래된 자료는 바닥 근처에 위치한다.
 * 일상생활에서 흔히 볼 수 있는, 책더미나, 구내 식당이나 푸드 코드에 쌓여 있는 식판을 떠올리면 쉽게 이해할 수 있다.
 */

 /**
  * push(원소(들)): 스택 꼭대기에 새 원소(들)를 추가한다.
  * pop(): 스택 꼭대기에 있는 원소를 반환하고 해당 원소는 스택에서 삭제한다.
  * peek(): 스택 꼭대기에 있는 원소를 반환하되 스택은 변경하지 않는다. (원소를 삭제하지 않는다는 점이 다르다.
    스택을 참조하는 용도로 쓴다.)
  * isEmpty(): 스택에 원소가 하나도 없으면 true, 스택의 크기가 0보다 크면 false를 반환한다.
  * clear(): 스택의 모든 원소를 삭제한다.
  * size(): 스택의 원소 개수를 반환한다. 배열의 length 프로퍼티와 비슷하다.  
  */

  export default class Stack {
    constructor(items = []) {
      this.items = items;
    }

    push(element) {
      this.items.push(element);
    }

    pop() {
      return this.items.pop();
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }

    clear() {
      this.items = [];
    }

    print() {
      console.log(this.items.toString());
    }
  }