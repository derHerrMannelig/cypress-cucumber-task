import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import page from '../pages/page.js';
import loginPage from '../pages/login.page.js';

const baseUrl = Cypress.config().baseUrl;
const testData = JSON.parse(JSON.stringify(require('../../fixtures/data.json')));

Given("I am on the login page", () => {
  loginPage.gotoBaseUrl();
});

When("I login with valid credentials", () => {
  loginPage.getLogin().type(`${testData.user.valid}`);
  loginPage.getPassword().type(`${testData.user.password}`);
  loginPage.clickSignInButton();
});

Then("I should be redirected into inventory page", () => {
  page.currentUrl().should('eq', `${baseUrl}/inventory.html`);
});
