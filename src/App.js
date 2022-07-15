import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieContainer from './components/MovieContainer';
import IndividualMovie from './components/IndividualMovie';
import { fetchMovieData } from './apiCalls';
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      loading: 'LOADING...'
    }
  }

  componentDidMount = () => {
    fetchMovieData()
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        this.setState({error: error.message})
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.error ?
        <h1 className='error'>{this.state.error}</h1>
        : 
        <Route exact path='/' render={ () => 
          <MovieContainer 
            movies={this.state.movies}
          />}/> }
        <Route exact path="/:id" render={({ match }) => {
           return <IndividualMovie id={match.params.id} />
          }}
        /> 
      </div>
    )
  }
}

export default App;