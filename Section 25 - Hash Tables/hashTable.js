class HashTable {
	constructor(size = 3) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		const WEIRD_PRIME = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = Math.abs(char.charCodeAt(0));

			// console.log(
			// 	char,
			// 	value,
			// 	total,
			// 	total * WEIRD_PRIME + value
			// );

			total += total * WEIRD_PRIME + value;
		}

		return total % this.keyMap.length;
	}

	set(key, value) {
		const index = this._hash(key);

		console.log(
			index,
			this.keyMap[index],
			typeof this.keyMap[index]
		);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([ key, value ]);
	}

	get(key) {
		const index = this._hash(key);
		const list = this.keyMap[index];

		const found = list.filter(pair => pair[0] === key);

		if (found.length === 0) return undefined;

		return found;
	}
}

const ht = new HashTable();
ht.set('jake', ' is super cool!');
ht.set('bob', 9823094823);
ht.set('francis', ' sucks!!!');
ht.set('Julie', ' jumps very high');
ht.set('BOB', ' scares me');
ht.set('10918209', ' 09183409183');
console.log(ht);
console.log(ht.keyMap);
console.log(ht.get('jake'));
console.log(ht.get('Jake'));
console.log(ht.get('BOB'));
