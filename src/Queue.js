class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.rear) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) return null;
    const dequeuedNode = this.front;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    return dequeuedNode.value;
  }

  isEmpty() {
    return this.front === null;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  traverse() {
    const values = [];
    let current = this.front;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

export default Queue;
