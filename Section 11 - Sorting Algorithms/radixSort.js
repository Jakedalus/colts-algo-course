function getDigit(num, place) {  // assume base 10
  return Math.floor(Math.abs(num) / (10 ** place)) % 10;
}

// console.log(getDigit(12345,0));
// console.log(getDigit(12345,1));
// console.log(getDigit(12345,2));
// console.log(getDigit(12345,3));
// console.log(getDigit(12345,4));
// console.log(getDigit(12345,5));

function digitCount(num) {
  return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

// console.log(digitCount(3));
// console.log(digitCount(32));
// console.log(digitCount(334));
// console.log(digitCount(0));

function myMostDigits(nums) {

  let max = 0;
  for (let n of nums) {
    let temp = digitCount(n);
    if (temp > max) max = temp
  }

  return max;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let n of nums) {
    maxDigits = Math.max(maxDigits, digitCount(n));
  }

  return maxDigits;
}

// console.log(mostDigits([23,123,52342,1,90,0]));
// console.log(mostDigits([23,123,23,1,90,0]));

function radixSort(nums) {

  const maxDigits = mostDigits(nums);

  for (let k = 0; k < maxDigits; k++) {
    let buckets = [[],[],[],[],[],[],[],[],[],[]];
    
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);
      // console.log(num, digit);
      buckets[digit].push(num);
    }
    // console.log(buckets);
    nums = buckets.flat();
    // console.log(nums);
    // console.log('-----');
  }

  return nums;

}

console.log(radixSort([23,123,52342,1,90,0]));
console.log(radixSort([23,123,23,1,90,0]));
console.log(radixSort([1090,-13,4523,37,1,0,-10]));




