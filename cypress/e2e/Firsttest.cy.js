describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("https://demoqa.com/automation-practice-form")
    })
    it('title of the page', () =>
    {
      cy.title().should('eq','ToolsQA')
    })
      
        it('text fields', () =>
    {
      
cy.get('#firstName').type('Priyanka').should('have.value','Priyanka')

cy.get('#lastName').type('Reddy').should('have.value','Reddy')
    })

      
it('Email id',()=>
{

cy.get('#userEmail').type('priyankareddy2459@gmail.com').should('have.value','priyankareddy2459@gmail.com')
})
})
