// Sliding Window
function findLongestSubstring(str){

  let start = 0, end = 1, tempSub = str[0], longestSub = '';
  let memory = {};
  // let memory = new Set();
  memory[str[start]] = 0;

  while (end < str.length) {
    let c = str[end];

    // console.log('------');
    // console.log(start, end, c, memory, memory[c], 'tempSub:', tempSub, 'longestSub:', longestSub);

    // console.log(c, ' in memory:', c in memory);

    if (!(c in memory)) {
      // memory[c] = end;
      tempSub = tempSub + c;
      
    } else {
      // console.log(c, ' is in memory.');
      // start = memory[c];
      start = tempSub.indexOf(c);
      // console.log('Splitting tempSub, ', tempSub, ' at ', start);
      let removed = tempSub.substring(0, start + 1);
      tempSub = tempSub.substring(start + 1) + c;
      // console.log('--> removed letters,:', removed, 'tempSub is now:', tempSub);

      for (let char of removed) {
        delete memory[char];
      }



    }
    memory[c] = end;
    end++;

    if (tempSub.length > longestSub.length) {
        // console.log('New long substring!', tempSub, ' > ', longestSub);
        longestSub = tempSub;
      } 

  }

  console.log('------')
  console.log(longestSub);


  return longestSub.length;

}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log();
console.log();
// console.log(findLongestSubstring('thisishowwedoit')); // 6


function findLongestSubstringColt(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}


function findLongestSubstringColtWithStr(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}







