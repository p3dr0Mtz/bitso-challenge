/// <reference types="cypress"/>

class AddBeneficiaryPage {
    firstNameTxt = () => cy.get("input#first_name");
    lastNameTxt = () => cy.get("input#last_name");
    secondLasNameTxt = () => cy.get("input#second_last_name");
    birthdayTxt = () => cy.get("input#dob");
    kinshipDdl = () => cy.get("div.css-tdzd0p");
    percentageTxt = () => cy.get("input#percentage");
    addBtn = () => cy.get("button[data-testid=add-beneficiary-button]");
    lblTextModal = () => cy.get("div.modal-content h3");

    constructor() {
        cy.visit("https://devmalta.bitso.com/r/user/beneficiaries/add");
    }

    fillForm(firstName, lastName, secondLastName, birthday, kinship, percentage) {
        this.firstNameTxt().type(firstName);
        this.lastNameTxt().type(lastName);
        this.secondLasNameTxt().type(secondLastName);
        this.birthdayTxt().type(birthday);
        this.kinshipDdl().eq(0).click();
        cy.get("div#react-select-2-option-" + (kinship - 1)).click();
        this.percentageTxt().type(percentage);
    }

    add() {
        this.addBtn().click();
    }
}
export default AddBeneficiaryPage