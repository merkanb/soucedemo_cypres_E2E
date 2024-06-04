export default class BasePage{

clickBurgerMenuAndNavigateBaseMenu (){       // icon that up left side (contains sub options)
    // cy.get('[data-test="inventory-sidebar-link"]').click()   // All items  menu not able to directly navigate
    cy.get('#react-burger-menu-btn').click()
    .get('[data-test="inventory-sidebar-link"]').click()     // "All items" element  // By attribute name and value 
    // .get('[id="logout_sidebar_link"]').click()     // "All items" element - // By attribute name and value  
    
}

clickBurgerMenu (){       // icon that up left side (contains sub options)
    cy.get('#react-burger-menu-btn').click()
}
 
navigateToBaseMenu(menuName){    // WITH PARAMETER ...
    this.clickBurgerMenu()        // icon that up left side (contains sub options)
    cy.get('.bm-item.menu-item',{timeout:20000})// we can navigate to all elements and later search with .contains method ..
    .contains(menuName)
    .click()
}
navigateToShoppingCart(){
    cy.get('.shopping_cart_link').click()
}

verifySelectedProductInThePage(product){
    cy.contains(product).should("be.visible")         // assertion - with predefined methods - .should("be.visible")
}

}

