const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  failOnStatusCode: false,
  video: true,
  videoCompression: true,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 4000,
  viewportHeight: 800,
  viewportWidth: 1080,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // we ACTIVATE next SpecPattern line to RUN defined test, we define relative path to value, specPattern:RELATIVE PATH 
    // (slashes have to be forward slash '/' for cypress) Example -->   specPattern:"cypress/e2e/Tests" 
    // so we can able to see only defined path tests on cypress Specs dashboard / no definition = we will see ALL in e2e

    // specPattern:"cypress/e2e/Tests/EndToEnd2.cy.js"         // defined particular test
    specPattern: "cypress/e2e/Tests"           // defined folder  may be SMOKE/REGRESSION ETC.

    // WE CAN also configure on package.json file with "runE2E" AND "runAllTests" value configurations...
    // also it can be reached from terminal

  },


  env: {   // this is a .json body format/ we can define some environmental variable url/username etc
    baseUrl: "https://www.saucedemo.com/",
    username: "standard_user",
    password: "secret_sauce"
  },

});
