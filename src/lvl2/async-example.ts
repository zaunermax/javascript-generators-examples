async function* asyncNumberGenerator(maxNr: number): AsyncGenerator<number> {
	while (maxNr) {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		yield maxNr;
		maxNr -= 1;
	}
}

for await (const num of asyncNumberGenerator(3)) {
	console.log(num);
}
