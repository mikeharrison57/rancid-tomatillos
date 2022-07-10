describe('main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies'})
  })

    it('should be able to visit the page and see movies', () => {
      cy.get('.MovieContainer').find('.MovieCard').should('have.length', 6)
  })
})