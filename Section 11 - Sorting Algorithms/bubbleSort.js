function bubbleSort(arr) {

  let sorted = arr.slice();

  function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(sorted, sorted[j], sorted[j+1]);
      if (sorted[j] > sorted[j + 1]) swap(sorted, j, j + 1);
    }
    console.log("-----");
  }

  return sorted;
}

// console.log(bubbleSort([45,23,1,4,6,2231,31,-12]));
// console.log(bubbleSort([1,2,3,4,5]));
// console.log(bubbleSort([5,3,2,1,-1]));
// console.log(bubbleSort([34,65,12,-24,54]));
// console.log(bubbleSort([3, 46, -2, 0, 1, 019, -23, 12, 634, 1, 6, 61]));
// console.log(bubbleSort([8,1,2,3,4,5,7]));

function bubbleSortOptimized(arr) {

  let sorted = arr.slice();
  let noSwaps;

  function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(sorted, sorted[j], sorted[j+1]);
      if (sorted[j] > sorted[j + 1]) {
        swap(sorted, j, j + 1);
        noSwaps = false;
      }
    }
    console.log("-----");
    if (noSwaps) break;
  }

  return sorted;
}

// console.log(bubbleSort([45,23,1,4,6,2231,31,-12]));
// console.log(bubbleSort([1,2,3,4,5]));
// console.log(bubbleSort([5,3,2,1,-1]));
// console.log(bubbleSort([34,65,12,-24,54]));
// console.log(bubbleSort([3, 46, -2, 0, 1, 019, -23, 12, 634, 1, 6, 61]));
// console.log(bubbleSortOptimized([8,1,2,3,4,5,7]));


function bubbleSortOptimized2(arr) {

  let sorted = arr.slice();
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(sorted, sorted[j], sorted[j+1]);
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
        noSwaps = false;
      }
    }
    console.log("-----");
    if (noSwaps) break;
  }

  return sorted;
}

// console.log(bubbleSort([45,23,1,4,6,2231,31,-12]));
// console.log(bubbleSort([1,2,3,4,5]));
// console.log(bubbleSort([5,3,2,1,-1]));
// console.log(bubbleSort([34,65,12,-24,54]));
// console.log(bubbleSort([3, 46, -2, 0, 1, 019, -23, 12, 634, 1, 6, 61]));
console.log(bubbleSortOptimized2([8,1,2,3,4,5,7]));



