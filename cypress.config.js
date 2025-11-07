const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3oyhuw",
  e2e: {
    baseUrl: "https://core.hgtx.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
