// Inputs: array and value
// Loop through array and check if the current element is equal to the value
// if it is, return the index
// if it is never found, return -1

function linearSearch(arr, val) {

  ////// doesn't work because return statement returns 
  ////// the inner anonymous callback function to forEach not linearSearch itself!
  // arr.forEach((element, index) => {
  //   console.log(element, index, element === val);
  //   if (element === val) {
  //     console.log('found it!');
  //     return index;
  //   }
  // });

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === val) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1,2,3,4,5], 5));
console.log(linearSearch([1,2,3,4,5], 15));
console.log(linearSearch([1,2,3,4,5, 'Jason'], 'Jason'));
console.log(linearSearch([1,2,'Fred',4,5, 'Jason'], 'Fred'));
console.log(linearSearch([], 'Fred'));
console.log(linearSearch([]));
console.log(linearSearch([1,2,3]));