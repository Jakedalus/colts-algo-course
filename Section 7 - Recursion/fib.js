function fib(n) {

  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);

}

console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465



// fib(5)
//   fib(4)                  +                    fib(3)
//     fib(3)          +        fib(2)             fib(2) + fib(1)
//       fib(2) + fib(1)          1                   1       1
//          1       1