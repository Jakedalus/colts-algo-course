// loop over longer string
// loop over shorter string
// if characters don't match, break out of inner loop
// if match, keep going
// complete inner loop, find a match, increment count
// return count

function naiveStringSearch(str, sub) {

  let count = 0, j = 0;
  
  for (let i = 0; i < str.length; i++) {
    // console.log(i, j, str[i], sub[j]);
    if (str[i] !== sub[j]){
      j = 0;
    } else {
      j++;
    }

    if (j === sub.length) {
      count++;
      j = 0;
    }
  }

  return count;

}

console.log(naiveStringSearch("hello haha, how're you haha", "haha"));
console.log(naiveStringSearch("lorie loled", "lol"));
console.log(naiveStringSearch("lorie loled", "lod"));


function coltsNaiveSearch(long, short) {
  var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
          console.log(i,j,long[i], short[j]);
          console.log('comparing ', long[i+j], ' and ', short[j]);
          console.log('----');
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(coltsNaiveSearch("hello haha, how're you haha", "haha"));
// console.log(coltsNaiveSearch("lorie loled", "lol"));
// console.log(coltsNaiveSearch("lorie loled", "lod"));
// console.log(coltsNaiveSearch("lorie loled lod", "lod"));






