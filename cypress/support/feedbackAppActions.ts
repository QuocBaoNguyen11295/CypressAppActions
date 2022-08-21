declare namespace Cypress{
    interface Chainable{
        /**
         * @param name - name of the person feedback
         * @param email - email of the person feedback
         * @param title - title of the person feedback
         * @param message - message of the person feedback
         */
    submitFeedback(name: String, email: String, title: String, message:any): Chainable<Element>
    checkCorrectMessage(name: String):Chainable<Element>
    }
}

Cypress.Commands.add('submitFeedback',(name,email,title,message)=>{
    cy.get('#name').clear().type(name)
    cy.get('#email').clear().type(email)
    cy.get('#subject').clear().type(title)
    cy.get('#comment').clear().type(message)
    cy.get('input[value="Send Message"]').click()
})

Cypress.Commands.add('checkCorrectMessage',(name)=>{
    cy.contains('Thank you for your comments, '+name+'. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
})