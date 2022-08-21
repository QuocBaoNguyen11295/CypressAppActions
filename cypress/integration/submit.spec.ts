describe('Submit feedback',()=>{
    before('Open the application',()=>{
        cy.visitFeedbackPage()
    })

    it('Should fill out information and submit the feedback',()=>{
        cy.submitFeedback('Bao Quoc','baonguyen@gmail.com','Test Test','Test')
    })

    it('Should show correct message after submitting',()=>{
       cy.checkCorrectMessage('Bao Quoc') 
    })

    after('Clear cookies and local storage',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})