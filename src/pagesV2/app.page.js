import { MainPage, RegisterPage } from './index';

export class App {
	constructor(page) {
		this.page = page;
		this.register = new RegisterPage(page);
		this.main = new MainPage(page);
	}
}
