function mergeSort (array) {
  if (array.length === 1) {
    return array;
  }

  let middleIndex = Math.ceil(array.length / 2);
  let left = array.splice(0, middleIndex);
  let right = array.splice(-middleIndex);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let leftIndex = 0, rightIndex = 0;
  let mergedArray = [];

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
