import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import page from '../pages/page.js';
import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';
import cartPage from '../pages/cart.page.js';

const baseUrl = Cypress.config().baseUrl;
const testData = JSON.parse(JSON.stringify(require('../../fixtures/data.json')));

let itemTitle, i;

Given("I am authorized and on the inventory page", () => {
  loginPage.gotoBaseUrl();
  loginPage.getLogin().type(`${testData.user.valid}`);
  loginPage.getPassword().type(`${testData.user.password}`);
  loginPage.clickSignInButton();
  page.currentUrl().should('eq', `${baseUrl}/inventory.html`);
});

And("I clicked on the random Add to cart button", () => {
  inventoryPage.getAddToCartButtons().its('length').then((len) => {
    i = Math.floor(Math.random() * len);
    inventoryPage.getItemTitles().eq(i).invoke('text').then((text) => {
      itemTitle = text;
      inventoryPage.getAddToCartButtons().eq(i).click();
    });
  });
});

And("I clicked on the Cart button", () => {
  inventoryPage.clickCartButton();
  page.currentUrl().should('eq', `${baseUrl}/cart.html`);
  cartPage.getItemTitle().should('have.text', `${itemTitle}`);
});

When("I click on the Remove button", () => {
  cartPage.clickRemoveButton();
});

When("I click on the Continue Shopping button", () => {
  cartPage.clickContinueShoppingButton();
});

And("I click on the All Items button in burger menu", () => {
  inventoryPage.clickBurgerButton();
  inventoryPage.clickAllItemsButton();
});

Then("I should be redirected into inventory page", () => {
  page.currentUrl().should('eq', `${baseUrl}/inventory.html`);
});

And("I should see initial cart item's status", (table) => {
  inventoryPage.getItemTitles().eq(i).should('have.text', `${itemTitle}`);
  const status = table.rawTable[1];
  if (status == "in cart") {
    inventoryPage.getAddToCartButtons().eq(i).should('have.text', 'Remove');
  } else if (status == "empty") {
    inventoryPage.getAddToCartButtons().eq(i).should('have.text', 'Add to cart');
  }
});
