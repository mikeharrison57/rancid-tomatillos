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
        </div>
    )

}

export default IndividualMovie