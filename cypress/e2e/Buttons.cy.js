/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    return false;
  
  });

  describe('Double click button', () => {
    it('Launch sites',()=>{
  
      cy.visit('https://demoqa.com/buttons')
  
      cy.title().should('eq','ToolsQA')
  
    })
  
    it('Double click button',()=>{
  
      cy.get('#doubleClickBtn').dblclick();
  
    })

  
    it('Right click button',()=>{
  
      cy.get('#rightClickBtn').rightclick();
  
    })
    it(' click button',()=>{
  
      cy.xpath('//button[starts-with(text(),"Click Me")]').click()
  
    })
  
  })