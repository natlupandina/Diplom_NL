class MainPage {
    // Локаторы
    private catalogLocator = "//*[contains(@class,'b-main-navigation__text')][text()='Каталог']";
    private loginButtonLocator = "//*[contains(@class,'auth-bar__item')][text()='Вход']";
    private expandProfileMenuButtonLocator = "//*[contains(@class,'b-top-profile__item_arrow')]";
    private userNicknameLabelLocator = "//*[@class='b-top-profile__name']/a";
    private searchFieldLocator = '//*[@class="fast-search__input"]';

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

    // Методы взаимодействия с ними
    openLoginPage() {
        this.loginButton.click();
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
}





export const mainPage = new MainPage();