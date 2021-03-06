'use strict';

function Queue(){
  Array.call(this);
};

Queue.prototype.enqueue = function(){
  Array.prototype.push.apply(this, arguments);
};

Queue.prototype.dequeue = function(){
  Array.prototype.shift.apply(this, arguments);
}

let charQueue = new Queue();
charQueue.enqueue('A');
console.log(charQueue);
charQueue.enqueue('B');
console.log(charQueue);
charQueue.enqueue('C');
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.enqueue('D');
console.log(charQueue);
charQueue.enqueue('E');
console.log(charQueue);
charQueue.enqueue('F');
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
console.log(charQueue);
charQueue.dequeue();
