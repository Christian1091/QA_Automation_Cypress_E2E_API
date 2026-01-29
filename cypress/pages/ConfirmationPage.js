class ConfirmationPage {

    locators = {
        msgConfirmation: () => cy.contains('Thank you for your order!')
    }

    verifyMessageSuccess() {
        this.locators.msgConfirmation().should('be.visible')
        cy.log('Se visualiza la confimacion con exito');
    }
}

export default ConfirmationPage;