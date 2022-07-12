import React from 'react';
import './IndividualMovie.css'

const IndividualMovie = (props) => {
    const {
        title, backdrop_path, release_date, overview, average_rating, genres, runtime, tagline 
    } = props.movie

    const splitDate = release_date.split("-").shift()
    const roundedRating = average_rating.toFixed(2)
    const splitGenres = genres.join(", ")

    return(
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

export default IndividualMovie