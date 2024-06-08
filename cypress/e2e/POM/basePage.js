export default class BasePage{

clickBurgerMenuAndNavigateBaseMenu (){       // icon that up left side (contains sub options) MANUEL - Hardcode
    // cy.get('[data-test="inventory-sidebar-link"]').click()   // All items  menu not able to directly navigate
    cy.get('#react-burger-menu-btn').click()
    .get('[data-test="inventory-sidebar-link"]').click()     // "All items" element  // By attribute name and value 
    // .get('[id="logout_sidebar_link"]').click()     // "All items" element - // By attribute name and value  
}

clickBurgerMenu (){       
    cy.get('#react-burger-menu-btn').click()
}
 
navigateToBaseMenu(menuName){    
    this.clickBurgerMenu()        
    cy.get('.bm-item.menu-item',{timeout:20000})
    .contains(menuName)
    .click()
}

navigateToShoppingCart(){
    cy.get('.shopping_cart_link').click()
}

verifySelectedProductInThePage(product){
    cy.contains(product).should("be.visible")      
}

}

