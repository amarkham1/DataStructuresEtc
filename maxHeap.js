class MaxHeap {
  constructor(){
    this.heap = [];
  }

  insert(node){
    this.heap.push(node);
    if (this.heap.length > 1) {
      this.maxHeapifyUp(this.heap.length - 1);
    }
  }

  maxHeapifyUp(currentIndex) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while ((currentIndex > 0) && (this.heap[parentIndex] < this.heap[currentIndex])) {
      this.swapNodes(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  remove(node = this.heap[0]) {
    let nodeIndex = this.heap.indexOf(node);
    this.swapNodes(nodeIndex, this.heap.length - 1);
    this.heap.pop();
    this.maxHeapifyDown(nodeIndex);
  }

  maxHeapifyDown(nodeIndex) {
    let childIndex = this.getBiggerChildIndex(nodeIndex);
    while (childIndex && (this.heap[childIndex] > this.heap[nodeIndex])) {
      this.swapNodes(nodeIndex, childIndex);
      nodeIndex = childIndex;
      childIndex = this.getBiggerChildIndex(nodeIndex);
    }
  }

  getBiggerChildIndex(nodeIndex) {
    let leftChild = this.heap[(nodeIndex * 2) + 1];
    let rightChild = this.heap[(nodeIndex * 2) + 2];
    let childIndex = (leftChild > rightChild) ? (nodeIndex * 2) + 1 : (nodeIndex * 2) + 2;
    return childIndex;
  }

  swapNodes(nodeIndex1, nodeIndex2) {
    let temp = this.heap[nodeIndex1];
    this.heap[nodeIndex1] = this.heap[nodeIndex2];
    this.heap[nodeIndex2] = temp;
  }

  getMax() {
    return this.heap[0];
  }
}