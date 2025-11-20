require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3oyhuw",
  e2e: {
    env: {
      API_USER: process.env.API_USER,
      API_PASS: process.env.API_PASS,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
