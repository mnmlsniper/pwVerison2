import { expect } from '@playwright/test';
import { test } from '../src/helpers/fixture/index';
import { UserBuilder } from '../src/helpers/builder/user.builder';
test.use({ storageState: { cookies: [], origins: [] } });

let newUser;
// todo вынести в отдельное место

test.describe('Page Object middle V2', () => {
	// web,
	test('Пользователь может зарегистрировать POv21', async ({ webApp }) => {
		newUser = new UserBuilder()
			.addEmail()
			.addUsername()
			.addPassword(11)
			.generate();
		await webApp.main.gotoRegister();
		await webApp.register.register(
			newUser.username,
			newUser.email,
			newUser.password,
		);
		await expect(webApp.main.signinButton).toContainText('substring');
	});
});
