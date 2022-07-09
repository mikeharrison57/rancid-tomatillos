import React from 'react';
import MovieCard from './MovieCard'

const MovieContainer = (props) => {
  const { movies } = props;
  const movieCards = movies[0].map((movie) => {
    return (
      <MovieCard 
        id={movie.id}
        key={movie.id} 
        moviePoster={movie.poster_path} 
        title={movie.title} 
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
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