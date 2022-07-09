import React from 'react';
import './IndividualMovie.css'

const IndividualMovie = (props) => {
    const {
        id, title, poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, runtime, tagline 
    } = props.movie

    return(
        <div className='IndividualMovie'>
            {/* <p>{id}</p> */}
            <p>{title}</p>
            {/* <img src={poster_path}></img> */}
            <div className='BackgroundImage'>
                <img src={backdrop_path}></img>
            </div>
            <p>Release Date: {release_date}</p>
            <p>Overview: {overview}</p>
            <p>Rating: {average_rating}</p>
            <p>Genres: {genres}</p>
            {/* <p>{budget}</p>
            <p>{revenue}</p> */}
            <p>Runtime: {runtime}</p>
            <p>Tagline: {tagline}</p>
        </div>
    )

}

export default IndividualMovie