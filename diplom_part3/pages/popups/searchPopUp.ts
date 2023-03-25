class SearchPopup {
    // Локаторы
    private searchFrameContainerLocator = "//iframe[@class='modal-iframe']";
    private searchLocator= "//input[@class= 'search__input']"; //локатор поля поиска
    private searchResultsMemoryCartLocator = '(//div[@class="result__item result__item_category"])[1]';  //локатор ссылка поиска по словам карты памяти
    private searchResultsAllItemsLocator = "//div[contains(@class,'search__content-wrapper')]/ul";
    private priceLocator = "//div[@class= 'product__price']";
    private suggestionsLocator = "//a[@class= 'button button_orange product__button']";
    private photoLocator = "//div[@class= 'product__title']/a";
    private searchResultsLinzLocator = "//div[contains(@class,'result__item result__item_product')]";
    //Веб элементы

    private get photo() {
        return cy.xpath(this.photoLocator);
    }

    // Методы взаимодействия с ними

    validateSearchMemoryCartResults(searchConst: string) {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.searchResultsMemoryCartLocator)
            .should('contain.text', searchConst)
            .xpath(this.searchResultsAllItemsLocator).children().should('have.length.at.least', 2);
    };

    validateSearchLinzResults(searchConst3: string) {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.searchResultsLinzLocator)
            .should('contain.text', searchConst3)
    };

    clearSearch() {
        cy.getIFrameBody(this.searchFrameContainerLocator)
        .xpath(this.searchLocator).clear()
        .should('have.value', '')
        .xpath(this.searchResultsAllItemsLocator).children().should('have.length', 0);
    }

    doNewSearchinIframe(term:string){
        cy.getIFrameBody(this.searchFrameContainerLocator)  
        .xpath(this.searchLocator).type(term)
        .should ('have.value', term);
    }

    verifyPhotoIsDisplayed(searchConst2: string, expectedCount: number) {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.searchResultsAllItemsLocator)
            .should('have.length', expectedCount)
            .each((title) => {
                cy.wrap(title).should('contain.text', searchConst2);
            });
    }

    verifyPriceAndSuggestionsDisplayed() {
        cy.getIFrameBody(this.searchFrameContainerLocator)
            .xpath(this.priceLocator)
            .should('be.visible')
            .xpath(this.suggestionsLocator) //можно ли так совместить два xpath в одном методе?
            .should('be.visible');
    }

    openPhoto() {
        cy.getIFrameBody(this.searchFrameContainerLocator)
        .xpath(this.photoLocator).click();
    }

    linzClick() {
        cy.getIFrameBody(this.searchFrameContainerLocator)
        .xpath(this.searchResultsLinzLocator)
        .click();
    }

}

export const searchPopup = new SearchPopup();