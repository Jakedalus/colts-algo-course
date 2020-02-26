function flatten(arr) {

  let temp = [];
  
  // console.log(arr);

  if (arr.length === 0) return [];
  
  
  if (Array.isArray(arr[0])) {
    temp = flatten(arr[0]);
  } else {
    temp.push(arr[0]);
  }

  return temp.concat(flatten(arr.slice(1)));
}

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]


function flattenRecursiveHelper(arr) {

  let result = [];

  function flatten(arr) {
    // console.log(arr);
    if (arr.length === 0) return [];
    if (Array.isArray(arr[0])) {
      flatten(arr[0]);
    } else {
      result.push(arr[0]);
    }

    return flatten(arr.slice(1));
  }

  flatten(arr);

  return result;

}

console.log(flattenRecursiveHelper([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flattenRecursiveHelper([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flattenRecursiveHelper([[1],[2],[3]])); // [1,2,3]
console.log(flattenRecursiveHelper([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]



function coltIterativeRecursiveFlatten(oldArr){
  var newArr = []
    for(var i = 0; i < oldArr.length; i++){
      if(Array.isArray(oldArr[i])){
          newArr = newArr.concat(flatten(oldArr[i]))
      } else {
          newArr.push(oldArr[i])
      }
  } 
  return newArr;
}




