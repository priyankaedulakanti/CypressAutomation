Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('My Test suite', () =>{
 
  beforeEach("Before",()=> {
    cy.viewport(1920,1280);
      cy.visit("https://demoqa.com/automation-practice-form")
  })
  it('name ', () =>
    {
         
cy.get('#firstName').type('Priyanka').should('have.value','Priyanka')

cy.get('#lastName').type('Reddy').should('have.value','Reddy')
    //Email id
cy.get('#userEmail').type('priyankareddy2459@gmail.com').should('have.value','priyankareddy2459@gmail.com')
//Radio buttons
cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
//cy.get("[value='Female']").check('Female').click()

//checkbox
cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
//cy.get("[type='checkbox']").check('3')
//dropdown
cy.get("#state").click()
cy.contains("div","Uttar Pradesh").click()

cy.get("#city").click()
cy.contains("div","Agra").click()
//calender
//cy.get('#dateOfBirthInput').clear()
//cy.get('#dateOfBirthInput').type('have .vale','24 May 1999')

})
    })




         
  
