import { supportPage } from "../../pages/supportPage";

describe("Onliner9", () => {
    before(() => {
        cy.visit('/');
    })

    it("test9", () => {
        supportPage.openSupportPage();
        supportPage.fillOutAndClearFio('Natalia Rasada');
        supportPage.fillOutWrongEmailField('fakeEmail');
        supportPage.fillOutCorrectEmailField('nat@gmail.com');
        supportPage.problemTypeAndWhereVerification();
        supportPage.descriptionsFieldsVerification();
        supportPage.capchaVerification();
        supportPage.addButtonVerification();
    })
})

