
import { mainPage } from "../../pages/mainPage";
import { searchPopup } from "../../pages/popups/searchPopUp";
import { productPage } from "../../pages/cameraProductPage";
import { searchCartConst, searchPhotoConst } from "../const/searchConsts";


describe("Onliner4", () => {
    before(() => {
        cy.visit('/');
    })

    it("test4", () => {
        mainPage.setSearchTerm(searchCartConst);
        searchPopup.validateSearchMemoryCartResults(searchCartConst);
        searchPopup.clearSearch();
        searchPopup.doNewSearchinIframe(searchPhotoConst);
        searchPopup.verifyPhotoIsDisplayed(searchPhotoConst, 1);
        searchPopup.verifyPriceAndSuggestionsDisplayed();
        searchPopup.openPhoto();
        productPage.verifyCameraName();
    })
})