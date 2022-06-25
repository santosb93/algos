class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;
  }
  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }
  pop() {
    if (!this.length) return;
    const res = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return res;
  }
}

const testStack = new Stack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
console.log('length should be 3', testStack.length);
console.log('stack should return 3', testStack.pop());
console.log('stack should return 2', testStack.pop());
console.log('stack should return 1', testStack.pop());
console.log('stack should return undefined', testStack.pop());
