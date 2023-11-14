import page from './page.js';

const burger = 'button#react-burger-menu-btn';
const allItems = 'a#inventory_sidebar_link';
const logout = 'a#logout_sidebar_link';
const about = 'a#about_sidebar_link';
const menuButtons = 'a.bm-item';
const footer = 'footer.footer';
const twitter = 'li.social_twitter a';
const facebook = 'li.social_facebook a';
const linkedin = 'li.social_linkedin a';
const addToCart = 'button.btn_inventory';
const itemTitles = 'div.inventory_item_name';
const cart = 'a.shopping_cart_link';

class inventoryPage {
  getAboutButton() {
    return page.getElement(about);
  }
  getMenuButtons() {
    return page.getElement(menuButtons);
  }
  getFooter() {
    return page.getElement(footer);
  }
  getTwitterButton() {
    return page.getElement(twitter);
  }
  getFacebookButton() {
    return page.getElement(facebook);
  }
  getLinkedinButton() {
    return page.getElement(linkedin);
  }
  getAddToCartButtons() {
    return page.getElement(addToCart);
  }
  getItemTitles() {
    return page.getElement(itemTitles);
  }

  clickBurgerButton() {
    page.clickElement(burger);
  }
  clickLogoutButton() {
    page.clickElement(logout);
  }
  clickAboutButton() {
    page.clickElement(about);
  }
  clickCartButton() {
    page.clickElement(cart);
  }
  clickAllItemsButton() {
    page.clickElement(allItems);
  }
}

module.exports = new inventoryPage();
