import LogInPage from '../../abstractions/LogInPage.js';
import AddBeneficiaryPage from '../../abstractions/AddBeneficiaryPage.js';

const TEST_ITERATION = [
    {
        "context": "Mexico",
        "user": "mexico-user",
        "beneficiary": "beneficiary"
    },
    {
        "context": "Argentina",
        "user": "argentina-user",
        "beneficiary": "beneficiary"
    }
]

describe("Validate Beneficiary Page.", function () {
    TEST_ITERATION.forEach(iteration => {
        describe(iteration.context, () => {
            beforeEach(() => {
                cy.fixture(iteration.user).then(function (user) {
                    this.user = user;
                })

                cy.fixture(iteration.beneficiary).then(function (beneficiary) {
                    this.beneficiary = beneficiary;
                })
            })

            it("Check the user can add a new beneficiary.", function () {
                //Log in
                let logInPage = new LogInPage();
                logInPage.access(this.user.email, this.user.password);

                //Add a beneficiary
                let addBeneficiaryPage = new AddBeneficiaryPage();
                addBeneficiaryPage.fillForm(this.beneficiary.firstName, this.beneficiary.lastName,
                    this.beneficiary.secondLastName, this.beneficiary.birthday, this.beneficiary.kinship, this.beneficiary.percentage);
                addBeneficiaryPage.add();
                addBeneficiaryPage.lblTextModal().should("contain.text", "Confirm beneficiary");
            })
        })
    })
})