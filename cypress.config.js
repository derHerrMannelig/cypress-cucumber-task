const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://www.saucedemo.com",
    supportFile: false,
    specPattern: "./cypress/e2e/features/*.feature",
    chromeWebSecurity: false
  },
});
