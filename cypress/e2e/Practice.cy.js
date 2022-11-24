Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("https://demo.automationtesting.in/Register.html")//for URL
      
      cy.get("[ng-model='FirstName']").type('Priyanka').should('have.value','Priyanka')
      cy.get("[ng-model='LastName']").type('Reddy').should('have.value','Reddy')
      //cy.get("[ng-model='Adress']").type('Hyderabad').should('have.value','Hyderabad')
      //Radio buttons
      cy.get("[type='radio']").check('FeMale')
      //check box
      cy.get("[type='checkbox']").check('Movies')
      //dropdown
      cy.get('#Skills').select('Android').should('have.value', 'Android')
      //cy.get('#Skills').type('C').click()
    })
})
