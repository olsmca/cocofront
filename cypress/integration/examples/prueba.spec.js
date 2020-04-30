/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.get Barra Buscar - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.gLFyf')
      .should('have.attr', 'title')
      .should('include', 'Busscar')
      .as('buscar')

      cy.get('.gLFyf').type('Anyelo Rabioso').visit
  })

  it('.get gmail - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get(':nth-child(1) > .gb_e')
      
  })
  

  it('.get google Apps - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.gb_B').click()
      // .should('have.attr', 'title')
      // .should('include', 'Buscar')
  })
 

})
