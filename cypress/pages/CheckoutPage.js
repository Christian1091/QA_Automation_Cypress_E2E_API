class CheckoutPage {

    locators = {
        txtFirstName: () => cy.get('#first-name'),
        txtLastName: () => cy.get('#last-name'),
        txtpostalCode: () => cy.get('#postal-code'),
        btnContinue: () => cy.get('#continue'),
        btnFinish: () => cy.get('#finish'),    
    }

    informationForm(firstName, lastName, postalCode) {

        this.locators.txtFirstName().type(firstName);
        this.locators.txtLastName().type(lastName);
        this.locators.txtpostalCode().type(postalCode);
        this.locators.btnContinue().click();

        cy.log(`Completar el formulario de compra => ${firstName, lastName, postalCode}`);
    }

    finish() {
        this.locators.btnFinish().click();
    }
}

export default CheckoutPage;