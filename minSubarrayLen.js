// Sliding Window
function minSubArrayLen(arr, num) {

  console.log('-----');

  
  let tempArr = [];

  for (let i = 1; i < arr.length; i++) {
    let temp = 0;
    for (let k = 0; k < i; k++) {
      temp += arr[k];
      // console.log(k, temp);
    }

    // console.log("temp:", temp);


    for (let j = i; j < arr.length; j++) {

      // console.log(`${temp} - arr[${j}-${i}] + arr[${j}]`);
      // console.log(`${temp} - ${arr[j-i]} + ${arr[j]}`);

      temp = temp - arr[j - i] + arr[j];

      tempArr = arr.slice(j-i+1, j+1);

      // console.log(tempArr, ': ', temp);
      if (temp >= num) {
        console.log();
        console.log(tempArr.length, 'because ', tempArr, ' is ', temp);
        return tempArr.length;
      }
    }
  }



  return 0;

}

console.log(minSubarrayLen([2,3,1,2,4,3], 7)); // 2, [4,3]
console.log(minSubarrayLen([2,1,6,5,4], 9)); // 2, [5,4]
console.log(minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1, [62]
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 39)); // 3 
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 55)); // 5
console.log(minSubarrayLen([4,3,3,8,1,2,3], 11)); // 2
console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10], 95)); // 0

