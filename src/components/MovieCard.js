import React from "react";
import '../styles/MovieCard.css'
import { NavLink } from 'react-router-dom';

const MovieCard = (props) => {
  const { id, handleClick } = props
  return (
    <NavLink to={`/${id}`}>
      <div className='MovieCard'>
        <img 
          src={props.moviePoster} 
          alt='moviePoster'
          // onClick={() => handleClick(id)}
        />
        {/* <h3>{props.title}</h3> */}
      </div>
    </NavLink>
  )
}

export default MovieCard;