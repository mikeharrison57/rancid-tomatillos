import './App.css';
import React, { Component } from 'react';
import movieData from './mock-movie-data'
import Navbar from './Navbar';

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
      <Navbar />
    )
  }
}

export default App;
