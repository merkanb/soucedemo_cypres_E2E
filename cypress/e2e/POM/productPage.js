export default class ProductPage {


    clickOnAProduct(product) {
        cy.get('.inventory_item_description')
            .contains(product)
            .click()
    }

    clickAddToCartBtn() {    
        cy.get('[data-test="add-to-cart"]')    
            .click()
    }
        
    addProductToCartDirectly(product){
        cy.get('.inventory_item')
        .find('.inventory_item_description')
        .contains(product)
        .parent().next()
        .contains("Add to cart")
        .click()
    }



}