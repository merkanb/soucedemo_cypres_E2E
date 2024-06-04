export default class OverviewPage{
    clickFinishBtn(){
        cy.get('[data-test="finish"]').click()
    }
}