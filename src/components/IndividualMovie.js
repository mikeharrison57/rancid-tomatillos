import React, { Component } from 'react';
import '../styles/IndividualMovie.css'
import { fetchIndvidualMovie } from '../apiCalls';

class IndividualMovie extends Component {
    constructor(props) {
        console.log(props)
        super()
        this.state = {
            individualMovie: {},
            movieSelected: false,
            id: props.id
        }
    }

    componentDidMount = () => {
        fetchIndvidualMovie(this.state.id)
        .then(data => this.setState({movieSelected: true,  individualMovie:data.movie}))
        .catch(error => {
          this.setState({error: error.message})
      })
    }

    render() {
        // const {
        //     id, 
        //     title, 
        //     backdrop_path, 
        //     release_date, 
        //     overview, 
        //     average_rating, 
        //     genres, 
        //     runtime, 
        //     tagline 
        // } 
        // = this.state.individualMovie
        // console.log(this.state.individualMovie)
        
        // const splitDate = release_date.split("-").shift()
        // const roundedRating = average_rating.toFixed(2)
        // const splitGenres = genres.join(", ")

        return (
            <div className='IndividualMovie'>
                <div className='BackgroundImage'>
                    <img src={this.state.individualMovie.backdrop_path}></img>
                </div>
                <section>
                    <article className='PrimaryInfo'>
                        <p className='Title'>{this.state.individualMovie.title}</p>
                        <p className='ReleaseDate'>Release Date: {this.state.individualMovie.release_date}</p>
                        <p className='Overview'>Overview: {this.state.individualMovie.overview}</p>
                    </article>
                    <article className='SecondaryInfo'>
                        <p className='Rating'>Rating: {this.state.individualMovie.average_rating}</p>
                        <p className='Genres'>Genres: {this.state.individualMovie.genres}</p>
                        <p className='Runtime'>Runtime: {this.state.individualMovie.runtime} Mins</p>
                        <p className='Tagline'>Tagline: {this.state.individualMovie.tagline}</p>
                    </article>
                </section>
            </div>
            )
        }
    }

export default IndividualMovie