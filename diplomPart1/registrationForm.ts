export class RegistrationForm {
    email: string;
    password: string;
    username: string;
    age: number;
    termsAgreement: boolean = false;
    registered: boolean = false;

    constructor(email: string, password: string, username: string, age: number, termsAgreement: boolean, registered: boolean) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.age = age;
        this.termsAgreement = termsAgreement;
        this.registered = registered;
    }

    setEmail(email: string) {

        let regExpEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

        if (!regExpEmail.test(email)) {
            throw Error(`This ${email} is incorrect email!`);
        } else {
            return this.email = email;
        }
    }

    setPassword(password: string) {

        let regExpPassw = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

        if (!regExpPassw.test(password)) {
            throw Error(`This password ${password} is not safe!`);
        } else {
            return this.password = password;
        }
    }

    setUsername(username: string) {
        if (username.trim() == '') {
            throw Error(`This ${username} is not valid!`);
        } else {
            return this.username = username;
        }
    }

    setAge(age: number) {
        if (age > 0 && age < 150) {
            return this.age = age;
        } else {
            throw Error(`${age} isn't enough for registration!`);
        }
    }

    agreeWithTerms(): boolean {
        return this.termsAgreement = !this.termsAgreement;
    }

    register(email: string, password: string, username: string, age: number, termsAgreement: boolean) { //должен ли принимать что то метод register?
        if (this.email && this.password && this.username && this.age && this.termsAgreement) {
            const date: Date = new Date();
            this.registered = !this.registered;
            return ('User successfully registered on ' + date.toUTCString());
        } else {
            let errors: string = ``;

            if (!this.email) {
                errors += `\n This ${email} is incorrect email`;
            }
            if (!this.password) {
                errors += `\n This password ${password} is incorrect password`;
            }
            if (!this.username) {
                errors += `\n This ${username} shouldn't be empty`;
            }
            if (!this.age) {
                errors += `\n This ${age} is invalid`;
            }
            if (!this.termsAgreement) {
                errors += `\n This termsAgreement is ${termsAgreement}, but should be true`;
            }
            this.registered = this.registered; // этим я хочу показать, что registred  не был установлен в trueю Верно ли это?
            return errors;
        }

    }
}

let newRegCheck = new RegistrationForm('nickmail', 'df', 'userName1', 18, true, false);

//console.log( 'set Email', newRegCheck.setEmail('nickmail.com')); //метод работает корректно при неверном email
//console.log( 'set Password', newRegCheck.setPassword('df'));
console.log('registered', newRegCheck.register('nickmail', 'df', 'userName1', 18, true)); //получаю сообщение об успехе даже при неверном email . Получаетcя,
 //что метод registered не смотрит на метод setEmail?  если вызвать отдельно метод setEmail с неверным email - все ок, ошибка получается.  

