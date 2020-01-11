function validAnagrams(str1, str2) {
  const counts = {};

  for (let c of str1) {
    counts[c] = (counts[c] || 0) + 1;
  }

  console.log(counts);

  for (let c of str2) {
    counts[c] = (counts[c] || 0) - 1;
    if (counts[c] === 0) delete counts[c];
  }

  console.log(counts);

  return Object.keys(counts).length === 0;

}

console.log(validAnagrams('aaz', 'zaa'));
console.log(validAnagrams('aaz', 'zza'));
console.log(validAnagrams('anagram', 'nagaram'));
console.log(validAnagrams('rat', 'car'));
console.log(validAnagrams('awesome', 'awesom'));
console.log(validAnagrams('awesome', 'awesomez'));
