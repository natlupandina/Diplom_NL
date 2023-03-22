class RegistrationPage {
    // Локаторы
    private loginFieldRegistrationLocator = "//input[contains(@class,'auth-input')][@type='email']";
    private passwordFieldLocator1 = "//input[contains(@placeholder,'Придумайте пароль')]";
    private passwordFieldLocator2 = "//input[contains(@placeholder,'Повторите пароль')]";
    private loginButtonLocator = "//button[@type='submit'][contains(@class,'auth-button')]";
    private loginFormLocator = "//div[contains(@class,'auth-form__body')]";
    private toRegisterLocator = "(//a[contains(@class,'auth-form__link auth-form__link_primary auth-form__link_small')])[1]";
    private registrationFormLocator = "//div[contains(text(),'Регистрация')]";
    private specifyPasswLocator = "(//div[contains(text(), 'Укажите пароль')])[1]";
    private politicsCheckboxLocator = "//span[contains(@class,'i-checkbox__faux')]";
    private goodPaswLocator = "(//div[contains(@class,'auth-form__securebox auth-form__securebox_condensed')]/div)[2]";
    private registerButtonLocator = "//button[@type='submit'][contains(@class,'auth-button')]";
    private confirmationWindowLocator = "//div[contains(@class,'auth-container auth-container_max-width_sssm')]";
    private proceedToMailboxButtonLocator = "//div[contains(@class,'auth-form__control auth-form__control_condensed-other')]/a";

    // Веб-элементы (приватные)

    private get loginField() {
        return cy.xpath(this.loginFieldRegistrationLocator);
    }

    private get passwordField1() {
        return cy.xpath(this.passwordFieldLocator1);
    }

    private get passwordField2() {
        return cy.xpath(this.passwordFieldLocator2);
    }

    private get loginButton() {
        return cy.xpath(this.loginButtonLocator);
    }

    private get loginForm() {
        return cy.xpath(this.loginFormLocator);
    }

    private get registerLink() {
        return cy.xpath(this.toRegisterLocator);
    }

    private get politicsCheckbox() {
        return cy.xpath(this.politicsCheckboxLocator);
    }

    private get registerForm() {
        return cy.xpath(this.registrationFormLocator);
    }

    private get specifyPassw() {
        return cy.xpath(this.specifyPasswLocator);
    }

    private get goodPasw() {
        return cy.xpath(this.goodPaswLocator);
    }

    private get register() {
        return cy.xpath(this.registerButtonLocator);
    }

    private get confirmationWindow() {
        return cy.xpath(this.confirmationWindowLocator);
    }

    private get proceedToMailboxButton() {
        return cy.xpath(this.proceedToMailboxButtonLocator);
    }
    // Методы взаимодействия с ними

    registerWithoutPassw(emailforRegistration: string) {
        this.loginField.type(emailforRegistration);
        this.politicsCheckbox.click();
        this.loginButton.click();
    }

    verifyLoginFormOpened() {
        this.loginForm.should('be.visible');
    }
    clickRegisterLink() {
        this.registerLink.click();
    }

    verifyRegisterForm() {
        this.registerForm.should('be.visible');
    }

    verifyRegisterAlert() {
        this.passwordField1.should('have.css', 'background-color', 'rgb(255, 231, 230)'); //как можно реализовать через and и добавить "Укажите пароль"?
        this.passwordField2.should('have.css', 'background-color', 'rgb(255, 231, 230)');
        this.specifyPassw.should('be.visible');
    }

    registerWithPassw(passwordforRegistration: string) {
        this.passwordField1.type(passwordforRegistration);
        this.passwordField2.type(passwordforRegistration);
        this.goodPasw.should('be.visible');
    }

    registerButtonClick() {
        this.register.click();
    }

    verifyRegisterWindow() {
        this.confirmationWindow.should('be.visible');
        this.proceedToMailboxButton.should('be.visible');
    }
}

export const registrationPage = new RegistrationPage();