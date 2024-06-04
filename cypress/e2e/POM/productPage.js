export default class ProductPage {


    clickOnAProduct(product) {
        // cy.get('.inventory_item')
        // .find('.inventory_item_description')      

        // or directly we can navigate to all product elements and later search with .contains method ..
        cy.get('.inventory_item_description')
            .contains(product)
            .click()
    }

    clickAddToCartBtn() {
        // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    
        cy.get('[data-test="add-to-cart"]')     // this element when we navigate to the this product page
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