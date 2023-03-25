import { mainPage } from "../../pages/mainPage";
import { searchPopup } from "../../pages/popups/searchPopUp";
import { searchLinzConst } from "../const/searchConsts";
import { linzPage } from "../../pages/linzProductPage";
import { logInWithoutCapcha } from "../helpers/loginHelper";
import { cartPage } from "../../pages/cartPage";
import { contacts, dom, newExpectedText, street } from "../const/orderData";


describe("Onliner6", () => {
    before(() => {
        logInWithoutCapcha();
    })

    it("test6", () => {
        mainPage.setSearchTerm(searchLinzConst);
        searchPopup.validateSearchLinzResults(searchLinzConst);
        searchPopup.linzClick();
        linzPage.verifyLinzPageOpened();
        linzPage.linzSuggestionsClick();
        linzPage.addToCart();
        linzPage.verifyCartButtonTextChanged(newExpectedText);
        cartPage.verifyCartCounterNumber(1);
        linzPage.getProductTitleLinzPage().then(productTitleText => {
            //         // Сохраняем цену продукта
            linzPage.getProductPriceLinzPage().then(productPriceText => {
                //             // Переходим в корзину
                cartPage.openCart();
                //             // Сравниваем название добавленного продукта
                cartPage.compareAddedProductTitle(productTitleText);
                //             // Сравниваем цену добавленного продукта
                cartPage.compareAddedProductPrice(productPriceText);
            })
            cartPage.order();
            cartPage.verifyOrderName(searchLinzConst);
            cartPage.typeInAddressandContacts(street, dom, contacts);
            cartPage.proceedToPayment();
            cy.go('back');
        })

    })

    /*after(() => {
        cartPage.clearCart();
    })*/
})
