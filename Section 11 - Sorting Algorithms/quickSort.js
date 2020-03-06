function partition(arr, start, end) {

  let pivot = arr[start], pivotIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];


  // console.log("partitioned:", arr);

  return pivotIndex;

}

// console.log(partition([5,2,64,-12,52], 0));
// console.log(partition([4,6,1,2,5,8,3,7], 0));
// console.log(partition([8,6,1,2,5,4,3,7], 0));
// console.log(partition([1,6,8,2,5,4,3,7], 0));

function quickSortContainer(arr) {

  function quickSort(arr, start, end) {
    // console.log('----');
    // console.log('arr', arr);
    // console.log('start:', start, 'end:', end);
    if (end <= start) return;

    let pivot = partition(arr, start, end);

    // console.log("pivot:", pivot);

    quickSort(arr, start, pivot);
    quickSort(arr, pivot + 1, end);

  }

  quickSort(arr, 0, arr.length);

  return arr;

}

console.log(quickSortContainer([5,2,64,-12,52]));
console.log(quickSortContainer([4,6,1,2,5,8,3,7]));
console.log(quickSortContainer([8,6,1,2,5,4,3,7]));
console.log(quickSortContainer([1,6,8,2,5,4,3,7]));

