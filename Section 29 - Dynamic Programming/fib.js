function fib(n) {
	// console.log(n);
	if (n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
}

// console.log('fib(3)', fib(3));
// console.log('fib(5)', fib(5));
// console.log('fib(7)', fib(7));
// console.log('fib(10)', fib(10));
// console.log('fib(15)', fib(15));
// console.log('fib(25)', fib(25));
// console.log('fib(26)', fib(26));
// console.log('fib(30)', fib(30));
console.log('fib(37)', fib(37));
// console.log('fib(40)', fib(40));
// console.log('fib(42)', fib(42));

function dynaProFib(n, memo = {}) {
	// console.log('n:', n);
	// console.log('memo:', memo);
	// console.log('---');
	// memo = memo || {};
	if (memo[n]) return memo[n];
	if (n <= 2) return 1;

	return (memo[n] =
		dynaProFib(n - 1, memo) + dynaProFib(n - 2, memo));
}
console.log('---- MEMOIZATION ----');
// console.log('dynaProFib(3)', dynaProFib(3));
// console.log('dynaProFib(5)', dynaProFib(5));
// console.log('dynaProFib(7)', dynaProFib(7));
// console.log('dynaProFib(10)', dynaProFib(10));
// console.log('dynaProFib(15)', dynaProFib(15));
// console.log('dynaProFib(25)', dynaProFib(25));
// console.log('dynaProFib(26)', dynaProFib(26));
// console.log('dynaProFib(30)', dynaProFib(30));
// console.log('dynaProFib(37)', dynaProFib(37));
// console.log('dynaProFib(40)', dynaProFib(40));
console.log('dynaProFib(42)', dynaProFib(42));
console.log('dynaProFib(42)', dynaProFib(92));
console.log('dynaProFib(42)', dynaProFib(920));

function tabFib(n) {
	if (n <= 2) return 1;
	const fibNums = [ 0, 1, 1 ];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
}

console.log('---- TABULATION ----');
console.log('tabFib(42)', tabFib(42));
console.log('tabFib(42)', tabFib(92));
console.log('tabFib(42)', tabFib(920));
