const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'b4zuym',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://www.saucedemo.com",
    specPattern: "./cypress/e2e/features/*.feature",
    chromeWebSecurity: false
  },
});
