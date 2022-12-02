Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("https://www.techlistic.com/p/demo-selenium-practice.html")

      //check the value presence anywhere in the table
      cy.get("table[id='customers']").contains('tr','Google').should('be.visible')

      //check the value presence in the specific row & column
      cy.get('#customers > tbody > tr:nth-child(4) > td:nth-child(3)').contains('Austria').should('be.visible')


    })
})
 