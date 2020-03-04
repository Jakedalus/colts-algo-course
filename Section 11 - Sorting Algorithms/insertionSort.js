function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      // console.log(j, j+1);
      if (arr[j+1] < arr[j]) [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
    }
  }

  return arr;

}


console.log(insertionSort([45,23,1,4,6,2231,31,-12]));
console.log(insertionSort([1,2,3,4,5]));
console.log(insertionSort([5,3,2,1,-1]));
console.log(insertionSort([34,65,12,-24,54]));
console.log(insertionSort([3, 46, -2, 0, 1, 019, -23, 12, 634, 1, 6, 61]));
console.log(insertionSort([8,1,2,3,4,5,7]));