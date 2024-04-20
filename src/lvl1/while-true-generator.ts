function* generateIds() {
	let value = 0;

	while (true) {
		yield (value += 1);
	}
}

const iterator = generateIds();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
