
import { email, password } from "../const/loginConst";
import { loginPage } from "../../pages/loginPage";
import { mainPage } from "../../pages/mainPage";

describe("Onliner1", () => {
    before(() => {
        cy.visit('/');
    })

    it("test1", () => {
        mainPage.openLoginPage();
        loginPage.verifyLoginFormOpened();
        loginPage.logIn(email, password);
        loginPage.verifyCaptchaDisplayed();
     
    })
})