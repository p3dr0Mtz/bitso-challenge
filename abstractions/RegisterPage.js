/// <reference types="cypress"/>

class RegisterPage {
    countryTxt = () => cy.get("input#country", {force: true});
    emailTxt = () => cy.get("input#email", {force: true});
    passTxt = () => cy.get("input#password", {force: true});
    confirmedPassTxt = () => cy.get("input#password_confirmation", {force: true});
    policieCheckList = () => cy.get("span.moon-val_check");
    summitBtn = () => cy.get("button[type='submit']");
    verifyEmailModal = () => cy.get("div.modal-content");

    constructor() {
        cy.visit("https://devmalta.bitso.com/register/reg");
    }

    fillForm(coutry, email, pass) {
        this.countryTxt().first().focus().type(coutry).type('{enter}');
        this.emailTxt().type(email);
        this.passTxt().type(pass);
        this.confirmedPassTxt().type(pass);
    }

    acceptAllPolicies() {
        this.policieCheckList().click({multiple: true, force: true});
    }

    registerUser() {
        this.summitBtn().click();
    }
}
export default RegisterPage