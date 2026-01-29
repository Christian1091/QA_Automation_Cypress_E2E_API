class ProductsPage {

    locators = {
        iconCart: () => cy.get('#add-to-cart'),
        selectProducts: () => cy.get('[data-test="back-to-products"]'),
        linkCart: () => cy.get('.shopping_cart_link')  
    }

    produSuccess() {
        cy.url().should('include', '/inventory.html');
    }

    addProduct(nameProduct) {
        cy.contains(nameProduct).should('be.visible').click();
        this.locators.iconCart().should('be.visible').click();
        this.locators.selectProducts().should('be.visible').click();
    }

    addTwoProducts(products) {
        products.forEach(product => this.addProduct(product));
        cy.log(`Agregar dos productos al carrito: ${ products }`);
    }

    cartView() {
        this.locators.linkCart().click();
    }

}

export default ProductsPage;