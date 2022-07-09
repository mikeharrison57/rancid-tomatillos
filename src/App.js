import './App.css';
import React, { Component } from 'react';
import movieData from './mock-movie-data'
import Navbar from './Navbar';
import MovieContainer from './MovieContainer';
import IndividualMovie from './IndividualMovie';
import movie from './mock-individual-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieSelected: false,
      individualMovie: {}
    }
  }

  componentDidMount = () => {
    this.setState({
      movies: movieData.movies
    })
  }

  handleClick = (id) => {
    console.log(id)
    this.setState({  
      movieSelected: true,
      individualMovie: movie.movie
   })
  }

  // findIndividualMovie = () => {
  //   this.state.movies
  // }

  render() {
    console.log(this.state.movies)
    console.log(movie.movie)
    return (
      <div>
        <Navbar />
        {this.state.movieSelected ?
        <IndividualMovie movie={this.state.individualMovie} />
        :
        <MovieContainer 
        movies={this.state.movies} 
        handleClick={this.handleClick}
        
        /> 
        }
      </div>
    )
  }
}

export default App;
