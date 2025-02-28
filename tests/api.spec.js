import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

// todo вынести в отдельное конфиги
const URL = 'https://apichallenges.herokuapp.com/';
let token;

/* const apiReq = await request.newContext({
			baseUrl: URL,
		}); */

test.describe('Challenge', () => {
	test.beforeEach(async ({ request }) => {
		const response = await request.post(`${URL}challenger`);
		const headers = await response.headers();
		token = headers['x-challenger'];
		//
		console.log(token);
	});

	test('get challenges', async ({ request }) => {
		// challenger
		const response = await request.get(`${URL}challenges`, {
			headers: {
				'x-challenger': token,
			},
		});
		const body = await response.json();
		expect(response.status()).toBe(200);
		expect(body.challenges.length).toBe(59);
	});
});
