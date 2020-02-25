function reverse(str) {

  let reversedStr = '';

  function rev(s) {
    // console.log(s, s.slice(s.length-1), s.slice(0, s.length-1));
  
    if (s.length === 0) return '';

    reversedStr += s.slice(s.length-1);

    rev(s.slice(0, s.length-1));
  }

  rev(str);
  
  return reversedStr;
}

console.log(reverse('awesome')); // emosewa
console.log(reverse('jacobcarpenter')); // retnepracbocaj

