export default class CartPage{
    removeProductFromCart(product){
        cy.get('.cart_item_label')
        .contains(product)
        .parent()
        .contains('Remove').click()
    }
   
    clickCheckOutBtn(){
        cy.get('[data-test="checkout"]').click()
    }

}       