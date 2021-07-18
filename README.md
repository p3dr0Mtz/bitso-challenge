# QA-CODE-CHALLANGE-BITSO

> A node project to complete Bitso QA challange.

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [Author Info](#author-info)

---

## Description
Test Project using cypress to run and execute a set of Test Cases based on the below requirements:

1. Navigate to https://devmalta.bitso.com/register
2. Create two accounts one using Mexico and another using Argentina as a country 3. Verify the accounts ( manually )
4. Login in using the first account created on https://devmalta.bitso.com/
5. On the wallet click on all cryptos (BTC, ETH, BCH.. etc) and verify the warning
message displayed - Oops! Something went wrong
This transaction exceeds your limit. Increase your account limit to continue. 6. Close modal simulating esc key
7. Navigate to https://devmalta.bitso.com/r/user/beneficiaries/add
8. Add a beneficiary

Note: Repeat from step 4 to 8 using the second account created in the same script.

In this project the scenarios were split in 3 categories: 
- Register a new User.
- Click on every crypto in the wallet and close warning message.
- Add a beneficiary.

The scenarios were split in order to keep every scenario as an atomic test case. 
Another approach use is Data Driven test, basically every scenario mentioned above will be run using a Mexican user and an Argentinian user.

POM Classes Location : /abstractions
Test Data : /cypress/fixtures
Test Scripts location : /cypress/integration
 
 [Back To The Top](#QA-CODE-CHALLANGE-BITSO)
---

## How To Use
In command line run: npm test

[Back To The Top](#QA-CODE-CHALLANGE-BITSO)
---

## Author Info
- Pedro A. Martinez : pedro187.a@gmail.com

[Back To The Top](#QA-CODE-CHALLANGE-BITSO)

