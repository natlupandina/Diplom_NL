
import { mainPage } from "../../pages/mainPage";
import { searchPopup } from "../../pages/popups/searchPopUp";
import { searchConst3 } from "../const/searchConsts";
import { linzPage } from "../../pages/linzProductPage";
import { logInWithoutCapcha } from "../helpers/loginHelper";
import { cartPage } from "../../pages/cartPage";
import { contacts, dom, street } from "../const/orderData";


describe("Onliner6", () => {
    before(() => {
        logInWithoutCapcha();
    })

    it("test6", () => {
        mainPage.setSearchTerm(searchConst3);
        searchPopup.validateSeachLinzResults(searchConst3);
        searchPopup.linzClick();
        linzPage.linzSuggestionsClick();
        const linzPageTitleText = linzPage.getLinzTitleText();
        const linzPagePriceText = linzPage.getLinzPriceText();
        linzPage.addToCart();
        linzPage.verifyCartButtonTextChanged();
        cartPage.verifyCartCounterNumber(1);
        cartPage.openCart();
        cartPage.validateLinzInCart(linzPageTitleText, linzPagePriceText);
        cartPage.order();
        cartPage.verifyOrderName(searchConst3);
        cartPage.typeInAddressandContacts(street, dom, contacts);
        cartPage.proceedToPayment();
        cy.go('back');
    })

    after(() => {
        cartPage.clearCart();
    })
})