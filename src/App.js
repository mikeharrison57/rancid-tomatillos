import './App.css';
import React, { Component } from 'react';
import Navbar from './Navbar';
import MovieContainer from './MovieContainer';
import IndividualMovie from './IndividualMovie';

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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw Error(res.statusText)
        })
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  handleClick = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw Error(res.statusText)
      })
      .then(data => this.setState({movieSelected: true,  individualMovie:data.movie}))
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  render() {
    console.log(this.state.error)
    return (
      <div>
        <Navbar />
        {this.state.error ?
        <h1>{this.state.error}</h1> 
        :
        this.state.movieSelected ?
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