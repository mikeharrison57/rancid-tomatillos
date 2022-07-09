import React from 'react';
import MovieCard from './MovieCard'
import './MovieContainer.css';

const MovieContainer = (props) => {
  console.log(props);
  const { movies, handleClick } = props;

  const movieCards = movies.map((movie) => {
    return (
      <MovieCard 
        id={movie.id}
        key={movie.id} 
        moviePoster={movie.poster_path} 
        title={movie.title} 
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
        handleClick={handleClick}
      />
    )
  })
  return (
    <div className='MovieContainer'>
      {movieCards}
    </div>
  )
};

export default MovieContainer;