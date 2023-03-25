class MainPage {
    // Локаторы
    private catalogLocator = "//*[contains(@class,'b-main-navigation__text')][text()='Каталог']";
    private loginButtonLocator = "//*[contains(@class,'auth-bar__item')][text()='Вход']";
    private expandProfileMenuButtonLocator = "//*[contains(@class,'b-top-profile__item_arrow')]";
    private userNicknameLabelLocator = "//*[@class='b-top-profile__name']/a";
    private searchFieldLocator = '//*[@class="fast-search__input"]';
    private laptopsAndNetworksLocator = "(//ul[contains(@class,'catalog-navigation-classifier')]/li)[4]";
    private laptopsAndCompsLocator = '//div[contains(text(),"Ноутбуки, компьютеры, мониторы")]';
    private laptopsLocator = '//a[(@href="https://catalog.onliner.by/notebook")]';
    private loginFormLocator = "//div[contains(@class,'auth-form__body')]";


    // Веб-элементы (приватные)
    private get loginButton() {
        return cy.xpath(this.loginButtonLocator);
    }

    private get catalog() {
        return cy.xpath(this.catalogLocator);
    }

    private get expandProfileMenuButton() {
        return cy.xpath(this.expandProfileMenuButtonLocator);
    }

    private get userNicknameLabel() {
        return cy.xpath(this.userNicknameLabelLocator);
    }

    private get searchField() {
        return cy.xpath(this.searchFieldLocator);
    }

    private get laptopsAndNetworks() {
        return cy.xpath(this.laptopsAndNetworksLocator);
    }

    private get laptopsAndComps() {
        return cy.xpath(this.laptopsAndCompsLocator);
    }

    private get laptops() {
        return cy.xpath(this.laptopsLocator);
    }

    private get loginForm() {
        return cy.xpath(this.loginFormLocator);
    }

    // Методы взаимодействия с ними
    openLoginPage() {
        this.loginButton.click();
        this.loginForm.should('be.visible');
    }

    openCatalog() {
        this.catalog.click();
    }

    expandProfileMenu() {
        this.expandProfileMenuButton.click();
    }

    validateUserNickname(expectedNickname: string) {
        this.userNicknameLabel.should('contain.text', expectedNickname);
    }

    setSearchTerm(term: string) {
        this.searchField.type(term);
    }

    openLaptops() {
        this.laptopsAndNetworks.click();
        this.laptopsAndComps.click();
        this.laptops.click();
    }
}

export const mainPage = new MainPage();