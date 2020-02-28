// check if 2 strings are anagrams via a Frequency Counter
function validAnagrams(str1, str2) {

  console.log("-----");

  if (str1.length !== str2.length) return false;

  const counts = {};

  for (let c of str1) {
    counts[c] = (counts[c] || 0) + 1;
  }

  console.log(counts);

  for (let c of str2) {
    console.log(c, counts[c], !counts[c]);
    if (!counts[c]) return false;
    counts[c]--;
    // if (counts[c] === 0) delete counts[c];
  }

  console.log(counts);

  return true;

  // return Object.keys(counts).length === 0;

}

console.log(validAnagrams('aaz', 'zaa'));  // true
console.log(validAnagrams('aaz', 'zza'));  // false
console.log(validAnagrams('aaz', 'zta'));  // false
console.log(validAnagrams('arazzz', 'zaa'));  // false
console.log(validAnagrams('aaz', 'rrr'));  // false
console.log(validAnagrams('anagram', 'nagaram')); // true
console.log(validAnagrams('rat', 'car'));  // false
console.log(validAnagrams('awesome', 'awesom'));  // false
console.log(validAnagrams('awesome', 'awesomez'));  // false
console.log(validAnagrams('awesome', 'oesewma'));  // true
console.log(validAnagrams('awesome', 'oezewma'));  // true
