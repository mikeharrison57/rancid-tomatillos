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
                <h1 className='Error'>{this.state.error}</h1>
                : 
            <div className='IndividualMovie'>
                <div className='BackgroundImage'>
                    <img src={backdrop_path}></img>
                </div>
                <section>
                    <article className='PrimaryInfo'>
                        <p className='Title'>{title}</p>
                        <p className='ReleaseDate'>Release Date: {splitDate}</p>
                        <p className='Overview'>Overview: {overview}</p>
                    </article>
                    <article className='SecondaryInfo'>
                        <p className='Rating'>Rating: {roundedRating}</p>
                        <p className='Genres'>Genres: {splitGenres}</p>
                        <p className='Runtime'>Runtime: {runtime} Mins</p>
                        <p className='Tagline'>Tagline: {tagline}</p>
                    </article>
                </section>
            </div> }
            </>
            )
        }
    }

export default IndividualMovie