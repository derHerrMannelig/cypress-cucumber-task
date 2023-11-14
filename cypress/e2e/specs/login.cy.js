import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import page from '../pages/page.js';
import loginPage from '../pages/login.page.js';

const baseUrl = Cypress.config().baseUrl;
const { faker } = require('@faker-js/faker');
const randomUser = faker.internet.displayName();
const randomPassword = faker.internet.password();
const testData = JSON.parse(JSON.stringify(require('../../fixtures/data.json')));

let timeStart, timeFinish;

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
  } else if (credentials == "glitch") {
    loginPage.getLogin().type(`${testData.user.glitch}`);
    loginPage.getPassword().type(`${testData.user.password}`);
    timeStart = Date.now();
  } else if (credentials == "only login") {
    loginPage.getLogin().type(`${testData.user.valid}`);
  }
  loginPage.clickSignInButton();
});

When("I paste inventory's url into address bar and hit enter on keyboard", () => {
  loginPage.gotoInventoryUrl();
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
  } else if (error == "forbidden") {
    loginPage.getError().should('have.text', "Epic sadface: You can only access '/inventory.html' when you are logged in.");
  } else if (error == "password") {
    loginPage.getError().should('have.text', 'Epic sadface: Password is required');
  }
});

And("I should take a screenshot", () => {
  page.takeScreenshot();
});

And("I should record time taken to login", () => {
  timeFinish = Date.now();
  page.printLog(`Time taken to login: ${((timeFinish - timeStart)/1000).toFixed(2)} seconds`);
});
