function countUniqueValues(arr) {

  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  let uniqueValues = 1;

  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      console.log('------------');
      console.log(`${i}, ${j}`);
      console.log(`${arr[i]}, ${arr[j]}`);
      if (arr[i] !== arr[j]) {
        uniqueValues++;
        i = j;
      }
    }
  }

  return uniqueValues;

}

// console.log(countUniqueValues([1,1,1,1,1,2]));
// console.log(countUniqueValues([1,1,1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,1,1,1,2,2,3,3,3,3,4,4,4,7,7,12,12,13,13,15,15,16,16,16,17,200,200,201])); //12


function coltsCountUniqueValues(arr) {

  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    console.log('------------');
    console.log(`${i}, ${j}`);
    console.log(`${arr[i]}, ${arr[j]}`);
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i+1;

}

// console.log(coltsCountUniqueValues([1,1,1,1,1,2]));
// console.log(coltsCountUniqueValues([1,1,1,2,3,4,4,4,7,7,12,12,13]));
console.log(coltsCountUniqueValues([1,1,1,1,2,2,3,3,3,3,4,4,4,7,7,12,12,13,13,15,15,16,16,16,17,200,200,201])); //12



