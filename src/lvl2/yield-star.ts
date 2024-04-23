function* getNumberGenerator(numbers: number[]) {
	yield* numbers;
}

const nrIt = getNumberGenerator([1, 2, 3]);

console.log(nrIt.next().value); // 1
console.log(nrIt.next().value); // 2
console.log(nrIt.next().value); // 3

function* getCharacterGenerator(string: string) {
	yield* string;
}

const chIt = getCharacterGenerator('WOW');

console.log(chIt.next().value); // W
console.log(chIt.next().value); // O
console.log(chIt.next().value); // W

function* getMiscGenerator() {
	yield* getNumberGenerator([4, 2]);
	yield* getCharacterGenerator(':)');
}

const mIt = getMiscGenerator();

console.log(...mIt); // 4 2 : )
