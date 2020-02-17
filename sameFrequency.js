function sameFrequency(n1, n2){

  let counts = {};
  
  for (let n of n1.toString()) {
    // console.log(n, counts[n]);
    counts[n] = counts[n] ? counts[n] + 1 : 1;
    // console.log(n, counts[n]);
  }

  // console.log(counts);

  for (let n of n2.toString()) {
    // console.log(n, counts[n]);
    counts[n] = counts[n] ? counts[n] - 1 : -1;
    // console.log(n, counts[n]);

    if (counts[n] === 0) delete counts[n];
  }

  console.log(counts);

  return Object.keys(counts).length === 0;

}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

