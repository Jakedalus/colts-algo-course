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

  for (; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    merged.push(arr2[j]);
  }

  return merged;

}

console.log(merge([1,10,50], [2,14,99,100]));