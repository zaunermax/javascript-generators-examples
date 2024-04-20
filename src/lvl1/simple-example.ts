function* simpleGenerator() {
	yield 'Hello';
	yield 'World';
	yield '!';
}

// manual value retrieval
const iterator = simpleGenerator(); // Creating a generator object

console.log(iterator.next().value); // Output: Hello
console.log(iterator.next().value); // Output: World
console.log(iterator.next().value); // Output: !
console.log(iterator.next().done); // Output: true (no more values)

// for of
for (const value of simpleGenerator()) {
	console.log(value);
}

// array spread
const values1 = [...simpleGenerator()];
console.log(values1.join('\n'));

// Array.from
const values2 = Array.from(simpleGenerator());
console.log(values2.join('\n'));

// while loop
const generator = simpleGenerator();
let result = generator.next();
while (!result.done) {
	console.log(result.value);
	result = generator.next();
}
