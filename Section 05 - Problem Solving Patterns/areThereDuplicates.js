// Frequency Counter version
function areThereDuplicatesFC() {

  const counts = {};

  let args = Array.from(arguments)

  for (let a of args) {
    counts[a] = counts[a] ? counts[a] + 1 : 1;
    if (counts[a] > 1) return true
  }

  return false;

}

console.log(areThereDuplicatesFC(1, 2, 3)); // false
console.log(areThereDuplicatesFC(1, 2, 2)); // true
console.log(areThereDuplicatesFC('a', 'b', 'c', 'a')); // true


// Multiple Pointers version
function areThereDuplicatesMP() {

  let args = Array.from(arguments).sort();  // Array MUST be sorted for multiple pointers to work

  let i = 0;

  for (var j = 1; j < args.length; j++) {
    // console.log(`${i}: ${args[i]}, ${j}: ${args[j]}`);
    if (args[i] === args[j]) return true;
    i = j;
  }

  return false;

}

console.log(areThereDuplicatesMP(1, 2, 3)); // false
console.log(areThereDuplicatesMP(1, 2, 2)); // true
console.log(areThereDuplicatesMP('a', 'b', 'c', 'a')); // true


//// Colt's Solutions
function areThereDuplicates1() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}


function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

function areThereDuplicatesOneLine() {
  return new Set(arguments).size !== arguments.length;
}




