/**
 * 우선순위 큐(priority queue) 원소가 우선순위에 따라 추가되고 삭제된다.
 * ex) 비행기 탑승 (1등석 비즈니스석, 코치석) / 병원 응급실
 */
import Queue from './queue.mjs';

class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

export default class PriorityQueue extends Queue{
    enqueue(element, priority) {
        let items = this.items;
        let queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    }
}