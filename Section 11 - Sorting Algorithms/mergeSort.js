function merge(arr1, arr2) {

  let merged = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;

}

// console.log(merge([1,10,50], [2,14,99,100]));

function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  return merge(mergeSort(arr.slice(0, arr.length/2)), mergeSort(arr.slice(arr.length/2)));

}

console.log(mergeSort([10,2,-3,22,24,5,56]));
console.log(mergeSort([10,2,-3,22,24,5,56,10]));
console.log(mergeSort([100,-20,-3,22,124,-5,56,123]));
console.log(mergeSort([1,2,3,4,5,6]));
console.log(mergeSort([10]));
console.log(mergeSort([]));
console.log(mergeSort([10,9,8,7,6,5]));




