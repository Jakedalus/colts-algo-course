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


function capitalizeFirstColt (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}