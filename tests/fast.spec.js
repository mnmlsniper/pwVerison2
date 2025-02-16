import { expect } from '@playwright/test';
import { test } from '../src/helpers/fixture/index';
import { YourfeedPage } from '../src/pages/yourfeedPage';
test.use({ storageState: { cookies: [], origins: [] } });

// todo вынести в отдельное место

test.describe('Фикстуры', () => {
	test('Это новый тест с фикстурой нового пользователя', async ({
		loginPage,
	}) => {
		const yourfeedPage = new YourfeedPage(loginPage);
		await yourfeedPage.gotoArticle();
		await expect(yourfeedPage.profileNameField).toBeVisible();
	});
});
