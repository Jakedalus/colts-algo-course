function isPalindrome(str) {

  // console.log(str, str.length);
  // console.log(str[0], str[str.length-1]);

  if (str.length === 0) return true;

  if (str[0] !== str[str.length-1]) return false;

  return isPalindrome(str.slice(1, str.length-1));

}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('cattac')); // true


function isPalindromeColt(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
