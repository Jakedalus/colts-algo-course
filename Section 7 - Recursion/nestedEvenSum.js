function nestedEvenSum (obj) {

  let total = 0;

  function nes(obj) {

    if (Object.keys(obj).length === 0) return 0;

    for (let key in obj) {
      if (obj[key] % 2 === 0) {
        total += obj[key];
      }
      if (typeof obj[key] === 'object') {
        nes(obj[key]);
      }
    }
  }

  nes(obj);
  
  return total;

}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

function nestedEvenSumColt (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}





