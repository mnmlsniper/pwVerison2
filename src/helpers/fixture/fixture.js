import { test as base, expect } from '@playwright/test';
import { MainPage, RegisterPage, YourfeedPage } from '../../pages/index';
import { UserBuilder } from '../builder/index';
import { App } from '../../pagesV2/app.page';

export const test = base.extend({
	webApp: async ({ page }, use) => {
		const app = new App(page);
		await app.main.open();
		await use(app);
	},
	//todo
	openMain: async ({ page }, use) => {
		const mainPage = new MainPage(page);
		await mainPage.open();
		await use(page);
	},
	// todo
	loginPage: async ({ page }, use) => {
		const userBuilder = new UserBuilder()
			.addEmail()
			.addUsername()
			.addPassword(11)
			.generate();
		const mainPage = new MainPage(page);
		const registerPage = new RegisterPage(page);
		const yourfeedPage = new YourfeedPage(page);

		await mainPage.open();
		await mainPage.gotoRegister();
		await registerPage.register(
			userBuilder.username,
			userBuilder.email,
			userBuilder.password,
		);
		await expect(yourfeedPage.profileNameField).toBeVisible();
		await expect(yourfeedPage.profileNameField).toContainText(
			userBuilder.username,
		);
		await use(page);
	},
});
