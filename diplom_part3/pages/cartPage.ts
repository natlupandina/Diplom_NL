import { familia, privateName } from "../cypress/const/orderData";

class CartPage {
    // Локаторы

    private cartCounterLocator = "(//span[contains(@class, 'b-top-profile__counter')])[3]";
    private cartLocator = "//div[@id='userbar']/div/div/a";
    private linzTitleInCartLocator = "(//*[contains(@class,'cart-form__offers-flex')]//div)[7]";
    private linzPriceInCartLocator = "(//div[contains(@class,'cart-form__description')]/span)[2]";
    private proceedToOrderLocator = "(//div[contains(@class,'cart-form__control')]/a)[2]";
    private orderPageTitleLocator = "(//div[contains(@class,'cart-form__title')])[1]";
    private streetLocator = "(//input[contains(@class,'auth-input')])[2]";
    private domLocator = "(//input[contains(@type,'text')])[3]";
    private contactsLocator = "(//input[contains(@class,'auth-input')])[2]";
    private proceedToPaymentLocator = "//button[contains(@class,'button-style')]";
    private nameFieldLocator = "(//input[contains(@class,'input-style')])[6]";
    private familiaFieldLocator = "(//input[contains(@class,'input-style')])[7]";
    private clearCartLocator = "(//div[contains(@class,'cart-form__control')]/a)[1]";

    // Веб-элементы (приватные)
    private get cartCounter() {
        return cy.xpath(this.cartCounterLocator);
    }

    private get cartClick() {
        return cy.xpath(this.cartLocator);
    }

    private get linzTitleInCart() {
        return cy.xpath(this.linzTitleInCartLocator);
    }

    private get linzPriceInCart() {
        return cy.xpath(this.linzPriceInCartLocator);
    }

    private get proceedToOrderPage() {
        return cy.xpath(this.proceedToOrderLocator);
    }

    private get orderPageTitle() {
        return cy.xpath(this.orderPageTitleLocator);
    }

    private get streetField() {
        return cy.xpath(this.streetLocator);
    }

    private get domField() {
        return cy.xpath(this.domLocator);
    }

    private get contactsField() {
        return cy.xpath(this.contactsLocator);
    }

    private get proceedToPaymentButton() {
        return cy.xpath(this.proceedToPaymentLocator);
    }

    private get familiaField() {
        return cy.xpath(this.familiaFieldLocator);
    }

    private get nameField() {
        return cy.xpath(this.nameFieldLocator);
    }

    private get clearCartButton() {
        return cy.xpath(this.clearCartLocator);
    }

    // Методы взаимодействия с ними

    verifyCartCounterNumber(count: number) {
        this.cartCounter.should('have.text', count.toString());
    }

    openCart() {
        this.cartClick.click();
    }

    compareAddedProductTitle(expectedText: string): void {
        this.linzTitleInCart.should('contain.text', expectedText);
    }

    compareAddedProductPrice(expectedText: string): void {
        this.linzPriceInCart.should('contain.text', expectedText);
    }

    /*validateLinzInCart(expectedTitle: string, expectedPrice: string) {
        this.linzTitleInCart.should('have.text', expectedTitle);
        this.linzPriceInCart.should('have.text', expectedPrice);
    }*/

    order() {
        this.proceedToOrderPage.click();
    }

    verifyOrderName(expectedOrder: string) {
        this.orderPageTitle.should('have.text', expectedOrder);
        this.orderPageTitle.should('have.text', expectedOrder);
    }

    typeInAddressandContacts(street: string, contacts: string, dom: string) {
        this.streetField.type(street);
        this.contactsField.type(contacts);
        this.domField.type(dom);
        this.familiaField.type(familia);
        this.nameField.type(privateName);
    }

    proceedToPayment() {
        this.proceedToPaymentButton.click();
    }

    clearCart() {
        this.clearCartButton.click();
    }

}

export const cartPage = new CartPage();