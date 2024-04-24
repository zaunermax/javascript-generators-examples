function* communicateWithMe(): Generator<string, string, string> {
	const favColor = yield `Fav color?`;
	return `Nice, ${favColor}!`;
}

const qestionAnswer = communicateWithMe();

console.log(qestionAnswer.next().value); // Fav color?
console.log(qestionAnswer.next('red').value); // Nice, red!
