import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import page from '../pages/page.js';
import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';

const baseUrl = Cypress.config().baseUrl;
const testData = JSON.parse(JSON.stringify(require('../../fixtures/data.json')));

Given("I am authorized and on the inventory page", () => {
  loginPage.gotoBaseUrl();
  loginPage.getLogin().type(`${testData.user.valid}`);
  loginPage.getPassword().type(`${testData.user.password}`);
  loginPage.clickSignInButton();
  page.currentUrl().should('eq', `${baseUrl}/inventory.html`);
});

When("I click on the burger menu", () => {
  inventoryPage.clickBurgerButton();
});

When("I click on the footer links", () => {
  inventoryPage.getFooter().scrollIntoView();
  inventoryPage.getTwitterButton().should('exist').and('be.visible');
  inventoryPage.getFacebookButton().should('exist').and('be.visible');
  inventoryPage.getLinkedinButton().should('exist').and('be.visible');
});

And("I click on the menu button",  (table)=> {
  const menu = table.rawTable[1];
  if (menu == "about") {
    inventoryPage.getAboutButton().should('exist').and('be.visible');
  } else if (menu == "logout") {
    inventoryPage.clickLogoutButton();
  }
});

Then("I should see expanded menu items", () => {
  inventoryPage.getMenuButtons().its('length').then((len) => {
    for (let i = 0; i < len; i++) {
      inventoryPage.getMenuButtons().eq(i).should('exist').and('be.visible');
    }
  });
});

Then("I should be redirected into corresponding webpage", (table)=> {
  const webpage = table.rawTable[1];
  if (webpage == "saucelabs") {
    inventoryPage.getAboutButton().should('have.attr', 'href', 'https://saucelabs.com/');
  } else if (webpage == "login") {
    page.currentUrl().should('eq', `${baseUrl}/`);
  }
});

Then("I should open corresponding social networks in new tabs", () => {
  inventoryPage.getTwitterButton().should('have.attr', 'href', 'https://twitter.com/saucelabs').and('have.attr', 'target', '_blank');
  inventoryPage.getFacebookButton().should('have.attr', 'href', 'https://www.facebook.com/saucelabs').and('have.attr', 'target', '_blank');
  inventoryPage.getLinkedinButton().should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/').and('have.attr', 'target', '_blank');
});
