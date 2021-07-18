import RegisterPage from '../../abstractions/RegisterPage.js';

const TEST_ITERATION = [
    {
        "context": "Mexico",
        "user": "mexico-user"
    },
    {
        "context": "Argentina",
        "user": "argentina-user"
    }
]

describe('Register Page Test.', function () {
    TEST_ITERATION.forEach(iteration => {
        describe(iteration.context, () => {
            beforeEach(() => {
                cy.fixture(iteration.user).then(function (user) {
                    this.user = user;
                })
            })

            it('Register a new valid user.', function () {
                //Register a user
                let registerPage = new RegisterPage();
                
                registerPage.fillForm(this.user.country, this.user.email, this.user.password);
                registerPage.acceptAllPolicies();
                registerPage.registerUser();

                //Check the messsage in the expected modal
                registerPage.verifyEmailModal().should("contain.text", "Verify your email")
            })
        })
    })
})