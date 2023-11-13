import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import page from '../pages/page.js';
import loginPage from '../pages/login.page.js';

const baseUrl = Cypress.config().baseUrl;
const { faker } = require('@faker-js/faker');
const randomUser = faker.internet.displayName();
const randomPassword = faker.internet.password();
const testData = JSON.parse(JSON.stringify(require('../../fixtures/data.json')));

Given("I am on the login page", () => {
  loginPage.gotoBaseUrl();
});

When("I login with credentials", (table) =>  {
  const credentials = table.rawTable[1];
  if (credentials == "valid") {
    loginPage.getLogin().type(`${testData.user.valid}`);
    loginPage.getPassword().type(`${testData.user.password}`);
  } else if (credentials == "locked") {
    loginPage.getLogin().type(`${testData.user.locked}`);
    loginPage.getPassword().type(`${testData.user.password}`);
  } else if (credentials == "random") {
    loginPage.getLogin().type(`${randomUser}`);
    loginPage.getPassword().type(`${randomPassword}`);
  } else if (credentials == "none") {
    loginPage.getLogin().clear();
    loginPage.getPassword().clear();
  } else if (credentials == "problem") {
    loginPage.getLogin().type(`${testData.user.problem}`);
    loginPage.getPassword().type(`${testData.user.password}`);
  }
  loginPage.clickSignInButton();
});

Then("I should be redirected into inventory page", () => {
  page.currentUrl().should('eq', `${baseUrl}/inventory.html`);
});

Then(`I should see error message`, (table)=> {
  const error = table.rawTable[1];
  if (error == "locked") {
    loginPage.getError().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  } else if (error == "nonexistent") {
    loginPage.getError().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  } else if (error == "required") {
    loginPage.getError().should('have.text', 'Epic sadface: Username is required');
  }
});

And("I should take a screenshot", () => {
  page.takeScreenshot();
});
