class TVPage {
    // Локаторы

    private electronicaLocator = "(//div[contains(@class,'catalog-navigation catalog-navigation_opened')])//li[@data-id='1']";
    private tvAndVideoLocator = "(//div[contains(@class,'catalog-navigation-list__aside-list')])[2]/div[2]";
    private tvSectionLocator = "(//a[contains(@href,'https://catalog.onliner.by/tv')])[2]";
    private firstTVLocator = "(//div[contains(@class, 'schema-product__title')])[1]//span[1]";
    private compareCheckboxLocator = "(//span[contains(@class, 'i-checkbox__faux')])[1]";
    private plashkaLocator = "(//a[contains(@class,'compare-button__sub compare-button__sub_main')])[1]";
    private backtoTvLocator = "((//div[contains(@class,'breadcrumbs')])//a//span)[2]";
    private firstTvDescriptionLocator = "(//ul[contains(@id,'product-sub-navigation-container')]//span)[1]";

    // Веб-элементы (приватные)

    private get electronica() {
        return cy.xpath(this.electronicaLocator);
    }

    private get tvAndVideo() {
        return cy.xpath(this.tvAndVideoLocator);
    }

    private get tvSection() {
        return cy.xpath(this.tvSectionLocator);
    }

    private get firstTv() {
        return cy.xpath(this.firstTVLocator);
    }

    private get firstTvDescription() {
        return cy.xpath(this.firstTvDescriptionLocator);
    }

    private get compareClick() {
        return cy.xpath(this.compareCheckboxLocator);
    }


    // Методы взаимодействия с ними

    openElectronicaSection() {
        this.electronica.click();
    }

    opentvAndVideo() {
        this.tvAndVideo.click();
    }

    opentvSection() {
        this.tvSection.trigger('mouseover').click();
    }

    openfirstTv() {
        this.firstTv.click();
        this.firstTvDescription.should('be.visible');
    }

    clickCheckboxandAndVerify() {
        this.compareClick.click();
        cy.get(this.compareCheckboxLocator).should('be.checked');
    }

    verifyPlashka() {
        cy.get(this.plashkaLocator).should('be.visiblebe').contains('1 товар в сравнении');
    }

    goToTvSection() {
        cy.get(this.backtoTvLocator).click();
    }
}

export const tvProductPage = new TVPage();