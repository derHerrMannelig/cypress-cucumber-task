import page from './page.js';

const login = 'input#user-name';
const password = 'input#password';
const signin = 'input#login-button';
const error = 'h3[data-test="error"]';

class LoginPage {
  gotoBaseUrl() {
    page.openUrl();
  }
  getLogin() {
    return page.getElement(login);
  }
  getPassword() {
    return page.getElement(password);
  }
  getError() {
    return page.getElement(error);
  }

  clickSignInButton() {
    page.clickElement(signin);
  }
}

module.exports = new LoginPage();
