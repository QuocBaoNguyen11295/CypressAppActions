describe('Demo example',()=>{
    it('Should open the webpage',()=>{
        //cy.visit('https://www.google.com/')
        cy.visitHomepage();
        cy.visitFeedbackPage()
        cy.visitLoginPage()
    })
})