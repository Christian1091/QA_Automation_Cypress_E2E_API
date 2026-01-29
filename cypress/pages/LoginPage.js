class LoginPage {

    locators = {
        txtUsername: () => cy.get('#user-name'),
        txtPassword: () => cy.get('#password'),
        btnLogin: () => cy.get('#login-button'), 
    }

    visit() {
        cy.visit('/');
    }

    login(username, password) {
        this.locators.txtUsername().type(username);
        this.locators.txtPassword().type(password);
        this.locators.btnLogin().click();

        cy.log(`Autenticarse con el usuario: standard_user y password: secret_sauce => ${username,password}`);
    }

    loginSuccess() {
        cy.url().should('include', '/inventory.html');
    }

}

export default LoginPage;