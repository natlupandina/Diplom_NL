class LoginPage {
    // Локаторы

    private loginFieldLocator = "//input[contains(@class,'auth-input')][@type='text']";
    private passwordFieldLocator = "//input[contains(@class,'auth-input')][@type='password']";
    private loginButtonLocator = "//button[@type='submit'][contains(@class,'auth-button')]";
    private toRegisterLocator = "(//a[contains(@class,'auth-form__link auth-form__link_primary auth-form__link_small')])[1]";

    // Веб-элементы (приватные)

    private get loginField() {
        return cy.xpath(this.loginFieldLocator);
    }

    private get passwordField() {
        return cy.xpath(this.passwordFieldLocator);
    }

    private get loginButton() {
        return cy.xpath(this.loginButtonLocator);
    }

    private get registerLink() {
        return cy.xpath(this.toRegisterLocator);
    }
    // Методы взаимодействия с ними

    logIn(username: string, password: string) {
        this.loginField.type(username);
        this.passwordField.type(password);
        this.loginButton.click();
    }

    clickRegisterLink() {
        this.registerLink.click();
    }

    verifyCaptchaDisplayed() {
        cy.get('iframe[title="reCAPTCHA"]')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap).find(".recaptcha-checkbox").should('be.visible');
    }
}

export const loginPage = new LoginPage();