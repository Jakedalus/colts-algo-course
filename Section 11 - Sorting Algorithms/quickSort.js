function partition(arr, start, end) {

  let pivot = arr[start], pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];


  // console.log("partitioned:", arr);

  return pivotIndex;

}

function randomize(arr, start, end) {
  let random = Math.floor(Math.random() * (end - start) + start);
  // console.log(random);
  [arr[start], arr[random]] = [arr[random], arr[start]];
  return partition(arr, start, end);
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

    // let pivot = partition(arr, start, end);
    let pivot = randomize(arr, start, end);

    // console.log("pivot:", pivot);

    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);

  }

  quickSort(arr, 0, arr.length-1);

  return arr;

}

console.log(quickSortContainer([5,2,64,-12,52]));
console.log(quickSortContainer([4,6,1,2,5,8,3,7]));
console.log(quickSortContainer([8,6,1,2,5,4,3,7]));
console.log(quickSortContainer([1,6,8,2,5,4,3,7]));
console.log(quickSortContainer([4,16,-21,2,-5,1,1,8,3,7,22,-5]));
console.log(quickSortContainer([1,2,4,5,6,7,9,11,34,66,88,10102]));


console.log('-----');

function quickSortColt(arr, left = 0, right = arr.length - 1) {

  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSortColt(arr,left,pivotIndex - 1);
    quickSortColt(arr,pivotIndex + 1, right);
  }  

  return arr;

}

console.log(quickSortColt([5,2,64,-12,52]));
console.log(quickSortColt([4,6,1,2,5,8,3,7]));
console.log(quickSortColt([8,6,1,2,5,4,3,7]));
console.log(quickSortColt([1,6,8,2,5,4,3,7]));
console.log(quickSortColt([4,16,-21,2,-5,1,1,8,3,7,22,-5]));
console.log(quickSortColt([1,2,4,5,6,7,9,11,34,66,88,10102]));



