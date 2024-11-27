export function* take<T>(iterator: Iterator<T>, limit: number): Generator<T> {
	for (let i = 0; i < limit; i++) {
		const next = iterator.next();
		if (next.done) return;
		yield next.value;
	}
}

const it = take([1, 2, 3].values(), 2);

console.log(...it);
