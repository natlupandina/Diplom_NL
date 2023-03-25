class SupportPage {
    // Локаторы
    private supportLocator = "(//li[contains(@class, 'footer-style__item')])[10]";
    private supportPageTitleLocator = "(//div[contains(@class, 'inner')])/h1";
    private fioLocator = "(//div[contains(@class, 'i-view')]/input)[1]";
    private mailLocator = "(//div[contains(@class, 'i-view')]/input)[2]";
    private problemTypeLocator = "(//div[contains(@class, 'i-view')])[3]/select";
    private whereLocator = "(//div[contains(@class, 'i-view')])[4]/select";
    private consiceDescriptionLocator = "(//div[contains(@class, 'i-view')])[5]/input";
    private fullDescriptionLocator = "(//div[contains(@class, 'i-view')])[6]/textarea";
    private capchaFieldLocator = "(//div[contains(@class, 'i-view')])[7]/input";
    private capchaLocator = "(//div[contains(@class, 'i-view')])[7]/img";
    private addButtonLocator = "//input[contains(@type, 'image')]";

    //Веб-элементы (приватные)

    private get supportPage() {
        return cy.xpath(this.supportLocator);
    }

    private get fioField() {
        return cy.xpath(this.fioLocator);
    }

    private get mailField() {
        return cy.xpath(this.mailLocator);
    }

    private get problemtypeDd() {
        return cy.xpath(this.problemTypeLocator);
    }

    private get whereDd() {
        return cy.xpath(this.whereLocator);
    }

    private get consiceDescription() {
        return cy.xpath(this.consiceDescriptionLocator);
    }

    private get fullDescription() {
        return cy.xpath(this.fullDescriptionLocator);
    }

    private get capchaField() {
        return cy.xpath(this.capchaFieldLocator);
    }

    private get capcha() {
        return cy.xpath(this.capchaLocator);
    }

    private get addButton() {
        return cy.xpath(this.addButtonLocator);
    }


    // Методы взаимодействия с ними
    openSupportPage() {
        this.supportPage.click();
        cy.xpath(this.supportPageTitleLocator).should('have.text', 'Запрос в службу поддержки');
    }

    fillOutAndClearFio(fio: string) {
        this.fioField.type(fio).click().should('have.value', fio);
        this.fioField.clear();
        this.mailField.click();
        this.fioField.should('have.value', 'Anonymous');
    }

    fillOutWrongEmailField(email: string) {
        this.mailField.type(email).blur().should('have.css', 'border', '0.8px solid rgb(255, 0, 0)').clear();
    }

    fillOutCorrectEmailField(email: string) {
        this.mailField.type(email).blur().should('have.not.css', 'border', '0.8px solid rgb(255, 0, 0)');
    }

    problemTypeAndWhereVerification() {
        this.problemtypeDd.should('have.descendants', 'option');
        this.whereDd.should('have.descendants', 'option');
    }

    descriptionsFieldsVerification() {
        this.consiceDescription.should('be.visible');
        this.fullDescription.should('be.visible');
    }

    capchaVerification() {
        this.capchaField.should('be.visible');
        this.capcha.should('be.visible');
    }

    addButtonVerification() {
        this.addButton.should('be.visible').and('be.be.enabled');
    }
}

export const supportPage = new SupportPage();