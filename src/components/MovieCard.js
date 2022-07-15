import React from "react";
import '../styles/MovieCard.css'
import { NavLink } from 'react-router-dom';

const MovieCard = (props) => {
  const { id, handleClick } = props
  return (
    <NavLink to={`/${id}`}>
      <div className='movie-card'>
        <img 
          src={props.moviePoster} 
          alt='moviePoster'
          // onClick={() => handleClick(id)}
        />
      </div>
    </NavLink>
  )
}

export default MovieCard;