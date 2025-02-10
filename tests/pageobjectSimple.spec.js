import * as allure from 'allure-js-commons';
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/mainPage';
import { RegisterPage } from '../src/pages/registerPage';
import { YourfeedPage } from '../src/pages/yourfeedPage';

const URL_UI = 'https://realworld.qa.guru/';

test.describe('Авторизация', {
    annotation: [
      { type: 'issue', description: 'https://github.com/microsoft/playwright/issues/23180' },
      { type: 'performance', description: 'very slow test!' },
    ],
  }, () => {
	test('Пользователь может авторизоваться используя логин пароль', async ({
		page,
	}) => {
		await allure.epic('Авторизация');
		await allure.feature('Авторизация пользователя');
		await allure.story('Авторизация через пароль');

		//await allure.displayName('Test Authentication');
		await allure.owner('Lyubov Danilova');
		await allure.tags('Web interface', 'Authentication');
		await allure.severity('blocker');
		const user = {
			email: faker.internet.email(),
			password: faker.internet.password({ length: 10 }),
			username: faker.person.firstName(),
		};

		const mainPage = new MainPage(page);
		const registerPage = new RegisterPage(page);
		const yourfeedPage = new YourfeedPage(page);

		await mainPage.open(URL_UI);
		await mainPage.gotoRegister();
		await registerPage.register(user.username, user.email, user.password);

		await test.step('Проверить, что отображается имя пользователя в профиле', async () => {
			await expect(yourfeedPage.profileNameField).toBeVisible();
			await expect(yourfeedPage.profileNameField).toContainText(user.username);
		});
	});
});
