class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    if (index > this.length - 1 || index < 0) {
      throw new TypeError('please input a valid index to delete');
    }
    
    const item = this.data[index];    
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    return item;
  }

  shift() {
    let shiftedValue = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return shiftedValue;
  }

  unshift(data) {
    if (data) {
      for (let i = this.length; i >= 1; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = data;
      return this.data[0];
    }
  }

  print() {
    let printedArr = '[';
    if (this.length > 0) {
      for (let i = 0; i < this.length - 1; i++) {
        printedArr += this.data[i] + ", ";
      }
      printedArr += this.data[this.length - 1];
    }
    printedArr += ']';
    console.log(printedArr);
  }
}