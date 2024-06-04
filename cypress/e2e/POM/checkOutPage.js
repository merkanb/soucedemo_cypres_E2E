export default class CheckOutPage{
    typeInfoOfBuyer(firstName,lastName,zipCode){
        cy.get('[data-test="firstName"]').type(firstName)
        .get('[data-test="lastName"]').type(lastName)
        .get('[data-test="postalCode"]').type(zipCode)
        .get('[data-test="continue"]').click()
    }
}               

