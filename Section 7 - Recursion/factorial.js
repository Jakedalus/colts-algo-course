function factorialIteration(num) {

  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;

}

console.log(factorialIteration(3));
console.log(factorialIteration(5));
console.log(factorialIteration(10));
console.log(factorialIteration(15));

function factorialRecursion(num) {

  if (num <= 1) return 1;

  return num * factorialRecursion(num - 1);
  
}

console.log(factorialRecursion(3));
console.log(factorialRecursion(5));
console.log(factorialRecursion(10));
console.log(factorialRecursion(15));