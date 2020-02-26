function capitalizeFirst(arr) {

  if (arr.length === 0) return [];

  let newArr = [];

  let currentStr = arr[0];

  currentStr = currentStr.slice(0,1).toUpperCase() + currentStr.slice(1);

  newArr.push(currentStr);

  // console.log(newArr, arr, arr.slice(1));

  return newArr.concat(capitalizeFirst(arr.slice(1)));


}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']