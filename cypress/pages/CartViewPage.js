class CartViewPage {

    locators = {
        chkBtn: () => cy.get('#checkout') 
    }

    checkout() {
        this.locators.chkBtn().click();
        cy.log('Visualizar el carrito');
    }
}

export default CartViewPage;