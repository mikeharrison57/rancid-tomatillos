import React from 'react';

const IndividualMovie = (props) => {
    const {
        id, title, poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, runtime, tagline 
    } = props.movie

    return(
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <img src={poster_path}></img>
            <img src={backdrop_path}></img>
            <p>{release_date}</p>
            <p>{overview}</p>
            <p>{average_rating}</p>
            <p>{genres}</p>
            <p>{budget}</p>
            <p>{revenue}</p>
            <p>{runtime}</p>
            <p>{tagline}</p>
        </div>
    )

}

export default IndividualMovie