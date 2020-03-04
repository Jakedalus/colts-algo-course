function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]];
  }

  return arr;

}

console.log(selectionSort([45,23,1,4,6,2231,31,-12]));
console.log(selectionSort([1,2,3,4,5]));
console.log(selectionSort([5,3,2,1,-1]));
console.log(selectionSort([34,65,12,-24,54]));
console.log(selectionSort([3, 46, -2, 0, 1, 019, -23, 12, 634, 1, 6, 61]));
console.log(selectionSort([8,1,2,3,4,5,7]));