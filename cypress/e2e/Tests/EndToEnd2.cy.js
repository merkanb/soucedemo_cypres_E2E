///<reference types="cypress"/>

import { info } from '../../fixtures/example.json'   // for => .json body or excel file / any external DATA - DDT
import CheckOutPage from "../POM/checkOutPage"
import CartPage from "../POM/cartPage"
import BasePage from "../POM/basePage"
import ProductPage from "../POM/productPage"
import OverviewPage from '../POM/overviewPage'
import LoginPage from "../POM/loginPage"
// typing import Logi...  will automatically show the alternatives - 
// should import class "LoginPage " - file name (loginPage) is not important it may be anything

const loginPage = new LoginPage()     // creating object
const productPage = new ProductPage()
const basePage = new BasePage()
const cartPage = new CartPage()
const checkOutPage = new CheckOutPage()
const overviewPage = new OverviewPage()

describe("E2E Test", () => {
    it("Test case", () => {

        // Log in to the application.
        loginPage.loginTheApp()
        //Click on the "Sauce Labs Backpack" product on the Product Page.
        productPage.clickOnAProduct('Sauce Labs Backpack') // choose element by PARAMETER with .contains method ..
        //Add the "Sauce Labs Backpack" product to the cart.
        productPage.clickAddToCartBtn()
        //Navigate to the Products Page.
        // basePage.clickBurgerMenuAndNavigateBaseMenu() //this method go basePage WITHOUT parameter, we may use ↓↓↓ PARAMETER
        // choose element by parameter with .contains method / with PARAMETER = "All Items" or "Logout" or other 2 menu
        basePage.navigateToBaseMenu('All Items')
        //Directly add the "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" products to the cart.
        productPage.addProductToCartDirectly("Sauce Labs Bike Light")   // with PARAMETER product choosing and adding to CART
        productPage.addProductToCartDirectly("Sauce Labs Bolt T-Shirt")
        //Return to the Cart Page.
        basePage.navigateToShoppingCart()
        //Remove the "Sauce Labs Bolt T-Shirt" product from the Cart.
        cartPage.removeProductFromCart("Sauce Labs Bolt T-Shirt")
        //Verify that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are displayed on the Cart Page.
        basePage.verifySelectedProductInThePage("Sauce Labs Backpack")    // assertion - with predefined methods
        basePage.verifySelectedProductInThePage("Sauce Labs Bike Light")
        //Click on the checkout button.
        cartPage.clickCheckOutBtn()
        //Enter the buyer's/recipient's information and Click on the continue button.
        checkOutPage.typeInfoOfBuyer(info.first_name, info.last_name, info.zip_code)  // from fixtures folder for DDT / external DATA
        //Confirm that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are listed on the Overview Page.
        basePage.verifySelectedProductInThePage("Sauce Labs Backpack")
        basePage.verifySelectedProductInThePage("Sauce Labs Bike Light")
        //Click on the finish button.
        overviewPage.clickFinishBtn()
        //Log out of the application.
        // choose element by parameter with .contains method / with PARAMETER = "All Items" or "Logout" or other 2 menu
        basePage.navigateToBaseMenu("Logout")

    })
})


/* baseUrl:"https://www.saucedemo.com/",
username:"standard_user",
password:"secret_sauce" */

