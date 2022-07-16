describe('individual movie page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'allmovies'})
    })

    it('should still display a title of Rancid Tomatillos', () => {
        cy.visit('http://localhost:3000/337401').wait(1000)
        cy.get('h1').first().should('have.text', 'Rancid Tomatillos')
      })

      it('should be able to display a single movies details when a user clicks on a specific movie', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919,', {fixture: 'individualmovie1'})
        cy.get('.movie-container').find('.movie-card').first().click()
        cy.get('.title').contains('Money Plane')
        cy.get('.backdrop-path').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')
        cy.get('.release-date').contains('2020')
        cy.get('.genres').contains('Action')
      })

      it('should not display any other movies details when an individual movie is displayed, (sad path)', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919,', {fixture: 'individualmovie1'})
        cy.get('.movie-container').find('.movie-card').first().click().wait(1000)
        cy.get('.title').should('not.contain', 'Mulan')
        cy.get('.runtime').should('not.contain', '115')
      })

      it('should update the url to reflect a movies unique id when a user clicks on a movie', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.movie-container').find('.movie-card').last().click().wait(1000)
        cy.url().should('eq', 'http://localhost:3000/726739')
      })

      it('should be able to display a single movie trailer when a user clicks on a specific movie', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739,', {fixture: 'individualmovie2'})
        cy.get('.movie-container').find('.movie-card').last().click().wait(1000)
        cy.get('.play-button').click()
        cy.get('.trailer').should('have.attr', 'src').should('include', `https://www.youtube.com/embed/ct5mQYE3Xk4?autoplay=1`)
      })

      it('should return an error message if a network request fails', () => {
        cy.visit('http://localhost:3000/694919')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            statusCode: 404,
            body: {
              error: 'Cannot GET /api/v2/movies/694919'
            }
          })
          .get('.error').should('have.text', 'Not Found')
      })
    
      it('should return an error message if there is an internal server error', () => {
        cy.visit('http://localhost:3000/694919')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            statusCode: 500,
            body: {
              error: 'Cypress forced 500'
            }
          })
          .get('.error').should('have.text', 'Internal Server Error')
      })
      
})