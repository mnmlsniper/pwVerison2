import { test } from '@playwright/test';
import { BasePage } from './base.page';

export class RegisterPage extends BasePage {
	constructor(page) {
		super(page);
		this.signupButton = page.getByRole('button', { name: 'Sign up' });
		this.emailField = page.getByPlaceholder('Email');
		this.passwordField = page.getByPlaceholder('Password');
		this.usernameField = page.getByPlaceholder('Your Name');
	}
	// todo
	async register(username, email, password) {
		await test.step('Зарегистрироваться', async () => {
			await this.usernameField.click();
			await this.usernameField.fill(username);
			await this.emailField.click();
			await this.emailField.fill(email);
			await this.passwordField.click();
			await this.passwordField.fill(password);
			await this.signupButton.click();
		});
	}
}
