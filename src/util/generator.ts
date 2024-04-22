const staticParts = [
	'i',
	'have',
	'spent',
	'too',
	'much',
	'time',
	'on',
	'this',
	'example',
];

const getRndIdx = () => Math.floor(Math.random() * staticParts.length);

export function* sampleGenerator() {
	while (true) {
		yield staticParts[getRndIdx()];
	}
}
