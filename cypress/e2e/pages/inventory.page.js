import page from './page.js';

const burger = 'button#react-burger-menu-btn';
const logout = 'a#logout_sidebar_link';
const about = 'a#about_sidebar_link';
const menuButtons = 'a.bm-item';
const footer = 'footer.footer';
const twitter = 'li.social_twitter a';
const facebook = 'li.social_facebook a';
const linkedin = 'li.social_linkedin a';

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
