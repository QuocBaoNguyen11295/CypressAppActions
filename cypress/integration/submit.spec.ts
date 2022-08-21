describe('Submit feedback',()=>{
    before('Open the application',()=>{
        cy.visitFeedbackPage()
    })

    it('Should fill out information and submit the feedback',()=>{
        cy.fixture('feedbackData').then(({name,email,title,message})=>{
        cy.submitFeedback(name,email,title,message)
        })
    })

    it('Should show correct message after submitting',()=>{
       cy.fixture('feedbackData').then(({name})=>{
        cy.checkCorrectMessage(name)
       })
    })

    after('Clear cookies and local storage',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})