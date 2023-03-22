import { has } from "cypress/types/lodash";
import { searchConst2 } from "../cypress/const/searchConsts";

class ProductPage {
    // Локаторы
    private photoPageLocator = "//h1[contains(@class,'catalog-masthead__title js-nav-header')]";

    // Веб-элементы (приватные)
    private get photoPage() {
        return cy.xpath(this.photoPageLocator);
    }

    // Методы взаимодействия с ними
    verifyCameraName() {

        cy.xpath(this.photoPageLocator).should('include.text',searchConst2);
    }
}

export const productPage = new ProductPage();