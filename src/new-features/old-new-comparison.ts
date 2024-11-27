import { transform } from '../lvl2/map-example';
import { take } from './take';

function* naturals() {
	let value = 0;
	while (true) {
		yield value++;
	}
}

const oldIt = transform(take(naturals(), 10), (x) => x * x);

const newIt = naturals()
	.map((x) => x * x)
	.take(5);

const coolStuff = naturals()
	.drop(1)                 // drop 0
	.filter((x) => !(x % 2)) // only even
	.map((x) => x * 2)       // times 2
	.take(3);                // only take 5

console.log(...coolStuff); // 4 8 12
