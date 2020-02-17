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