import { test, expect } from '@playwright/test';
//todo index собрать
import { ChallengerService } from '../src/service/challenger.service';
test.use({ storageState: { cookies: [], origins: [] } });

// todo вынести в отдельное конфиги
let challengerService;

/* const apiReq = await request.newContext({
            baseUrl: URL,
        }); */

test.describe('Challenge with Service', () => {
	test('get challenges', async ({ request }) => {
		challengerService = new ChallengerService(request);
		const response = await challengerService.post();
		//  сделать тест функциональным
		expect(response.status()).toBe(200);
	});
});
