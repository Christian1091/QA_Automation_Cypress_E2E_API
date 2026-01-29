import AuthService from "../../services/AuthService";

describe('API Test - Se realiza pruebas de servicios para singup y login ', () => {

    const authService = new AuthService();

    let authToken = '';
    let dinamicUser = {};

    before(() => {
        cy.fixture('data.json').then((data) => {
            const dinamicSuffix = Math.floor(Math.random() * 1000);
            dinamicUser = {
                username: `user_${dinamicSuffix}`,
                password: data.user.password 
            };
        });
    });

    it('Crear un nuevo usuario en signup', () => {
        authService.singUp(
            dinamicUser.username, 
            dinamicUser.password
        ).then((response) => {
            expect([200, 400]).to.include(response.status);
            if(response.status === 200 ) {
                cy.log('Crea un nuevo usuario satisfactoriamente');    
            } else {
                cy.log('Usuario ya existe');
            }
            
        });
    });

    it('Intentar crear un usuario ya existente', () => {
        authService.singUp(
            dinamicUser.username, 
            dinamicUser.password
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('errorMessage', 'This user already exist.');
            cy.log('Intenta crear un usuario ya existente');
        });
    });

    it('Login Usuario y password correcto', () => {
        authService.login(
            dinamicUser.username, 
            dinamicUser.password
        ).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Usuario y password correcto en login');
        });
    });

    it('Login con Usuario y password incorrecto', () => {
        authService.login(
            dinamicUser.username, 
            'Test'
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('errorMessage', 'Wrong password.')
            cy.log('Usuario y password incorrecto en login');

        });
    });
})