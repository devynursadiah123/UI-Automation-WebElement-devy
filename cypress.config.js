const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // implement node event listeners here
    baseUrl : 'https://kasirdemo.belajarqa.com',
    specPattern : "cypress/e2e",
    supportFile : false,  
    chromeWebSecurity : false,
  },
})