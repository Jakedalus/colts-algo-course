class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		const WEIRD_PRIME = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let value = key[i].charCodeAt(0) - 96;

			total +=
				(total * WEIRD_PRIME + value) % this.keyMap.length;
		}

		return total;
	}
}

const hashTable = new HashTable();
console.log(hashTable._hash('hello there friend'));
