// check if 2 strings are anagrams via a Frequency Counter
function validAnagrams(str1, str2) {

  if (str1.length !== str2.length) return false;

  const counts = {};

  for (let c of str1) {
    counts[c] = (counts[c] || 0) + 1;
  }

  console.log(counts);

  for (let c of str2) {
    if (!counts[c]) return false;
    counts[c]--;
    // if (counts[c] === 0) delete counts[c];
  }

  console.log(counts);

  return true;

  // return Object.keys(counts).length === 0;

}

console.log(validAnagrams('aaz', 'zaa'));
console.log(validAnagrams('aaz', 'zza'));
console.log(validAnagrams('anagram', 'nagaram'));
console.log(validAnagrams('rat', 'car'));
console.log(validAnagrams('awesome', 'awesom'));
console.log(validAnagrams('awesome', 'awesomez'));
