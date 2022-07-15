import React, { Component } from 'react';
import '../styles/IndividualMovie.css'
import { fetchIndvidualMovie } from '../apiCalls';

class IndividualMovie extends Component {
    constructor(props) {
        super()
        this.state = {
            individualMovie: {},
            id: props.id,
            error: ''
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
        const { 
            title, 
            backdrop_path, 
            release_date, 
            overview, 
            average_rating, 
            genres, 
            runtime, 
            tagline 
        } 
        = this.state.individualMovie

        const splitDate = release_date && release_date.split('-').shift();
        const roundedRating = average_rating && average_rating.toFixed(1);
        const splitGenres = genres && genres.join(", ");

        return (
            <>
            {this.state.error ?
                <h1 className='error'>{this.state.error}</h1>
                : 
            <div className='individual-movie'>
                <header className='background-image'>
                    <img className='backdrop-path' src={backdrop_path}></img>
                </header>
                <section>
                    <article className='primary-info'>
                        <p className='title'>{title}</p>
                        <p className='release-date'>Release Date: {splitDate}</p>
                        <p className='overview'>Overview: {overview}</p>
                    </article>
                    <article className='secondary-info'>
                        <p className='rating'>Rating: {roundedRating}</p>
                        <p className='genres'>Genres: {splitGenres}</p>
                        <p className='runtime'>Runtime: {runtime} Mins</p>
                        <p className='tagline'>Tagline: {tagline}</p>
                    </article>
                </section>
            </div> }
            </>
            )
        }
    }

export default IndividualMovie