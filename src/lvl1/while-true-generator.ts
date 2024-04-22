// lazy 😴
function* generateIds() {
	let value = 0;

	// comment out all iterator.next() to play around
	console.log('I was executed!');

	// ⚡️⚡️ looks scary - fine with generators though ⚡️⚡️
	while (true) {
		yield (value += 1);
	}
}

// manually "pulling" values
const iterator = generateIds();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
