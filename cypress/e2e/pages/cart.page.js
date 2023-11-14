import page from './page.js';

const itemTitle = 'div.inventory_item_name';
const continueShopping = 'button#continue-shopping';
const remove = 'button.cart_button';

class cartPage {
  getItemTitle() {
    return page.getElement(itemTitle);
  }

  clickContinueShoppingButton() {
    page.clickElement(continueShopping);
  }
  clickRemoveButton() {
    page.clickElement(remove);
  }
}

module.exports = new cartPage();
