import './App.css';
import React, { Component } from 'react';
import movieData from './mock-movie-data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [movieData]
    }
  }

  render() {
    console.log(this.state.movies)
    return (
      <h2>Michael</h2>
    )
  }
}

export default App;
