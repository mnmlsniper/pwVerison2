import { test } from '@playwright/test';

export class LoginPage {
	constructor(page) {
		this.page = page;
		this.signinButton = page.getByRole('button', { name: 'Login' });
		this.emailField = page.getByPlaceholder('Email');
		this.passwordField = page.getByPlaceholder('Password');
	}
	// todo
	//
	async login(email, password) {
		await test.step(`Залогиниться под ${email}`, async () => {
			await this.emailField.click();
			await this.emailField.fill(email);
			await this.passwordField.click();
			await this.passwordField.fill(password);
			await this.signinButton.click();
		});
	}
	async open(url) {
		await this.page.goto(url);
	}
}
