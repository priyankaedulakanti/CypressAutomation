Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("https://demo.automationtesting.in/Windows.html")
        
    })
    it('New Tabbed windows', () =>
    {
      cy.contains('button','click').eq(0).parent('a').invoke('attr','href').then(val=>{
        cy.origin("https://www.selenium.dev/",()=>{
          cy.visit("https://www.selenium.dev/")
      })
    })
    cy.pause()
       // cy.get('#Tabbed').click()
       //cy.get("a[href*='#Tabbed']").click()
//cy.contains('open New Tabbed window').invoke('removeAttr','target').click()
       
    })
  })
  
