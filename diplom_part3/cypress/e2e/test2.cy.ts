import { mainPage } from "../../pages/mainPage";
import { registrationPage } from "../../pages/registrationPage";
import { emailforRegistration, passwordforRegistration } from "../const/registrationConst";


describe("Onliner2", () => {
    before(() => {
        cy.visit('/');
    })

    it("test2", () => {
        mainPage.openLoginPage();
        registrationPage.clickRegisterLink();
        registrationPage.registerWithoutPassw(emailforRegistration);
        registrationPage.verifyRegisterAlert();
        registrationPage.registerWithPassw(passwordforRegistration);
        registrationPage.registerButtonClick();
        registrationPage.verifyRegisterWindow();
    })
})

