///<reference types="cypress"/>

import { info } from '../../fixtures/example.json'   // DDT
import CheckOutPage from "../POM/checkOutPage"
import CartPage from "../POM/cartPage"
import BasePage from "../POM/basePage"
import ProductPage from "../POM/productPage"
import OverviewPage from '../POM/overviewPage'
import LoginPage from "../POM/loginPage"


const loginPage = new LoginPage()     
const productPage = new ProductPage()
const basePage = new BasePage()
const cartPage = new CartPage()
const checkOutPage = new CheckOutPage()
const overviewPage = new OverviewPage()

describe("E2E Test", () => {
    it("Test case", () => {

        // Log in to the application. Use cypress.config.js file's reusable & maintainable environmental key and values with Page Object Model. 
        loginPage.loginTheApp()

        // Click on the "Sauce Labs Backpack" product on the Products Page in a reusable method with parameter.
        productPage.clickOnAProduct('Sauce Labs Backpack') 
        
        //Add the "Sauce Labs Backpack" product to the Cart.
        productPage.clickAddToCartBtn()

        //Navigate to the Products Page, choosing "All Item" menu on the react-burger-menu as a parameter.
        basePage.navigateToBaseMenu('All Items')

        //Directly add the "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" products to the Cart choosing by PARAMETER, assert with .contains method.
        productPage.addProductToCartDirectly("Sauce Labs Bike Light")   
        productPage.addProductToCartDirectly("Sauce Labs Bolt T-Shirt")

        //Return to the Cart Page.
        basePage.navigateToShoppingCart()

        //Remove the "Sauce Labs Bolt T-Shirt" product from the Cart.
        cartPage.removeProductFromCart("Sauce Labs Bolt T-Shirt")

        //Verify Assertion - Verify that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are displayed on the Cart Page.
        basePage.verifySelectedProductInThePage("Sauce Labs Backpack")    

        //Click on the checkout button.
        cartPage.clickCheckOutBtn()

        //Enter the buyer's / recipient's information and Click on the continue button. Apply DDT/Date Driven Test approach with fixtures folder or any external data.
        checkOutPage.typeInfoOfBuyer(info.first_name, info.last_name, info.zip_code)  

        //Confirmation - Verify that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are listed on the Overview Page.
        basePage.verifySelectedProductInThePage("Sauce Labs Backpack")
        basePage.verifySelectedProductInThePage("Sauce Labs Bike Light")

        //Click on the finish button.
        overviewPage.clickFinishBtn()

        //Log out of the application again in a reusable way with .contains method.
        basePage.navigateToBaseMenu("Logout")

    })
})




/* baseUrl:"https://www.saucedemo.com/",
username:"standard_user",
password:"secret_sauce" */

