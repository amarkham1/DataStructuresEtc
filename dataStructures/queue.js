class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length < 1) {
      throw new Error("can't dequeue an empty queue");
    } else if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  print() {
    let printedQueue = '[';
    let currentNode = this.first;
    if (currentNode) {
      while (currentNode.next) {
        printedQueue += currentNode.value + ", ";
        currentNode = currentNode.next;
      }
      printedQueue += currentNode.value;
    }
    printedQueue += ']';
    console.log(printedQueue);
  }
}