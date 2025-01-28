import { faker } from '@faker-js/faker';

export class UserBuilder {
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
//     const userBuilder = new UserBuilder().addEmail().addPassword(5).generate();
// this
/*
1) {}
2) 	this.userEmail = faker.internet.email();
{ userEmail: "ya@ya.ru"
}
3)
{ userEmail: "ya@ya.ru",
 userPassword: secretpass
}

*/
