function* generateIds() {
	let value = 0;

	// ⚡️⚡️ looks scary - fine with generators though ⚡️⚡️
	while (true) {
		yield (value += 1);
	}
}

// manually "pulling" values
const iterator = generateIds();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
