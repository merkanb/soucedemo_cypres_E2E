### www.saucedemo.com Web Application Cypress E2E Test Project

Codes and Tests Prepared by:
# M. Erkan BAS

# QA Test Automation Engineer

# merkanb@gmail.com   
# https://github.com/merkanb/soucedemo_cypres_E2E
This file provides a basic outline to help you get started with Cypress for E2E / End to End testing.

###  baseUrl:"https://www.saucedemo.com/",
username:"standard_user",
password:"secret_sauce" 

### About Cypress Project
Customization cypress behavior is available through the cypress.config.js file.
{
  "video": true,
  "viewportWidth": 1280,
  "viewportHeight": 720
}

Tests are written in JavaScript. Aiming testing www.saucedemo.com Web Application with Cypress with an approach of End to End Testing. 
Used Page Object Model pages, predefined locators and methods in order to achieve high usability and also maintainability. 
In case of need it is available to use external data to Test data files via fixtures package example.json file with .json format. 
Custom arrangements provide video files and some screenshots in failure options. 

  This E2E Test have following steps: 

- Log in to the application. Use cypress.config.js file's reusable & maintainable environmental key and values with Page Object Model. 
- Click on the "Sauce Labs Backpack" product on the Products Page in a reusable method with parameter.
- Add the "Sauce Labs Backpack" product to the Cart.
- Navigate to the Products Page, choosing "All Item" menu on the react-burger-menu as a parameter.
- Directly add the "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" products to the Cart choosing by PARAMETER, assert with .contains method. 
- Return to the Cart Page.
- Remove the "Sauce Labs Bolt T-Shirt" product from the Cart.
- Verify Assertion - Verify that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are displayed on the Cart Page.
- Click on the checkout button.
- Enter the buyer's / recipient's information and Click on the continue button. Apply DDT/Data Driven Test approach with fixtures folder or any external data.
- Confirmation - Verify that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are listed on the Overview Page.
- Click on the finish button.
- Log out of the application again in a reusable way with .contains method.


The folder structure for this Cypress project is as following:

   cypress
   │
   ├── e2e      
   │    └── POM - Page Object Model - page.js files
   │    └── Tests
   │
   ├── fixtures
   │    └── example.json - Data Driven Test
   │
   ├── screenshots
   │    
   ├── support
   │    └── commands.js - custom commands / utilities
   │        
   └── videos


## Installation & Running the Project

To install Cypress, you need to have Node.js installed on your machine. Then, you can install Cypress via npm, use: npm install cypress 
To open the Cypress Test Runner in headed mode, use:  npx cypress open
To run the tests in headless mode, use:   npx cypress run
To run specipic test, need to customize config.js specPattern value. 



I welcome contributions! Feel free to modify this project template according to the specific needs of your project. Thank you.

2024 May &reg;

### End
