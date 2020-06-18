# DataStructuresEtc

This project contains a number of common data structures and sorting algorithms, including:
* Arrays,
* Binary Search Trees,
* Doubly Linked Lists,
* Graphs,
* Hash Tables,
* Stacks,
* Max Heaps,
* Queues,
* Insertion Sort,
* Merge Sort,
* Quick Sort,
* Selection Sort, and
* Bubble Sort

### Learning Outcomes

Building this project allowed me to get some hands-on experience implementing various data structures and sorting algorithms from scratch in JavaScript. I also used it as an opportunity to learn how to package a number of files into an npm package and publish it for others to install to their local machines.


## Getting Started




### Installing

These instructions will get you a copy of the project up and running on your local machine for development purposes. 

To do so using npm, first ensure you have an npm package initialized in the desired directory using:

```
npm init
```

After, install the package with:

```
npm install data-structures-etc
```

If you'd prefer to clone this git repository, feel free to run:

```
git clone git@github.com:amarkham1/DataStructuresEtc.git
```

### Usage

You can import it into your .js file by adding this to the top of the file, if you installed it using npm:

```
const ds = require('data-structures-etc');
```

Or by adding this if you cloned a new git repository into your current folder:

```
const ds = require('./DataStructuresEtc');
```

For reference, here is a list of data structures and sorting algorithms you can now access:
* Array class, implemented using an object, with these methods:
  * get(index)
  * push(data)
  * pop()
  * delete(index)
  * shift()
  * unshift(data)
  * print()
* Stack class, implemented using a linked list, with these methods:
  * peek()
  * push(data)
  * pop()
  * isEmpty()
  * print()
* Queue class, implemented using a linked list, with these methods:
  * peek()
  * enqueue(data)
  * dequeue()
  * print()
* DoublyLinkedList class, implemented using a linked list, with these methods:
  * append(value)
  * prepend(value)
  * insert(index, value)
  * remove(index)
  * traverseToIndex(index)
  * print()
* HashTable class, implemented using an array, with these methods:
  * set(key, value)
  * get(key)
  * keys()
  * print()
* MaxHeap class, implemented using an array, with these methods:
  * insert(nodeValue)
  * remove(nodeValue)
  * getMax()
* Graph class, with these methods:
  * addVertex(node)
  * addEdge(node1, node2)
  * print()
* BinarySearchTree class, with these methods:
  * insert(value)
  * lookup(value)
  * remove(value)
* a number of array sorting functions, including:
  * bubbleSort(array)
  * insertionSort(array)
  * mergeSort(array)
  * quickSort(array)
  * selectionSort(array)

## Authors

* **Andrew Markham** - *Initial work* - [GitHub](https://github.com/amarkham1)