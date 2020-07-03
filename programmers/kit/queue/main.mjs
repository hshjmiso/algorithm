import Queue from './queue.mjs';
import PriorityQueue from './priorityQueue.mjs';

let queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print(); // John,Jack,Camila
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.dequeue();
queue.dequeue();
queue.print(); // Camila

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Jhon", 2);
priorityQueue.enqueue("Jack", 3);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();
console.log(priorityQueue.front());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());