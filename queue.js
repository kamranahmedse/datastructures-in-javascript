class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue(5);  // Queue state: [5]
queue.enqueue(10); // Queue state: [5, 10]
queue.enqueue(13); // Queue state: [5, 10, 13]
console.log(queue.peek()); // Output: 5
console.log(queue.dequeue()); // Output: 5, Queue State: [10, 13]
console.log(queue.peek()); // Output: 10
console.log(queue.size()); // Output: 2
