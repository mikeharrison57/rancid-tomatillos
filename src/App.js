import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieContainer from './components/MovieContainer';
import IndividualMovie from './components/IndividualMovie';
import { fetchMovieData, fetchIndvidualMovie } from './apiCalls';
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchMovieData()
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        this.setState({error: error.message})
    })
  }

  // handleClick = (id) => {
  //   fetchIndvidualMovie(id)
  //     .then(data => this.setState({movieSelected: true,  individualMovie:data.movie}))
  //     .catch(error => {
  //       this.setState({error: error.message})
  //   })
  // }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.error ?
        <h1 className='Error'>{this.state.error}</h1>
        : 
        <Route exact path='/' render={ () => 
          <MovieContainer 
            movies={this.state.movies} 
            handleClick={this.handleClick}
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