import { test } from '@playwright/test';

export class MainPage {
	constructor(page) {
		this.page = page;
		this.signupButton = page.getByRole('link', { name: 'Sign up' });
	}
	// todo
	async gotoRegister() {
		await test.step('Перейти на страницу регистрацию', async () => {
			await this.signupButton.click();
		});
	}
	async open(url) {
		await this.page.goto(url);
	}
}
