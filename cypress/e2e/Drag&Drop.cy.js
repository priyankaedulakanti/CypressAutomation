Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('My Test suite', () => {
    it('site of the page', () => {
        
        cy.visit("https://demo.automationtesting.in/Static.html")
        //dragstart is used to start the drag
        cy.get('.col-xs-2 >.col-xs-10 > #angular').trigger('dragstart')
        //dragend is used to end the drop
        cy.get("[id='droparea']").trigger('drop').trigger('dragend')

        cy.get('div >.col-xs-10 > #mongo').trigger('dragstart')
        cy.get("[id='droparea']").trigger('drop').trigger('dragend')
        
        cy.get("[id='node']").trigger('dragstart')
        cy.get("[id='droparea']").trigger('drop').trigger('dragend')
            
        });
        });
    
//     it('site of the page', () => {
//         cy.visit("https://demo.automationtesting.in/Static.html")
//         cy.get('div >.col-xs-10 > #mongo').trigger('dragstart')

//         cy.get("[id='droparea']").trigger('drop').trigger('dragend')
        

//     });

// it('site of the page', () => {
//         cy.visit("https://demo.automationtesting.in/Static.html")
//         cy.get("[id='node']").trigger('dragstart')

//         cy.get("[id='droparea']").trigger('drop').trigger('dragend')
// })





