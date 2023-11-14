import page from './page.js';

const itemTitle = 'div.inventory_item_name';
const continueShopping = 'button#continue-shopping';
const remove = 'button.cart_button';
const checkout = 'button#checkout';
const firstName = 'input#first-name';
const lastName = 'input#last-name';
const postalCode = 'input#postal-code';
const continueBtn = 'input#continue';
const finish = 'button#finish';

class cartPage {
  getItemTitle() {
    return page.getElement(itemTitle);
  }
  getFirstName() {
    return page.getElement(firstName);
  }
  getLastName() {
    return page.getElement(lastName);
  }
  getPostalCode() {
    return page.getElement(postalCode);
  }

  clickContinueShoppingButton() {
    page.clickElement(continueShopping);
  }
  clickRemoveButton() {
    page.clickElement(remove);
  }
  clickCheckoutButton() {
    page.clickElement(checkout);
  }
  clickContinueButton() {
    page.clickElement(continueBtn);
  }
  clickFinishButton() {
    page.clickElement(finish);
  }
}

module.exports = new cartPage();
