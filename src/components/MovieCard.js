import React from "react";
import '../styles/MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { id } = props
  return (
    <Link to={`/${id}`}>
      <div className='movie-card'>
        <img 
          src={props.moviePoster} 
          alt='moviePoster'
        />
      </div>
    </Link>
  )
}

export default MovieCard;