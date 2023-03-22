
import { mainPage } from "../../pages/mainPage";
import { searchPopup } from "../../pages/popups/searchPopUp";
import { productPage } from "../../pages/cameraProductPage";
import { searchConst, searchConst2 } from "../const/searchConsts";


describe("Onliner4", () => {
    before(() => {
        cy.visit('/');
    })

    it("test4", () => {
        mainPage.setSearchTerm(searchConst);
        searchPopup.validateSearchMemoryCartResults(searchConst);
        searchPopup.clearSearch();
        searchPopup.doNewSearchinIframe(searchConst2);
        searchPopup.verifyPhotoIsDisplayed(searchConst2, 1);
        searchPopup.verifyPriceAndSuggestionsDisplayed();
        searchPopup.openPhoto();
        productPage.verifyCameraName();
    })
})