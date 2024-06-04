///<reference types="cypress"/>

// const { Context } = require("mocha")  

// context("Specific Test Group", ()=>{      // this "context" syntax also can be used instead of describe .. 

// })  

describe("E2E Test", () => {
    it("Test case", () => {
        
        // cy.visit("https://www.saucedemo.com/")
        cy.visit(Cypress.env("baseUrl"))       // from cypress.config.js as a Configuration properties

        // cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="username"]').type(Cypress.env("username"))   // from cypress.config.js as a properties

        // cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="password"]').type(Cypress.env("password"))

        cy.get('[data-test="login-button"]').click()
    })
})


/* baseUrl:"https://www.saucedemo.com/",
username:"standard_user",
password:"secret_sauce" */ 