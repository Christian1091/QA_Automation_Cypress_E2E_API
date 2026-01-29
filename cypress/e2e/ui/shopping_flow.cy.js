import CartViewPage from "../../pages/CartViewPage";
import CheckoutPage from "../../pages/CheckoutPage";
import ConfirmationPage from "../../pages/ConfirmationPage";
import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";


describe('Realizar una prueba funcional automatizada (Prueba E2E) de un flujo de compra', () => {

    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartViewPage = new CartViewPage();
    const checkoutPage = new CheckoutPage();
    const confirmationPage = new ConfirmationPage();

    it('Prueba funcional automatizada (Prueba E2E)', () => {
        cy.fixture('data').then((data) => {
            
            const user = data.dataPerson;
            const product = data.dataProducts;

            //Ingresamos a saucedemo
            loginPage.visit();

            //Autenticarse con el usuario
            loginPage.login(user.username, user.password);
            loginPage.loginSuccess();

            //Agregar dos productos al carrito
            productsPage.addTwoProducts([product.oneProduct, product.twoProduct]);
            productsPage.cartView();

            //Visualizar el carrito
            cartViewPage.checkout();

            //Completar el formulario de compra
            checkoutPage.informationForm(user.firstName, user.lastName, user.postalCode); // puedes reemplazar con fixture también
            checkoutPage.finish();

            //Finalizar la compra hasta la confirmación
            confirmationPage.verifyMessageSuccess();
        });
    });
});