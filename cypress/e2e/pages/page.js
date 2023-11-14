class Page {
  currentUrl() {
    return cy.url();
  }
  openUrl(url) {
    cy.visit(url == undefined ? '' : url, {failOnStatusCode: false});
  }
  getElement(element) {
    return cy.get(element);
  }
  clickElement(element) {
    cy.get(element).click();
  }
  takeScreenshot() {
    cy.screenshot({overwrite: true});
  }
  printLog(string) {
    cy.log(string);
  }
}

module.exports = new Page();
