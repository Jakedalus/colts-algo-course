function partition(arr, start, end) {

  let pivot = arr[0], pivotIndex = 0;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  [arr[0], arr[pivotIndex]] = [arr[pivotIndex], arr[0]];


  return arr;

}

console.log(partition([5,2,64,-12,52], 0, 5));