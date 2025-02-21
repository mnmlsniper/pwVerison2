import { test, expect } from '@playwright/test';
//import { test } from '../src/helpers/fixture/index';
import { UserBuilder } from '../src/helpers/builder/user.builder';
import { App } from '../src/pagesV2/app.page';
test.use({ storageState: { cookies: [], origins: [] } });

let newUser, app;
// todo вынести в отдельное место

test.describe('Page Object middle', () => {
	test('Пользователь может зарегистрировать POv2', async ({ page }) => {
		newUser = new UserBuilder()
			.addEmail()
			.addUsername()
			.addPassword(11)
			.generate();

		app = new App(page);
		await app.main.open();
		await app.main.gotoRegister();
		await app.register.register(
			newUser.username,
			newUser.email,
			newUser.password,
		);
		await expect(app.main.signinButton).toContainText('substring');
	});
});
