import page from './page.js';

const login = 'input#user-name';
const password = 'input#password';
const signin = 'input#login-button';

class LoginPage {
  gotoBaseUrl() {
    page.openUrl();
  }
  getLogin() {
    return page.getElement(login);
  }
  getPassword () {
    return page.getElement(password);
  }

  clickSignInButton() {
    page.clickElement(signin);
  }
}

module.exports = new LoginPage();
