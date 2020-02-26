
function naiveSumZero(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }

  return null

}

function sumZero(arr) {

  let start = 0, end = arr.length;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) return [arr[start], arr[end]];
    sum < 0 ? start++ : end--;
  }

  return null;
}


console.log(naiveSumZero([-3,-2,-1,0,1,2,3]));
console.log(naiveSumZero([1,2,3]));

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([1,2,3]));