import type { Post, User } from './api.types.ts';

type GeneratorFunction = (...args: unknown[]) => Generator<Promise<unknown>>;

function generatorInitiator<T extends GeneratorFunction>(generatorFn: T) {
	const iterator = generatorFn();

	function executor(args?: unknown): Promise<unknown> {
		const res = iterator.next(args);
		return res.done ? res.value : res.value.then(executor);
	}

	return executor();
}

function getUsers(): Promise<User[]> {
	return fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
		res.json(),
	);
}

function getPostsByUserId(id: number): Promise<Post[]> {
	return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id).then(
		(res) => res.json(),
	);
}

function* loadData() {
	const users: User[] = yield getUsers();
	const posts: Post[] = yield getPostsByUserId(users[0].id);

	return posts[0]; // "filter" posts
}

generatorInitiator(loadData).then(console.log);
