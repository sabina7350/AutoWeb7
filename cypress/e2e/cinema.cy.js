import { email, password } from './user';



describe('Main Page', () => {

    it("Should show correct number of days", () => {
        cy.visit("http://qamid.tmweb.ru");
        cy.get('a.page-nav__day').should('have.length', 7);
    });

    it('Should display main page correctly', () => {
        cy.visit('http://qamid.tmweb.ru');
        cy.get('.page-nav');
        cy.get('.page-header__title')
        cy.get('main > :nth-child(1)')
        cy.get('main > :nth-child(2)')
        cy.get('main > :nth-child(3)')
        cy.get(':nth-child(2) > .movie__info > .movie__description')
        cy.get('main > :nth-child(2) > :nth-child(2)')
        cy.get('main > :nth-child(2) > :nth-child(3)')
        cy.get(':nth-child(2) > .movie__info > .movie__description')
        cy.get(':nth-child(2) > .movie-seances__hall')
        cy.get(':nth-child(3) > .movie__info > .movie__description')
        cy.get(':nth-child(3) > .movie-seances__hall')

    });
});


describe('Log in', () => {
   
    it('Should log in with real email and password',  () => {
        cy.visit('http://qamid.tmweb.ru/admin');
        cy.get('[for="email"] > .login__input').type(email);
        cy.get('[for="pwd"] > .login__input').type(password);
        cy.get('.login__button').click();
        cy.contains('Администраторррская').should('be.visible');

    });

    it('Should display error message with unreal email and password',  () => {
        cy.visit('http://qamid.tmweb.ru/admin');
        cy.get('[for="email"] > .login__input').type('testTest@mail.ru');
        cy.get('[for="pwd"] > .login__input').type('123456789');
        cy.get('.login__button').click();
        cy.contains('Ошибка авторизации!').should('be.visible');

    });
});


describe('Movie Booking', () => {

    it("Should be possible to book", () => {
 cy.visit('http://qamid.tmweb.ru')
 cy.get('a.page-nav__day:nth-of-type(4)').click();
 cy.get('.movie').first().contains('13:00').click();
 
 const seats = require('../fixtures/seats.json')
 seats.forEach(seat => {
cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
 })
 cy.get('.acceptin-button').click();
 cy.contains('Вы выбрали билеты:').should('be.visible');
 })
    
 it("Should be impossible to book", () => {
    cy.visit('http://qamid.tmweb.ru')
    cy.get('a.page-nav__day:nth-of-type(2)').click()
    cy.get('.movie').first().contains('13:00').click();
    cy.get('.buying-scheme__wrapper > :nth-child(6) > :nth-child(2)').click();
    })
});