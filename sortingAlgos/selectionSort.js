module.exports = function selectionSort(array) {
  let sortedArray = array;
  let length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minimumElementIndex = 0;
    for (let j = i + 1; j < length; j++) {
      if (sortedArray[j] < sortedArray[minimumElementIndex]) {
        minimumElementIndex = j;
      }
    }
    let temp = sortedArray[i];
    sortedArray[i] = sortedArray[minimumElementIndex];
    sortedArray[minimumElementIndex] = temp;
  }
  return sortedArray;
}