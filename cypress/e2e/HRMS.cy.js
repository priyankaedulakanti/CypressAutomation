Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("http://192.168.11.50:3026/login")
      //cy.get("input[data-placeholder='Enter your email..']").type('priyanka.edulakanti@senecaglobal.com')
      cy.get("input[data-placeholder='Enter your email..']").type('kalyan.penumutchu@senecaglobal.com')
      //click on login button
      cy.contains("Log in").click()
      //click on program manager
      cy.contains('Program Manager').click()
      //Navigate back button
      cy.go('back')
      cy.go('forward')
      cy.reload()
    })
})
