function capitalizeWords (arr) {
  
  if (arr.length === 0) return [];

  let currentWord = arr[0].toUpperCase();

  return [currentWord].concat(capitalizeWords(arr.slice(1)));

}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


function capitalizeWordsColt (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}