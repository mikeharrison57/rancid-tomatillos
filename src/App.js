import './App.css';
import React, { Component } from 'react';
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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => this.setState({movies: data.movies}))
  }

  handleClick = (id) => {
    this.setState({  
      movieSelected: true,
      individualMovie: movie.movie
   })
  }

  render() {
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
