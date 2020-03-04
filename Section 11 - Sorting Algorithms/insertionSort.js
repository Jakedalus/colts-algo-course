function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] <= current) break; // necessary for optimization 
      
      // console.log(j, j+1);
      if (arr[j+1] < arr[j]) [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      console.log(arr);
    }
    // console.log(arr);
  }

  return arr;

}

// console.log(insertionSort([2,1,9,76,4]));
// console.log(insertionSort([45,23,1,4,6,2231,31,-12]));
// console.log(insertionSort([1,2,3,4,5]));
console.log(insertionSort([5,3,2,1,-1]));
// console.log(insertionSort([34,65,12,-24,54]));
// console.log(insertionSort([3, 46, -2, 0, 1, 019, -23, 12, 634, 1, 6, 61]));
// console.log(insertionSort([8,1,2,3,4,5,7]));
// console.log(insertionSort([234,6,-12,6, 0, 23]));
// console.log(insertionSort([1,2,3,4,5,-1]));

console.log('------');

function coltsInsertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for ( ;j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
      console.log(arr);
    }
    arr[j+1] = currentVal;
    // console.log(arr);
  }

  return arr;
}

// console.log(coltsInsertionSort([2,1,9,76,4]));
// console.log(coltsInsertionSort([45,23,1,4,6,2231,31,-12]));
// console.log(coltsInsertionSort([1,2,3,4,5]));
console.log(coltsInsertionSort([5,3,2,1,-1]));
// console.log(coltsInsertionSort([34,65,12,-24,54]));
// console.log(coltsInsertionSort([3, 46, -2, 0, 1, 019, -23, 12, 634, 1, 6, 61]));
// console.log(coltsInsertionSort([8,1,2,3,4,5,7]));
// console.log(coltsInsertionSort([234,6,-12,6, 0, 23]));
// console.log(coltsInsertionSort([1,2,3,4,5,-1]));


