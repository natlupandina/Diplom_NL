class LaptopsPage {
    // Локаторы

    private laptopsTitleLocator = "//h1[contains(@class, 'schema-header__title js-schema-header_title')]";
    private asusCheckboxLocator = "(//span[contains(@class,'i-checkbox__faux')])[4]";
    private tagLocator = "(//span[contains(@class,'schema-tags__text')])[1]";
    private tagMatrixLocator = "(//span[contains(@class,'schema-tags__text')])[2]";
    private matrixFrequencyFirstLocator = "(//select[contains(@class,'schema-filter-control__item')])[9]";
    private matrixFrequencySecondLocator = "(//select[contains(@class,'schema-filter-control__item')])[10]";
    private superPriceLocator = "(//div[contains(@class,'schema-filter__bonus-list')])[2]";

    // Веб-элементы (приватные)
    private get laptopsTitle() {
        return cy.xpath(this.laptopsTitleLocator);
    }

    private get asusCheckbox() {
        return cy.xpath(this.asusCheckboxLocator);
    }

    private get tagAsus() {
        return cy.xpath(this.tagLocator);
    }

    private get tagFrequency() {
        return cy.xpath(this.tagMatrixLocator);
    }

    private get superPrice() {
        return cy.xpath(this.superPriceLocator);
    }

    // Методы взаимодействия с ними

    verifyLaptopTitle(laptopConst: string) {
        this.laptopsTitle.should('contain.text', laptopConst);
    }

    checkAsusCheckbox() {
        this.asusCheckbox.click();
    }

    verifyAsusTag() {
        this.tagAsus.should('be.visible');
        this.tagAsus.should('contain.text', 'ASUS');
    }

    verifyFrequencyTag() {
        this.tagFrequency.should('be.visible');
        this.tagFrequency.should('contain.text', '120 Гц — 165 Гц');
    }

    verifysuperPriceTag() {
        this.tagAsus.should('be.visible');
        this.tagAsus.should('contain.text', 'Суперцена');
    }

    selectFristDropDownelement() {
        cy.xpath(this.matrixFrequencyFirstLocator)
            .select("120 Гц")
            .invoke("val")
            .should("eq", "120hz");
    }

    selectSecondDropDownelement() {
        cy.xpath(this.matrixFrequencySecondLocator)
            .select("165 Гц")
            .invoke("val")
            .should("eq", "165hz");
    }

    clickSuperPriceCheckbox() {
        this.superPrice.click();
    }

}

export const laptopsPage = new LaptopsPage();