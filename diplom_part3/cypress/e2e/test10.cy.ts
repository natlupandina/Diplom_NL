
import { mainPage } from "../../pages/mainPage";
import { tvProductPage } from "../../pages/tvProductPage";

describe("Onliner10", () => {
    before(() => {
        cy.visit('/');
    })

    it("test10", () => {
        mainPage.openCatalog();
        tvProductPage.openElectronicaSection();
        //mainPage.opentvAndVideo();
        tvProductPage.opentvSection();
        tvProductPage.openfirstTv();
        tvProductPage.clickCheckbox();
        tvProductPage.verifyCheckboxState();
        tvProductPage.verifyPlashka();
        tvProductPage.goToTvSection();

    })
})