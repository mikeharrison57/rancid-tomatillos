describe('main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies'})
  })

  it('displays a title of Rancid Tomatillos', () => {
    cy.get('h1').first().should('have.text', 'Rancid Tomatillos')
  })

  it('should be able to visit the page and see all movies', () => {
    cy.get('.MovieContainer').find('.MovieCard').should('have.length', 6)
  })

  it('should be able to click on a single movie for more detailed information', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919,', {fixture: 'individual1'})
    cy.get('.MovieContainer').find('.MovieCard').first().click()
    cy.get('.Title').contains('Money Plane')
    cy.get('.Genres').contains('Action')
  })

  it('should return an error message if a network request fails', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404,
        body: {
          error: 'Cannot GET /api/v2/movies'
        }
      })
      .get('.Error').should('have.text', 'Not Found')
  })

  it('should return an error message if there is an internal server error', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500,
        body: {
          error: 'Cypress forced 500'
        }
      })
      .get('.Error').should('have.text', 'Internal Server Error')
  })

})