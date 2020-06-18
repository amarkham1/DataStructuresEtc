class Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

module.exports = class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  print() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    console.log(array);
  }

  append(value) {
    const newNode = new Node(value);    
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value); 

    const leader = this.traverseToIndex(index - 1);
    newNode.next = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeForRemoval = leader.next;
    leader.next = nodeForRemoval.next;
    nodeForRemoval.next.prev = leader;
    this.length--;
    return this.print();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}