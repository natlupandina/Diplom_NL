export class RegistrationForm {
    email: string;
    password: string;
    username: string;
    age: number;
    termsAgreement: boolean;
    registered?: boolean;

    constructor(email: string, password: string, username: string, age: number, termsAgreement: boolean, registered?: boolean) {
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
            console.log(this.email);
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
            throw Error(`This username cannot be empty!`);
        } else {
            return this.username = username;
        }
    }

    setAge(age: number) {
        if (age > 0 && age < 150) {
            return this.age = age;
        } else {
            throw Error(`${age} years isn't a valid age for registration!`);
        }
    }

    agreeWithTerms(): boolean {
        this.termsAgreement = false;
        return this.termsAgreement = !this.termsAgreement;
    }

    register() {
        this.registered = false;
        
        if (this.email && this.password && this.username && this.age && this.termsAgreement) {
            const date: Date = new Date();
            this.registered = !this.registered;
            return (`${this.username} successfully registered on ` + date.toUTCString());
        } else  {
            let errors: string = ``;
            if (!this.email) {
                errors += `\n This email ${this.email} is incorrect email!`;
            }
             if (!this.password) {
                errors += `\n This password ${this.password} is incorrect password!`;
            }
             if (!this.username) {
                errors += `\n This username shouldn't be empty!`;
            }
             if (!this.age) {
                errors += `\n This ${this.age} years is invalid age!`;
            }
             if (!this.termsAgreement) {
                errors += `\n This termsAgreement is ${this.termsAgreement}, but should be true!`;
            }
            return errors;
        }
    }
}

//let newRegCheck = new RegistrationForm('nick', 'p', '', 0, false);

//Проверки каждого метода отдельно:
//console.log('set Email', newRegCheck.setEmail('nick')); 
//console.log( 'set Password', newRegCheck.setPassword('abcdeab'));
//console.log('set username', newRegCheck.setUsername(''));
//console.log('set age', newRegCheck.setAge(0));
//console.log('are you agree?', newRegCheck.agreeWithTerms());
//console.log('registered', newRegCheck.register()); //получаю сообщение об успехе даже при неверном email . Получаетcя,
 //что метод registered не смотрит на метод setEmail?  если вызвать отдельно метод setEmail с неверным email - все ок,ошибка получается.  

 