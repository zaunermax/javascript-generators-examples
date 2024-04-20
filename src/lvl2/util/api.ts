import type { Post, User } from '../types/api.types.ts';

export const getUsers = (): Promise<User[]> => {
	return fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
		res.json(),
	);
};

export const getPostsByUserId = (id: number): Promise<Post[]> => {
	return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id).then(
		(res) => res.json(),
	);
};
