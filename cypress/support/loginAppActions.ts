declare namespace Cypress{
    interface Chainable{
        /**
         * @param username - takes id or username
         * @param password - take password
         */
    login(username: String,password: String): Chainable<Element>
    }
}

Cypress.Commands.add('login',(username,password)=>{
    cy.get('#user_login').clear().type(username)
    cy.get('#user_password').clear().type(password)
    cy.get('#user_remember_me').check()
    cy.get('input[value="Sign in"]').click()
})