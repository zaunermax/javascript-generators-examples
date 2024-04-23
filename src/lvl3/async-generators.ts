import type { Commit } from '../types/gh-api.types.ts';
import { from } from 'rxjs';

async function* fetchCommits(repo: string, maxPages: number) {
	let url: string | null = `https://api.github.com/repos/${repo}/commits`;
	let currCnt = 0;

	while (url && currCnt < maxPages) {
		const response: Response = await fetch(url, {
			headers: { 'User-Agent': 'async generator script' },
		});

		const body: Commit[] = await response.json();

		if (response.status !== 200) throw new Error(response.statusText);

		const regexpRes = response.headers
			.get('Link')
			?.match(/<(.*?)>; rel="next"/);

		url = regexpRes?.[1] ?? null;

		for (const commit of body) {
			yield commit;
		}

		currCnt += 1;
	}
}

// do it the "vanilla way"
for await (const commit of fetchCommits('TanStack/query', 5)) {
	console.log(commit.author.login); // name of committer
}

// or use 3rd party libs to handle your async gens
const committer$ = from(fetchCommits('TanStack/query', 5));

committer$.subscribe({
	next: ({ author }) => console.log(author.login),
	error: (error) => console.error(error),
});
