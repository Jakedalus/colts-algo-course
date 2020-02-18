function averagePair(arr, avg){
  
  let start = 0, end = arr.length-1;

  while (start < end) {
    let temp = (arr[start] + arr[end]) / 2;
    // console.log(start, end, temp);
    if (temp === avg) {
      return true;
    } else if (temp < avg) {
      start++;
    } else {
      end--;
    }
  }
  
  return false;
}


console.log(averagePair([1,2,3], 2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([], 4)); // false