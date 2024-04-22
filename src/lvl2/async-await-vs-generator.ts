import type { Post, User } from '../types/api.types.ts';
import { getPostsByUserId, getUsers } from '../util/api.ts';

type GeneratorFunction = (...args: unknown[]) => Generator<Promise<unknown>>;

function generatorInitiator<T extends GeneratorFunction>(generatorFn: T) {
	const iterator = generatorFn();

	function executor(args?: unknown): Promise<unknown> {
		const res = iterator.next(args);
		return res.done ? res.value : res.value.then(executor);
	}

	return executor();
}

function* loadData() {
	const users: User[] = yield getUsers();
	const posts: Post[] = yield getPostsByUserId(users[0].id);

	return posts[0]; // "filter" posts
}

generatorInitiator(loadData).then(console.log);
