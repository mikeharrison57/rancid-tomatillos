describe('main page', () => {
  it('should be able to visit the page and see movies', () => {
    cy.visit('http://localhost:3000/').wait(1000)
    cy.get('.MovieContainer').find('.MovieCard').should('have.length', 40)
  })
})