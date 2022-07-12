import React, { Component } from 'react';
import '../styles/IndividualMovie.css'
// import { fetchIndvidualMovie } from './apiCalls';

class IndividualMovie extends Component {
    constructor(props) {
        console.log(props)
        super()
        this.state = {
            individualMovie: {},
            id: props.id   
        }
    }

    componentDidMount = () => {
        console.log('didMount')
        this.state.id && 
            fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
                .then(res => res.json())
                .then((data) => {
                    this.setState({individualMovie: data.movie})
            })
        
    }

    render() {
        console.log(this.state.id)
        const {
            id, 
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

        const splitDate = release_date.split("-").shift()
        const roundedRating = average_rating.toFixed(2)
        const splitGenres = genres.join(", ")

        return (
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
            </div>
            )
        }
    }

export default IndividualMovie