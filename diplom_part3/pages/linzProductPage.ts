class LinzPage {
    // Локаторы

    private linzSuggestionsLocator = "(//ul[@class='b-offers-subnav']/li)[2]";
    private addToCartLocator = "(//div[@class='offers-list__flex']//a)[4]";
    private linzTitleLocator = "//h1[contains(@class,'catalog-masthead')]";
    private linzPriceLocator = "(//div[contains(@class,'offers-description__price')])[2]";

    //Веб элементы

    private get linzSuggestions() {
        return cy.xpath(this.linzSuggestionsLocator);
    }

    private get addLinzToCart() {
        return cy.xpath(this.addToCartLocator);
    }

    private get linzPageTitle() {
        return cy.xpath(this.linzTitleLocator);
    }

    private get linzPrice() {
        return cy.xpath(this.linzPriceLocator);
    }

    // Методы взаимодействия с ними

    linzSuggestionsClick() {
        this.linzSuggestions.click();
    }

    addToCart() {
        this.addLinzToCart.click();
    }

    verifyCartButtonTextChanged(newExpectedText: string) {
        this.addLinzToCart.should('contain.text', 'newExpectedText');
    }

    /*getLinzTitleText(): string {
        let textToReturn: string = '';
        this.linzPageTitle.invoke('text').then((titleText) => {
            textToReturn = titleText;
        })

        return textToReturn;
    }

    getLinzPriceText(): string {
        let textToReturn: string = '';
        this.linzPrice.invoke('text').then((priceText) => {
            textToReturn = priceText;
        })

        return textToReturn;
    }
*/

    getProductTitleLinzPage() {
        return this.linzPageTitle.invoke('text');
    }

    getProductPriceLinzPage() {
        return this.linzPrice.invoke('text');
    }

}

export const linzPage = new LinzPage();