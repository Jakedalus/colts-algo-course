

function same(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;

  
  const counts = {};

  for (let e of arr1) {
    if (counts[e]) {
      counts[e*e]++;
    } else {
      counts[e*e] = 1;
    }
  }

  // console.log(counts);

  for (let e of arr2) {
    if (counts[e]) {
      counts[e]--;
    } else {
      return false;
    }

    if (counts[e] === 0) delete counts[e];
  }

  // console.log(counts, Object.keys(counts).length);

  return Object.keys(counts).length === 0;


}

console.log(same([1,2,3], [4,1,9]));
console.log(same([2,2,3], [4,1,9]));
console.log(same([1,2], [4,1,9]));
console.log(same([5,2,3], [4,1,9]));
console.log(same([10,2,3], [4,100,9]));