import { laptopsPage } from "../../pages/laptopsPage";
import { mainPage } from "../../pages/mainPage";
import { laptopConst } from "../const/laptopsConst";

describe("Onliner5", () => {
    before(() => {
        cy.visit('/');
    })

    it("test5", () => {
        mainPage.openCatalog();
        mainPage.openLaptops();
        laptopsPage.verifyLaptopTitle(laptopConst);
        laptopsPage.checkAsusCheckbox(); 
        laptopsPage.verifyAsusTag(); // wasn't able to implement condition " Уменьшилось число найденных товаров"
        laptopsPage.selectFristDropDownelement(); 
        laptopsPage.selectSecondDropDownelement(); 
        laptopsPage.verifyFrequencyTag(); //wasn't able to implement condition "  Уменьшилось число найденных товаров. Фильтр "ASUS" также присутствует"
        laptopsPage.clickSuperPriceCheckbox();
        laptopsPage.verifysuperPriceTag(); //wasn't able to implement condition " Отображаются только товары со значком " 
        laptopsPage.checkAsusCheckbox();
        laptopsPage.verifyFrequencyTag();
        laptopsPage.verifysuperPriceTag();
    })
})