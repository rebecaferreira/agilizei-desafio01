let Chance = require('chance')
let chance = new Chance()

describe('Cadastro', () => {
    
    it('Cadastro de um novo usuário', () => {
        cy.visit('http://automationpractice.com');
        cy.get('.login').click()
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender2').check()
        cy.get('#customer_firstname').type('Rebeca')
        cy.get('#customer_lastname').type('Ferreira')
        cy.get('#passwd').type('Alo@123456')
        cy.get('#days').select('24')
        cy.get('#months').select('November')
        cy.get('#years').select('1997')
        cy.get('#company').type('Venturus')
        cy.get('#address1').type('Times Square')
        cy.get('#city').type('New York')
        cy.get('#id_state').select('New York', { force: true })
        cy.get('#postcode').type('10036')
        cy.get('#phone').type('646-223-4000')
        cy.get('#alias').type(chance.email())
        cy.get('#submitAccount > span').click()
        cy.get('.info-account').should('contain', 'Welcome to your account')

    });

});