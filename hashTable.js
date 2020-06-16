class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) { 
      return undefined;
    }

    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0]);
        }
      }
    }
    return keysArray;
  }

  print() {
    let printedTable = '[\n';

    const keysArray = [];
    if (this.data.length > 0) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] && this.data[i].length) {
          if (this.data.length > 1) {
            printedTable += i + ': [';
            for (let j = 0; j < this.data[i].length - 1; j++) {
              printedTable += this.data[i][j][0] + ': ' + this.data[i][j][1] + ', ';
            }
            printedTable += this.data[i][this.data[i].length - 1][0] + ': ' + 
                            this.data[i][this.data[i].length - 1][1] + '],\n';
          } else {
            printedTable += this.data[i][0];
          }
        }
      }
    }
    printedTable += ']';
    console.log(printedTable);
  }
}