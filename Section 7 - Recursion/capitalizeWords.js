function capitalizeWords (arr) {
  
  if (arr.length === 0) return [];

  let currentWord = arr[0].toUpperCase();

  return [currentWord].concat(capitalizeWords(arr.slice(1)));

}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']