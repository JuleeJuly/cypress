const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://spring-framework-petclinic-qctjpkmzuq-od.a.run.app/"
  },
});
