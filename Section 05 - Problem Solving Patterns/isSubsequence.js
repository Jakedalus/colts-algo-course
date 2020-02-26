//Multiple Pointers
function isSubsequence(str1, str2) {

  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
      if (i === str1.length) return true;
    }
  }

  return false;
  
  // return i === str1.length;

}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'string')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false


function isSubsequenceColt(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}