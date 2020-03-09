function getDigit(num, place) {  // assume base 10
  return Math.floor(Math.abs(num) / (10 ** place)) % 10;
}

console.log(getDigit(12345,0));
console.log(getDigit(12345,1));
console.log(getDigit(12345,2));
console.log(getDigit(12345,3));
console.log(getDigit(12345,4));
console.log(getDigit(12345,5));

function digitCount(num) {
  return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

console.log(digitCount(3));
console.log(digitCount(32));
console.log(digitCount(334));
console.log(digitCount());
console.log(digitCount(0));

