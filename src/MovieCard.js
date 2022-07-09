import React from "react";
import './MovieCard.css'

const MovieCard = (props) => {

  const { id, handleClick } = props

  // const handleClick = props.handleClick

  return (
    <div>
      <img src={props.moviePoster} alt='moviePoster'
            onClick={() => handleClick(id)}
      />
      <h3>{props.title}</h3>
      
    </div>
  )
}

export default MovieCard;