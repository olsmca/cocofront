/// <reference types="Cypress" />

context('Aliasing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })
  
    it('.get() - find cocoApp img on a DOM element', () => {
        // https://on.cypress.io/focus
        cy.get('body').find('img')
          .as('imgCoco')

        cy.get('@imgCoco')
          .should('have.attr', 'alt')
          .should('include', 'CocoApp Logo')
      })
  })
  