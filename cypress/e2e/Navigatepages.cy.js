Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("http://192.168.11.50:3026/login")
    })
})