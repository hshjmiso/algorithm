/**
 * 큐(queue)는 FIFO(First In First Out / 선입선출) 원리에 따라 정렬된 컬렉션이다.
 * 새 원소는 뒤로 들어가서 앞에서 빠져나가는 구조다. 
 * 따라서 마지막에 추가된 원소는 큐의 뒷부분에서 제일 오래 기다려야 한다.
 * ex) 줄서기
 */

 /**
  * enqueue(원소(들)): 큐의 뒤쪽에 원소(들)를 추가한다.
  * dequeue(): 큐의 첫 번째 원소(큐의 맨 앞쪽에 위치한 원소)를 반환하고 큐에서 삭제한다.
  * front(): 큐의 첫 번째 원소를 반환하되 큐 자체는 그대로 놔둔다(참조만 할 뿐 큐에서 원소를 삭제하지 않는다.)
  * isEmpty(): 큐가 비어 있으면 true를, 그 외에는 false를 반환한다.
  * size(): 큐의 원소 개수를 반환한다. 배열의 length와 같다.
  */

export default class Queue {
    constructor(items = []) {
        this.items = items;
    }

    enqueue(element) {
    this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}