describe('main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies'})
  })

  it('should be able to visit the page and see movies', () => {
    cy.get('.MovieContainer').find('.MovieCard').should('have.length', 6)
  })

  // it('should contain a specific movie at index position zero', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919,', {fixture: 'individual1'})
  //   cy.get('.IndividualMovie').first().click()
  //   .find('.Title').contains('Money Plane')
  // })

  it('should throw a user friendly error when an error occurs', () => {
    cy.visit('http://localhost:3000/badurl')
    cy.get('.Error').should('contain', 'Not Found')
  })
})