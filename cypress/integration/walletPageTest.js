import LogInPage from '../../abstractions/LogInPage.js';
import WalletPage from '../../abstractions/WalletPage.js';
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

describe('Validate Wallet Page.', function () {
    TEST_ITERATION.forEach(iteration => {
        describe(iteration.context, () => {
            beforeEach(() => {
                cy.fixture(iteration.user).then(function (user) {
                    this.user = user;
                })
            })

            it('Check the user can select every crypto and close the warning message.', function () {
                //Log in
                let logInPage = new LogInPage();
                logInPage.access(this.user.email, this.user.password);

                //Wallet page
                let walletPage = new WalletPage();
                walletPage.clickCryptoAndSkipMessage();
            })
        })
    })
})