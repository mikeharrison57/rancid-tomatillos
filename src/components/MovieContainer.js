import React from 'react';
import MovieCard from './MovieCard'
import '../styles/MovieContainer.css';

const MovieContainer = (props) => {
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
    <div className='movie-container'>
      {movieCards}
    </div>
  )
};

export default MovieContainer;