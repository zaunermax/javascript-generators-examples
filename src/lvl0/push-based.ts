import { sampleSdk } from '../util/api.ts';

sampleSdk.getUsers().then((users) => {
	console.log(users);
});

// I can do other stuff until I get the users back
