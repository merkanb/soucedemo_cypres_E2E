export default class LoginPage{
    loginTheApp(){
        cy.visit(Cypress.env('baseUrl'))
        .get('[data-test="username"]')
        .type(Cypress.env('username'))
        .get('[data-test="password"]')
        .type(Cypress.env('password'))
        .get('[data-test="login-button"]')
        .click()
    }
}   

