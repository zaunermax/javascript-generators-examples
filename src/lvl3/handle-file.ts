import { createReadStream } from 'fs';
import { resolve } from 'path';
import { createInterface } from 'readline';

async function* processLines(
	filePath: string,
	maxLinesAtOnce: number,
): AsyncGenerator<string[], void, unknown> {
	const stream = createReadStream(filePath);
	const reader = createInterface({
		input: stream,
		crlfDelay: Infinity,
	});

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

async function handleFileLines(
	filePath: string,
	maxLinesAtOnce: number,
): Promise<void> {
	const lineGenerator = processLines(filePath, maxLinesAtOnce);

	for await (const lines of lineGenerator) {
		console.log(`Processing ${lines.length} lines:`);
		lines.forEach((line) => console.log(line));
	}
}

const filePath = resolve(__dirname, 'EXAMPLE.log');
const maxLinesAtOnce = 10;

handleFileLines(filePath, maxLinesAtOnce)
	.then(() => {
		console.log('File processing completed.');
	})
	.catch((err) => {
		console.error('Error processing file:', err);
	});
