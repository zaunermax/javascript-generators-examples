function* returnTermination() {
	yield 'foobar';
	return `I am done!`;
}

const returnIt = returnTermination();

console.log(returnIt.next().value); // foobar
console.log({ ...returnIt.next() }); // { done: true, value: "I am done" }

function* throwTermination() {
	yield 'foobar';
	throw new Error(`You're terminated!`);
}

const throwIt = throwTermination();

try {
	console.log(throwIt.next().value); // foobar;
	console.log({ ...throwIt.next() }); // 💥💥💥
} catch (error) {
	console.error('Error in gen:', error);
}
