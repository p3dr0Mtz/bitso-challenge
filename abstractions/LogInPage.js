/// <reference types="cypress"/>

class LogInPage {
    emailTxt = () => cy.get("input#client_id");
    passTxt = () => cy.get("input#password");
    summitBtn = () => cy.get("button[type='submit']");

    constructor() {
        cy.visit("https://devmalta.bitso.com/login");
    }

    access(email, pass) {
        this.emailTxt().type(email);
        this.passTxt().type(pass);
        this.summitBtn().click();
    }

    //https://devmalta.bitso.com/auth_device/b76aabc5397002d98c4170b7ba579580
    authorizeNewDevice(url) {
        cy.visit(url);
    }
}
export default LogInPage