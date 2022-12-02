Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("https://demoqa.com/upload-download")
      cy.get("a[download='sampleFile.jpeg']").click()
    })
})