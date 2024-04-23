import { createReadStream } from 'fs';
import { resolve } from 'path';
import { createInterface } from 'readline';
import { from } from 'rxjs';

const getFileReader = (filePath: string) => {
	const stream = createReadStream(filePath);
	return createInterface({
		input: stream,
		crlfDelay: Infinity,
	});
};

async function* processLines(
	filePath: string,
	maxLinesAtOnce: number,
): AsyncGenerator<string[], void> {
	const reader = getFileReader(filePath);

	let lineBuffer: string[] = [];

	for await (const line of reader) {
		lineBuffer.push(line);
		if (lineBuffer.length >= maxLinesAtOnce) {
			yield lineBuffer;
			lineBuffer = [];
		}
	}

	if (lineBuffer.length > 0) {
		yield lineBuffer;
	}
}

const filePath = resolve(__dirname, 'EXAMPLE.log');
const maxLinesAtOnce = 10;

const lineGenerator = processLines(filePath, maxLinesAtOnce);

// do it the "vanilla way"
for await (const lines of lineGenerator) {
	console.log(`Processing ${lines.length} lines:`);
	lines.forEach((line) => console.log(line));
}

// or use 3rd party libs to handle your async gens
const line$ = from(processLines(filePath, maxLinesAtOnce));

line$.subscribe((lines) => console.log(lines));
