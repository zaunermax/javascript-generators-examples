import { sampleSdk } from '../util/api.ts';

const promise = sampleSdk.getUsers();

// even though we did not await the promise, execution has already started

const users = await promise;

console.log(users[0]);
