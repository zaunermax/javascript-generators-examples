import type { Post, User } from './types/api.types.ts';
import { getPostsByUserId, getUsers } from './util/api.ts';

async function fetchData() {
	const users: User[] = await getUsers();
	const posts: Post[] = await getPostsByUserId(users[0].id);

	return posts[0]; // "filter" posts
}

fetchData().then(console.log);
