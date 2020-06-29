import Queue from './queue.mjs';

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