class HashTable {
	constructor(size = 53) {
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

		console.log(index, list);

		if (list) {
			for (let i = 0; i < list.length; i++) {
				if (list[i][0] === key) {
					return list[i][1];
				}
			}
		}

		return undefined;
	}

	entries() {
		return this.keyMap.reduce((entries, current) => {
			// console.log('entries:', entries, 'current:', current);
			if (current) {
				return entries.concat(current);
			}
		}, []);
	}

	keys() {
		return this.keyMap.reduce((keys, current) => {
			// console.log('keys:', keys, 'current:', current);
			if (current) {
				const currentKeys = current.map(pair => pair[0]);
				// console.log('currentKeys:', currentKeys);
				return keys.concat(currentKeys);
			}
		}, []);
	}

	values() {
		return Array.from(
			new Set(
				this.keyMap.reduce((values, current) => {
					// console.log('values:', values, 'current:', current);
					if (current) {
						const currentValues = current.map(
							pair => pair[1]
						);
						// console.log('currentValues:', currentValues);
						return values.concat(currentValues);
					}
				}, [])
			)
		);
	}
}

const ht = new HashTable(17);
ht.set('jake', ' is super cool!');
ht.set('jake', ' sucks ass!!!');
ht.set('jake2', ' is super cool!');
ht.set('bob', 9823094823);
ht.set('francis', ' sucks!!!');
ht.set('Julie', ' jumps very high');
ht.set('BOB', ' scares me');
ht.set('10918209', ' 09183409183');
console.log(ht);
console.log(ht.keyMap);
console.log('----- GET ------');
console.log(ht.get('jake'));
console.log(ht.get('Jake'));
console.log(ht.get('BOB'));
console.log(ht.get('Bsbsb'));
console.log(ht.get('BOb'));
console.log('----- KEYS ------');
console.log(ht.keys());
console.log('----- VALUES ------');
console.log(ht.values());
console.log('----- ENTRIES ------');
console.log(ht.entries());
