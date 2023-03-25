
import { mainPage } from "../../pages/mainPage";
import { tvProductPage } from "../../pages/tvProductPage";

describe("Onliner10", () => {
    before(() => {
        cy.visit('/');
    })

    it("test10", () => {
        mainPage.openCatalog();
        tvProductPage.openElectronicaSection();
        tvProductPage.opentvAndVideo();
        tvProductPage.opentvSection();
        tvProductPage.openfirstTv();
        tvProductPage.clickCheckboxandAndVerify(); // missing ) after argument list -wasnt abel to find out an error/typo
        tvProductPage.verifyPlashka();
        tvProductPage.goToTvSection();
    })
})