

class SearchPopup {
    // Локаторы
    private searchFrameContainerLocator = '//iframe[@class="modal-iframe"]';
    private searchResultsMemoryCartLocator = '(.//div[@class="result__item result__item_category"])[1]';  //локатор ссылка поиска по словам карты памяти
    private searchResultsAllItemsLocator = "//div[@class= 'search__content-wrapper']/ul";
    private priceLocator = "//div[@class= 'product__price']";
    private suggestionsLocator = "//a[@class= 'button button_orange product__button']";
    private photoLocator = "//div[@class= 'product__title']";
    private linzSearchLocator = "//div[@class='product__title']/a";
    private searchResultsLinzLocator = "//div[contains(@class,'result__item result__item_product')]";
    //Веб элементы

    private get photo() {
        return cy.xpath(this.photoLocator);
    }

    private get linzSearch() {
        return cy.xpath(this.linzSearchLocator);
    }

    // Методы взаимодействия с ними

    validateSeachMemoryCartResults(searchConst: string) {
        cy.getIframeBody(this.searchFrameContainerLocator)
            .xpath(this.searchResultsMemoryCartLocator)
            .should('contain.text', searchConst)
    };

    validateSeachLinzResults(searchConst3: string) {
        cy.getIframeBody(this.searchFrameContainerLocator)
            .xpath(this.searchResultsLinzLocator)
            .should('contain.text', searchConst3)
    };

    clearSearch() {
        cy.get(this.searchFrameContainerLocator).clear();
    }

    verifyNoSearchResult(searchCount: number) {
        cy.get(this.searchResultsAllItemsLocator).should('have.length', searchCount); 
    }

    verifyPhotoIsDisplayed(searchConst2: string, expectedCount: number) {
        cy.getIframeBody(this.searchFrameContainerLocator)
            .xpath(this.searchResultsAllItemsLocator)
            .should('have.length', expectedCount)
            .each((title) => {
                cy.wrap(title).should('contain.text', searchConst2);
            });
    }

    verifyPriceAndSuggestionsDisplayed() {
        cy.getIframeBody(this.searchFrameContainerLocator)
            .xpath(this.priceLocator)
            .should('be.visible')
            .xpath(this.suggestionsLocator) //мржно ли так совместить два xpath в одном методе?
            .should('be.visible');
    }

    openPhoto() {
        this.photo.click();
    }

    linzClick() {
        this.linzSearch.click();
    }
}

export const searchPopup = new SearchPopup();