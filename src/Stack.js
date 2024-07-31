class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    return poppedNode.value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top === null;
  }

  traverse() {
    const values = [];
    let current = this.top;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

export default Stack;
