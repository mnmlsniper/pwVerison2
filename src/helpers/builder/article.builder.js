import { faker } from '@faker-js/faker';

export class ArticleBuilder {
	addEmail() {
		this.userEmail = faker.internet.email();
		return this;
	}
	addPassword(symbol = 10) {
		this.userPassword = faker.internet.password({ length: symbol });
		return this;
	}
	addUsername() {
		this.userName = faker.person.firstName();
		return this;
	}
	generate() {
		return {
			email: this.userEmail,
			username: this.userName,
			password: this.userPassword,
		};
	}
}
