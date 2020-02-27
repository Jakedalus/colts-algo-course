// Inputs: SORTED array and value
// left and right pointers
// while left pointer to the left of the right pointer:
  // create pointer in middle
  // if find value, return index
  // if too small, move left pointer up
  // if too big, move right pointer down
// if never find the value, return -1

function binarySearch(arr, val) {
  let left = 0, right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  console.log('Searching for ', val, ' in ', arr);

  while (left <= right) {
    // console.log(left, right, 'testing ', arr[middle], ' at ', middle);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((right + left) / 2);
  }


  return -1;
}

console.log(binarySearch([1,3,4,6,12,16,34], 16));
console.log(binarySearch([1,3,4,6,12,16,34], 3));
console.log(binarySearch([1,3,4,6,12,16,34], 2));
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([1,2,3,4,5], 4));