function* simpleGenerator() {
	yield 'Hello';
	yield 'World';
	yield '!';
}

// manual value retrieval
const iterator001 = simpleGenerator(); // Creating an iterator object

console.log(iterator001.next().value); // Output: Hello
console.log(iterator001.next().value); // Output: World
console.log(iterator001.next().value); // Output: !
console.log(iterator001.next().done); // Output: true (no more values)

// const { value, done } = iterator001.next()

// while loop
const iterator002 = simpleGenerator();

let result = iterator002.next();

while (!result.done) {
	console.log(result.value);
	result = iterator002.next();
}

// Array.from
const values2 = Array.from(simpleGenerator());
console.log(values2.join('\n'));

// array spread
const values1 = [...simpleGenerator()];
console.log(values1.join('\n'));

// for of
for (const value of simpleGenerator()) {
	console.log(value);
}

// Type Demos
type Demo001<T> = Iterable<T>;
type Demo002<T, TReturn, TNext> = Iterator<T, TReturn, TNext>;
type Demo003<T, TReturn, TNext> = Generator<T, TReturn, TNext>;

Symbol.iterator;

// const demoIterable = { [Symbol.iterator]: iteratorImpl }
