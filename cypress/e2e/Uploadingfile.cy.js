Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
        //const p='Car.png'
      //cy.visit("https://demo.automationtesting.in/FileUpload.html")
      //cy.get('[type="file"]').click()
      //cy.visit('https://demoqa.com/automation-practice-form')
      //cy.get('#uploadPicture').click()
      //cy.get("[for='uploadPicture']").attachFile('Car.png').click()
      cy.visit("https://fineuploader.com/demos.html")
      
//cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-button-selector > input').click({force: true})
cy.get("[contains('div', 'Upload files')]")

.attachFile("Car.png")


      
      
    })
})