function fib(n) {
	if (n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
}

console.log('fib(3)', fib(3));
console.log('fib(5)', fib(5));
console.log('fib(7)', fib(7));
console.log('fib(10)', fib(10));
console.log('fib(15)', fib(15));
console.log('fib(25)', fib(25));
console.log('fib(26)', fib(26));
console.log('fib(37)', fib(37));
console.log('fib(40)', fib(40));
