class TVPage {
    // Локаторы

    private electronicaLocator = "(//div[contains(@class,'catalog-navigation catalog-navigation_opened')])//li[@data-id='1']";

    //private tvAndVideoLocator = "(//div[contains(@class,'catalog-navigation-list__aside-list')])[2]/div[2]";

    private tvSectionLocator = "(//span[contains(text(), 'Телевизоры')])[1]";
    private firstTVLocator = "(//div[contains(@class, 'schema-product__title')])[1]//span[1]";
    private compareCheckboxLocator = "(//div[contains(@class,'catalog-masthead-controls catalog-masthead-controls_right')]//ul/li/label/span)[1]";
    private plashkaLocator = "(//a[contains(@class,'compare-button__sub compare-button__sub_main')])[1]";
    private backtoTvLocator = "((//div[contains(@class,'breadcrumbs')])//a//span)[2]";


    // Веб-элементы (приватные)
    

    private get electronica() {
        return cy.xpath(this.electronicaLocator);
    }

    /*private get tvAndVideo() {
        return cy.xpath(this.tvAndVideoLocator);
    }*/

    private get tvSection() {
        return cy.xpath(this.tvSectionLocator);
    }

    private get firstTv() {
        return cy.xpath(this.firstTVLocator);
    }


  

    // Методы взаимодействия с ними

    openElectronicaSection() {
        this.electronica.click();
    }

    /*opentvAndVideo() {
        this.tvAndVideo.click();
    }*/

    opentvSection() {
        this.tvSection.click();
    }

    openfirstTv() {
        this.firstTv.click();
    }

    clickCheckbox() {
        cy.get(this.compareCheckboxLocator).check();
    }

    verifyCheckboxState() {
        cy.get(this.compareCheckboxLocator).should('be.checked');
    }

    verifyPlashka() {
        cy.get(this.plashkaLocator).should('be.visiblebe').contains('1 товар в сравнении');
    }
    goToTvSection() {
        cy.get(this.backtoTvLocator).click;
    }
}



export const tvProductPage = new TVPage();