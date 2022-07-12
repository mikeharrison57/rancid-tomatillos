import React from 'react';
import './IndividualMovie.css'

const IndividualMovie = (props) => {
    const {
        id, title, poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, runtime, tagline 
    } = props.movie

    const splitDate = release_date.split("-").shift()
    const roundedRating = average_rating.toFixed(2)
    const splitGenres = genres.join(", ")

    return(
        <div className='IndividualMovie'>
            {/* <p>{id}</p> */}
            {/* <img src={poster_path}></img> */}
            <div className='BackgroundImage'>
            <img src={backdrop_path}></img>
            </div>
            <p className='Title'>{title}</p>
            <p>Release Date: {splitDate}</p>
            <p>Overview: {overview}</p>
            <p>Rating: {roundedRating}</p>
            <p className='Genres'>Genres: {splitGenres}</p>
            {/* <p>{budget}</p>
            <p>{revenue}</p> */}
            <p>Runtime: {runtime}</p>
            <p>Tagline: {tagline}</p>
        </div>
    )

}

export default IndividualMovie