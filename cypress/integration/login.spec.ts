describe('Login example',()=>{
    before('Open login page',()=>{
        cy.visitLoginPage()
    })
    it('Should open the webpage',()=>{
        cy.login('username','password')
    })

    it('should be existed account summary',()=>{
        cy.get('#account_summary_tab').should('be.visible')
    })

    after('Clear all cookies, local storage',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})