class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value){
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop(){
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    let printedStack = 'Printing stack:\n';
    if (this.isEmpty()) {
      printedStack += '<empty stack>';
      console.log(printedStack);
    } else {
      let currentNode = this.top;
      if (this.length === 1) {
        printedStack += this.top.value + ' <-- top, bottom\n';
        console.log(printedStack);
      } else {
        while (currentNode.next) {
          if (currentNode === this.top) {
            printedStack += this.top.value + ' <-- top\n';
          } else {
            printedStack += currentNode.value + '\n';
          }
          currentNode = currentNode.next;
        }
        printedStack += currentNode.value + ' <-- bottom\n';
        console.log(printedStack);
      }
    }
  }
}