import type { Post, User } from './api.types.ts';

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

async function fetchData() {
	const users: User[] = await getUsers();
	const posts: Post[] = await getPostsByUserId(users[0].id);

	return posts[0]; // "filter" posts
}

fetchData().then(console.log);
