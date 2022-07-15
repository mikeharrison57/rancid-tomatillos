describe('all maovies page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'allmovies'})
  })

  it('should display a title of Rancid Tomatillos', () => {
    cy.get('h1').first().should('have.text', 'Rancid Tomatillos')
  })

  it('should be able to display all movies when a user visits the app', () => {
    cy.get('.MovieContainer').find('.MovieCard').should('have.length', 6)
  })

  // it('should be able to display a single movies details when a user clicks on a specific movie', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919,', {fixture: 'individualmovie1'})
  //   cy.get('.MovieContainer').find('.MovieCard').first().click()
  //   cy.get('.Title').contains('Money Plane')
  //   cy.get('.Genres').contains('Action')
  // })

  // it('should not display any other movies details when an individual movie is displayed, (sad path)', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919,', {fixture: 'individualmovie1'})
  //   cy.get('.MovieContainer').find('.MovieCard').first().click().wait(1000)
  //   cy.get('.Title').should('not.contain', 'Mulan')
  //   cy.get('.Runtime').should('not.contain', '115')
  // })
  
  it('should have a way to return to the main view of all movies after clicking on an individual movie', () => {
    cy.visit('http://localhost:3000/337401').wait(1000)
    cy.get('.HomeButton').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  
  // it('should update the url to reflect a movies unique id when a user clicks on a movie', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get('.MovieContainer').find('.MovieCard').last().click().wait(1000)
  //   cy.url().should('eq', 'http://localhost:3000/726739')
  // })

  it('should be able to navigate using the forward and back arrows', () => {
    cy.visit('http://localhost:3000/718444').wait(1000)
    cy.go('back')
    cy.get('.MovieContainer').find('.MovieCard').should('have.length', 6)
    cy.go('forward').wait(1000)
    cy.get('.Title').should('contain', 'Rogue')
    cy.get('.Genres').should('contain', 'Action')
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