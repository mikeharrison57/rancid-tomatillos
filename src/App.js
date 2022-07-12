import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieContainer from './components/MovieContainer';
import IndividualMovie from './components/IndividualMovie';
import { fetchMovieData, fetchIndvidualMovie } from './apiCalls';
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieSelected: false,
      error: '',
      individualMovie: {}
    }
  }

  componentDidMount = () => {
    fetchMovieData()
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        this.setState({error: error.message})
    })
  }

  handleClick = (id) => {
    fetchIndvidualMovie(id)
      .then(data => this.setState({movieSelected: true,  individualMovie:data.movie}))
      .catch(error => {
        this.setState({error: error.message})
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        {/* {this.state.error ?
        <h1 className='Error'>{this.state.error}</h1> 
        :
        this.state.movieSelected ?
        <IndividualMovie movie={this.state.individualMovie} />
        : */}
        <Route path='/' render={ () => <MovieContainer 
          movies={this.state.movies} 
          handleClick={this.handleClick}
        />  } />
      </div>
    )
  }
}

export default App;