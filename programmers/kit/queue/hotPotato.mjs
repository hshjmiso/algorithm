/**
 * 환형 큐(circular queue) ex) '뜨거운 감자(Hot) 게임'
 * 원을 그리고 서 있는 아이들이 뜨거운 감자를 옆 사람에게 최대한 빨리 전달하다가,
 * 동작을 멈추고 뜨거운 감자를 손에 들고 있는 아이를 벌칙으로 퇴장시키는 게임이다.
 * 최후의 1인이 남을 때까지 게임은 계속된다.
 */
import Queue from './queue.mjs'

 function hotPotato (nameList, num) {
     let queue = new Queue();

     for (let i = 0; i < nameList.length; i++) {
         queue.enqueue(nameList[i]);
     }

     let eliminated = '';
     while (queue.size() > 1) {
         for (let i = 0; i < num; i++) {
             queue.enqueue(queue.dequeue());
         }
         eliminated = queue.dequeue();
         console.log(eliminated + '(을)를 뜨거운 감자 게임에서 퇴장시킨다.');
     }
     return queue.dequeue();
 }

 let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
 let winner = hotPotato(names, 7);
 console.log('승자는' + winner + '입니다.');
 
