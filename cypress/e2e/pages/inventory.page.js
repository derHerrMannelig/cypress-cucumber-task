import page from './page.js';

const burger = 'button#react-burger-menu-btn';
const logout = 'a#logout_sidebar_link';
const about = 'a#about_sidebar_link';
const menuButtons = 'a.bm-item';

class inventoryPage {
  getAboutButton() {
    return page.getElement(about);
  }
  getMenuButtons() {
    return page.getElement(menuButtons);
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
}

module.exports = new inventoryPage();
