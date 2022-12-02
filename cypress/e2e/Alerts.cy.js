//Cypress can work with alerts by default. The pop-up can be an alert or confirmation popup.
//Cypress is designed in such a way that it shall always click on the OK button on the pop-up. 
//Moreover, Cypress has the ability to fire the browser events.
//An alert is triggered by window:alert event. This is by default handled by Cypress and the OK button on the alert gets clicked, without being visible during execution.

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My Test suite', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("https://demo.automationtesting.in/Alerts.html")
      
    })
    
    
    //alert message
    it('alert message', () =>
    {
      cy.get("#OKTab").click()
      cy.get("[onclick='alertbox()']").click()
      cy.on('window:alert', (alertmessage)=>{
      expect(alertmessage).to.contains('I am an alert box!');
      })
    })
        
    
    //confirmation alert
        it('confirmation message', () =>
        {
        cy.get("#CancelTab").click()
        cy.get("[onclick='alertbox()']").click()
        cy.on('window:confirm', (confirmationmessage)=>{ //window:confirm is a catalog event in cypress
        expect(confirmationmessage).to.contains('Press a Button !');
        })
      })
        //return false;// to cancel the confirmation
        
        
    //alert with Textbox
        //cy.get("#Textbox").click()
        it('alert with Textbox', () =>
        {
        cy.contains('a','Alert with Textbox ').click()
            //using window method
        cy.window().then(($win) => 
        {
      //stub command is used to return the value
          cy.stub($win, 'prompt').returns('Hello')
          cy.get("[onclick='promptbox()']").click()
      })
      
        })
      
      })
  
  
