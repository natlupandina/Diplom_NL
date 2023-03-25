import { searchPhotoConst } from "../cypress/const/searchConsts";

class ProductPage {
    // Локаторы
    
    private photoPageLocator = "//h1[contains(@class,'catalog-masthead__title js-nav-header')]";

    //Веб-элементы (приватные)

    private get photoPage() {
        return cy.xpath(this.photoPageLocator);
    }

    // Методы взаимодействия с ними

    verifyCameraName() {
       this.photoPage.should('include.text', searchPhotoConst);
    }
}

export const productPage = new ProductPage();