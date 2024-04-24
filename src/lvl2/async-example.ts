const waitForMs = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

async function* asyncNumberGenerator(maxNr: number): AsyncGenerator<number> {
	while (maxNr) {
		await waitForMs(1000);
		yield maxNr;
		maxNr -= 1;
	}
}

for await (const num of asyncNumberGenerator(3)) {
	console.log(num); // 3 ... 2 ... 1
}
