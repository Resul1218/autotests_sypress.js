describe('Проверка логина и пароля', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#mailForgot').should('be.visible');
        cy.get('#restoreEmailButton').should('be.visible');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Не верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').click();
        cy.get('#pass').type('iLoveqa');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Верный пароль и не верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('german@dol.ru');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').click();
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Верный пароль и не верный логин, без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').click();
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Верный пароль и не верный логин, с присутствием больших букв', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').click();
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').click();
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
 })

 
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome