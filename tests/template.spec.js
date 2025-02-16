import { expect } from '@playwright/test';
import { test } from '../src/helpers/fixture/index';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/mainPage';
import { RegisterPage } from '../src/pages/registerPage';
import { YourfeedPage } from '../src/pages/yourfeedPage';
test.use({ storageState: { cookies: [], origins: [] } });

// todo вынести в отдельное место

test.describe('Шаблон', () => {
	test.beforeEach(async ({ openMain }) => {
		//todo подготовка состояния
		const mainPage = new MainPage(openMain);
		const registerPage = new RegisterPage(openMain);
		const yourfeedPage = new YourfeedPage(openMain);

		//todo подготовка данных
		const user = {
			email: faker.internet.email(),
			password: faker.internet.password({ length: 10 }),
			username: faker.person.firstName(),
		};
		//await mainPage.open();
		await mainPage.gotoRegister();
		await registerPage.register(user.username, user.email, user.password);
		await expect(yourfeedPage.profileNameField).toBeVisible();
		await expect(yourfeedPage.profileNameField).toContainText(user.username);
	});

	test('Это новый тест', async ({ page }) => {
		const yourfeedPage = new YourfeedPage(page);
		await yourfeedPage.gotoArticle();
		await expect(yourfeedPage.profileNameField).toBeVisible();
	});
});

/* setup - chrome
	mozilla
	safari
*/
