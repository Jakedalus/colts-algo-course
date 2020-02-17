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



//// Colt's Solution
function sameFrequencyColt(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}


