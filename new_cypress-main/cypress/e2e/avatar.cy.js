describe('Покупка нового аватара для своего тренера', function () {                                // название набора тестов
        it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
             cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
             cy.wait(4000);
             cy.get('.auth__title').should('be.visible');
             cy.get('.auth__title').contains('Битва покемонов');
             cy.get('.auth__social-icon').should('be.visible');
             cy.get('p.auth__text').contains('Вход через соцсеть');
             cy.get('p.auth__text').should('be.visible');
             cy.get('.auth__form > .auth__text').should('be.visible');
             cy.get('.auth__form > .auth__text').contains('Зарегистрироваться');
             cy.get('.auth__restore').should('be.visible');
             cy.get('.auth__restore').contains('Восстановить');
             cy.get('.footer__logo > div').should('be.visible');
             cy.get('.footer__logo > div').contains('Версия 3.7.0');
             cy.get('.status_url > img').should('be.visible');
             cy.get('.footer__studio').should('be.visible');
             cy.get('.footer__studio').should('be.visible');
             cy.get('input[type="email"]').should('be.visible');
             cy.get('input[type="email"]').type('logen');                   // вводим логин
             cy.get('input[type="password"]').should('be.visible');
             cy.get('input[type="password"]').type('pass');               // вводим пароль
             cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
             cy.wait(2000);
             cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
             cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
             cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
             cy.wait(2000);
             cy.get('.credit').type('4620869113632996');                     // вводим номер карты
             cy.wait(2000);
             cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
             cy.wait(2000);
             cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
             cy.wait(2000);
             cy.get('.k_input_name').type('Resul');                           // вводим имя владельца действия карты
             cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
             cy.wait(2000);
             cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
             cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
             cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
         });
     });