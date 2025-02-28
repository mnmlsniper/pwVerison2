import { test, expect } from '@playwright/test';
import axios from 'axios';
test.use({ storageState: { cookies: [], origins: [] } });

// todo вынести в отдельное конфиги
const URL = 'https://apichallenges.herokuapp.com/';
let token;

/* const apiReq = await request.newContext({
            baseUrl: URL,
        }); */

test.describe.only('Challenge', () => {
	test('get challenges', async () => {
		const res = await axios.post(`${URL}challenger`);
		expect(res.data).toBe('');
		expect(res.headers['x-challenger'].length).toBeGreaterThan(10);
	});
});
