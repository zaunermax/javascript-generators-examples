function* transform<T, R>(
	iterable: Iterable<T>,
	transformFunc: (x: T) => R,
): Generator<R> {
	for (const x of iterable) {
		yield transformFunc(x);
	}
}

const mapGen = transform([1, 2, 3], (x) => x * x);

console.log(mapGen.next().value); // 1
console.log(mapGen.next().value); // 4
console.log(mapGen.next().value); // 9
