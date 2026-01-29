# QA Automation Automatizacion E2E | API – Cypress

Este repositorio contiene la solución a una prueba técnica para QA Automation, implementada con Cypress, siguiendo el patrón POM (Page Object Model), en el cual se ha integrado lo siguiente:

- Prueba **E2E** para un flujo de compras en la página SauceDemo
- Prueba **API REST** para los servicios de Signup y Login de Demoblaze
- Patrón utilizado **POM** para la separación de capas

## Tecnologías utilizadas

- Visual Studio Code
- Cypress
- JavaScript
- Node.js v22.10.0
- Page Object Model (POM)

## Estructura del proyecto

cypress/
- e2e/
    - api/
        - authApi.cy.js
    - ui/
        - shopping_flow.cy.js
- fixtures/
    - data.json
- pages/
    - CartViewPage.js
    - CheckoutPage.js
    - ConfirmationPage.js
    - LoginPage.js
    - ProductsPage.js
- services/
    - AuthService.js
- support/
    - commands.js
    - e2e.js
cypress.config.js

## Explicación arquitectura

- **e2e/**: 
    - api: Pruebas de integración API REST
    - ui: Pruebas E2E
- **fixtures/**: Datos para pruebas
- **pages/**: Page Object Model
- **services/**: Servicios para pruebas API

## Ejercicio de Automatización E2E: 

Automatizar el flujo completo para de compras para validar el comportamiento del usuario final.

### Flujo automatizado
1. Autenticación:
    - **Usuario:** standard_user
    - **Password:** secret_sauce
2. Agregar dos productos al carrito
3. Visualizar el carrito
4. Completar el formulario de compra
5. Finalizar la compra hasta la confirmación: “THANK YOU FOR YOUR ORDER”

## Ejercicio APIs: 

Validar el comportamiento de los servicios de auntenticación mediante pruebas de integración.

### Flujo automatizado
1. **Crear** un nuevo usuario en signup
2. Intentar crear un **usuario ya existente**
3. Usuario y password **correcto** en login
4. Usuario y password **incorrecto** en login

## Datos de prueba

Los datos utilizados para las pruebas se encuentran centralizados en **cypress/fixtures/data.json**, en el mismo incluye: Datos para el login de SauceDemos, productos y para los usuarios válidos, inválidos, existentes para la API, cabe mencionar que, en este caso se esta utilizando datos dinámicos para las pruebas de la API.

# Instrucciones para la ejecución

**1. Clonar el repositorio**
- git clone https://github.com/Christian1091/QA_Automation_Cypress_E2E_API.git
- cd QA_Automation_Cypress_E2E_API

**2. Instalar dependencias**
- npm install

**3.Ejecutar Cypress modo interactivo**
- npx cypress open
    1. Seleccionar E2E Testing
    2. Elegir el navegador y dar click en **Start E2E Testing in ...**
    3. Ejecutar:
        - api: **authApi.cy.js**
        - ui: **shopping_flow.cy.js**

### Ejecutar Cypress en modo headless

**Ejecutar todas las pruebas**
- npx cypress run

**Ejecutar solo pruebas E2E**
- npx cypress run --spec cypress/e2e/ui/shopping.cy.js

**Ejecutar solo pruebas API**
- npx cypress run --spec cypress/e2e/api/authApi.cy.js

## Conclusión

Con esta prueba para QA Automation se demuestra un enfoque en la calidad, mantenibilidad y escalabilidad, así también como el uso de buenas prácticas de automatiación y la facilidad de poder integrar lo que es pruebas de testing UI y API en un mismo repositorio.









