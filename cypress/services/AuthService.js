class AuthService {

    singUp(username, password) {
        return cy.request({
            method: "POST",
            url: `${Cypress.env('apiUrl')}/signup`,
            body: { username, password },
            statusCode: false
        });
    }

    login(username, password) {
        return cy.request({
            method: "POST",
            url: `${Cypress.env('apiUrl')}/login`,
            body: { username, password },
            statusCode: false
        });
    }

}

export default AuthService;