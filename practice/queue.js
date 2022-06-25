// first in first out

class Queue {
  constructor() {
    this.storage = {};
    this.length = 0;
  }
  enqueue(val) {
    this.storage[this.length] = val;
    this.length++;
  }
  dequeue() {
    if (this.length === 0) return;
    const res = this.storage[0];
    delete this.storage[0];
    for (let i = 1; i < this.length; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[--this.length];
    return res;
  }
}

const testQueue = new Queue();
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
console.log(testQueue); // {0:1, 1:2, 2: 3}
console.log(testQueue.length); // 3;
console.log('dequeue: 1', testQueue.dequeue()); // 1
console.log(testQueue);
console.log('dequeue: 2', testQueue.dequeue()); // 2
console.log(testQueue);
console.log('dequeue: 3', testQueue.dequeue()); // 3
console.log(testQueue);
