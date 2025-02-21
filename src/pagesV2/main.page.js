import { test } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
	constructor(page) {
		super(page);
		this.signupButton = page.getByRole('link', { name: 'Sign up' });
		this.signinButton = page.getByRole('link', { name: 'Login' });
	}
	// todo

	async gotoLogin() {
		await test.step('Перейти на страницу авторизации', async () => {
			await this.signinButton.click();
		});
	}
	async gotoRegister() {
		await test.step('Перейти на страницу регистрацию', async () => {
			await this.signupButton.click();
		});
	}
}
