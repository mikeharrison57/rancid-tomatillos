import React, { Component } from 'react';
import '../styles/IndividualMovie.css'
import { fetchIndvidualMovie, fetchMovieTrailer } from '../apiCalls';
import Trailer from './Trailer';
import PlayButton from '../assets/play-trailer-button.png';


class IndividualMovie extends Component {
    constructor(props) {
        super()
        this.state = {
            individualMovie: {},
            id: props.id,
            trailerKey: '',
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

    playTrailer = () => {
        fetchMovieTrailer(this.state.id)
        .then((data) => {
            if (data.videos.length) {
              return data.videos.find((video) => video.type === "Trailer");
            }
        })
        .then((trailer) => {
            if (trailer.key) {
                this.setState({ trailerKey: trailer.key });
            }
        })
        .catch((error) => {
            this.setState({error: error.message});
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
            <section className='individual-movie'>
                <header className='background-image'>
                    {this.state.trailerKey.length ? <Trailer trailerKey={this.state.trailerKey}/> : <img className='backdrop-path' src={backdrop_path}></img>}
                </header>
                <div className='button-container'>
                    {this.state.trailerKey.length ? <p></p> : <img onClick={() => this.playTrailer()} className='play-button' 
                        src={ PlayButton }
                        alt='play movie'
                    />}
                </div>
                <section className='movie-info'>
                    <article className='primary-info'>
                        {title && <p className='title'>{title}</p>}
                        {splitDate && <p className='release-date'>{splitDate}</p>}
                        {overview && <p className='overview'>{overview}</p>}
                    </article>
                    <article className='secondary-info'>
                        {roundedRating && <p className='rating'>{roundedRating} ⭐</p>}
                        {splitGenres && <p className='genres'>{splitGenres}</p>}
                        {runtime === 0 ? <p></p> : <p className='runtime'>{runtime} Mins</p>}
                        {tagline && <p className='tagline'>'{tagline}'</p>}
                    </article>
                </section>
            </section> }
            </>
            )
        }
    }

export default IndividualMovie;