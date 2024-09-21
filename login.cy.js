describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
       cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
       cy.get('#loginButton').click(); // Нажал войти
       cy.get('#messageHeader').should('be.visible'); // Текст
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
    })

    it('Логика восстановления пароля', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль"
       cy.get('#mailForgot').type('Iaroslav@dolnikov.ru'); // Ввести любой имейл
       cy.get('#restoreEmailButton').click(); // Нажать 
       cy.get('#messageHeader').should('be.visible'); // Проверяю, что после перехода вижу текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
   })

   it('Верный логин и неверный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
      cy.get('#pass').type('5554443'); // Ввели неверный пароль
      cy.get('#loginButton').click(); // Нажал войти
      cy.get('#messageHeader').should('be.visible'); // Текст
      cy.get('#messageHeader').contains('Такого логина или пароля нет') // Проверяю, что после неверной авторизации вижу текст
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
   })

   it('Неверный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('germand@dolnikov.ru'); // Ввели неверный логин
      cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      cy.get('#messageHeader').should('be.visible'); // Текст
      cy.get('#messageHeader').contains('Такого логина или пароля нет') // Проверяю, что после неверной авторизации вижу текст
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
   })

   it('Негативный кейс валидации', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('germanddolnikov.ru'); // Ввели  логин без @
      cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      cy.get('#messageHeader').should('be.visible'); // Текст
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // Проверяю, что после неверной авторизации вижу текст
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
   })

   it('Строчные буквы в логине', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели  логин со строчными буквами
      cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
      cy.get('#loginButton').click(); // Нажал войти
      cy.get('#messageHeader').should('be.visible'); // Текст
      cy.get('#messageHeader').contains('Авторизация прошла успешно') // Проверяю, что после неверной авторизации вижу текст
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю 
   })
}) 