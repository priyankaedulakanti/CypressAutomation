Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  const { _ } = Cypress
describe('Sorting table', () =>
 {
    it('site of the page', () =>
    {
      cy.visit("https://demoqa.com/webtables")

      cy.get('[role="grid"]').click()
      //.within(() => {

      //Read all the rows & columns
      //cy.get("div[class='rt-table'] > .rt-tbody")

      //.each(($row, index, $rows) => {
        //cy.wrap($row).within( ()=>{
        
          //cy.get(".rt-td").each( ($col, index, $cols) => {
           //cy.log($col,text());
           //cy.log('**First Name**').wait(1000)
           
           //cy.contains('First Name').click()//sorting with First Name
          //  cy.contains('Last Name').click()//sorting with Last Name
          //  cy.contains('Age').click()//Sorting with Age
          //  cy.contains('Email').click()//sorting with Email

          //cy.xpath('//div[contains(text(),'Alden')]/parent::div//div[@class='rt-td'][4]

          //Delete the Row whose First Name is Cierra
           cy.get('div > .rt-td > .action-buttons > #delete-record-1').click()
          
           //Edit the Row
           cy.get('div > .rt-td > .action-buttons > #edit-record-3').click()
          
           //Edit First Name
           cy.get('#firstName').clear().type('Priyanka')
          
           //Edit Last Name
           cy.get('#lastName').clear().type('Reddy')

           //click on submit button
cy.contains('Submit').click()

//click on search field and enter the value
cy.get('[placeholder="Type to search"]').click().type('Priyanka')
//Add the New row in table
/cy.contains('Add').click()

cy.get('[placeholder="First Name"]').type('Mythili')

cy.contains('Submit').click()
      
    })
  })

     //})
    
  //})
