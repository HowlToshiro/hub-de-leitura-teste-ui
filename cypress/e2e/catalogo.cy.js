/// <reference types="cypress"/>

describe('Funcionalidade: Catálogo de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(3) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true})
    });

    it('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
        cy.get('#global-alert-container').should('contain', '1984')
    });
    it('Deve clicar no ultimo botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
        cy.get('#global-alert-container').should('contain', 'O Alquimista')
    });
    it('Deve clicar no terceiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        cy.get('#global-alert-container').should('contain', 'A Divina Comédia')
    });
    it('Deve clicar no terceiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    });    
    it('Deve clicar no nome do livro e direcionar para a página do livro', () => {
        cy.contains('A Metamorfose').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso')
    });

});