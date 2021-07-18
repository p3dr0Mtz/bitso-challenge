/// <reference types="cypress"/>

class WalletPage {
    cryptoLst = () => cy.get("div.wallet-balances div.wallet-balances-container");

    constructor() {
        cy.visit("https://devmalta.bitso.com/wallet");
    }

    clickCryptoAndSkipMessage() {
        this.cryptoLst().each($element => {
            cy.wrap($element).click();
            //Warning should be visible here 🤷🏽‍♂️
            //cy.get("").type("{esc}")
        });
    }
}
export default WalletPage