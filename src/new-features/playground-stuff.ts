function* generateNumbers() {
	let value = 0;
	while (true) {
		yield value++;
	}
}

const iterator = generateNumbers();

const { value, done } = iterator.next();

console.log(...iterator.take(5));

const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrIt = sampleArray.values();
const arrEnt = sampleArray.entries();

const [first, second] = sampleArray;

new Set(generateNumbers().take(5));

const iterable = generateNumbers().take(5);

Promise.all(iterable);

const customIterable = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
	},
};

const [one, two] = customIterable;

console.log(one, two);

const it = sampleArray.values();

Object.values({ foo: 'bar' }); // ['bar']
Object.entries({ foo: 'bar' }); // [['foo', 'bar']]
Object.keys({ foo: 'bar' }); // ['foo']

[...'yo']; // ['y', 'o']
[...[1, 2, 3]]; // [1, 2, 3]
[...new Set([1, 2, 2])]; // [1, 2]
[...new Map([[1, 'one']])]; // [[1, 'one']]
//[...{ foo: 'bar' }]; // 💥💥💥

function demo() {
	console.log(...arguments);
}

const test = Object.entries({ foo: 'bar' });

console.log([...new Map([[1, 'one']])]);

const foobar = { foo: 'bar' };

const iterableFoobar = {
	...foobar,
	[Symbol.iterator]() {
		return Iterator.from(Object.entries(foobar));
	},
};

console.log(...iterableFoobar); // ["foo", "bar"]

console.log('done');
