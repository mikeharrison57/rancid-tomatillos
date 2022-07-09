import './App.css';
import React, { Component } from 'react';
import movieData from './mock-movie-data'
import Navbar from './Navbar';
import MovieContainer from './MovieContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    this.setState({
      movies: movieData.movies
    })
  }

  render() {
    console.log(this.state.movies)
    return (
      <div>
        <Navbar />
        <MovieContainer movies={this.state.movies} /> 
      </div>
    )
  }
}

export default App;
