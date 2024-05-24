const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://displate.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
