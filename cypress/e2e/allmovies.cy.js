describe('all maovies page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'allmovies'})
  })

  it('should display a title of Rancid Tomatillos', () => {
    cy.get('h1').first().should('have.text', 'Rancid Tomatillos')
  })

  it('should be able to display all movies when a user visits the app', () => {
    cy.get('.movie-container').find('.movie-card').should('have.length', 6)
  })

  it('should have a way to return to the main view of all movies after clicking on an individual movie', () => {
    cy.visit('http://localhost:3000/337401').wait(1000)
    cy.get('.home-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should be able to navigate using the forward and back arrows', () => {
    cy.visit('http://localhost:3000/718444').wait(1000)
    cy.go('back')
    cy.get('.movie-container').find('.movie-card').should('have.length', 6)
    cy.go('forward').wait(1000)
    cy.get('.title').should('contain', 'Rogue')
    cy.get('.genres').should('contain', 'Action')
  })

  it('should return an error message if a network request fails', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404,
        body: {
          error: 'Cannot GET /api/v2/movies'
        }
      })
      .get('.error').should('have.text', 'Not Found')
  })

  it('should return an error message if there is an internal server error', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500,
        body: {
          error: 'Cypress forced 500'
        }
      })
      .get('.error').should('have.text', 'Internal Server Error')
  })
  
})