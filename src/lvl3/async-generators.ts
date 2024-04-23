import type { Commit } from '../types/gh-api.types.ts';

async function* fetchCommits(repo: string, maxPages: number) {
	let url: string | null = `https://api.github.com/repos/${repo}/commits`;
	let currCnt = 0;

	while (url && currCnt < maxPages) {
		const response: Response = await fetch(url, {
			headers: { 'User-Agent': 'async generator script' },
		});

		const body: Commit[] = await response.json();

		const regexpRes = response.headers
			.get('Link')
			?.match(/<(.*?)>; rel="next"/);

		url = regexpRes?.[1] ?? null;

		for (const commit of body) {
			yield commit;
			currCnt += 1;
		}
	}
}

for await (const commit of fetchCommits('TanStack/query', 5)) {
	console.log(commit.author.login); // name of committer
}
