import React from "react";
import '../styles/MovieCard.css'

const MovieCard = (props) => {
  const { id, handleClick } = props
  return (
    <div className='MovieCard'>
      <img 
        src={props.moviePoster} 
        alt='moviePoster'
        onClick={() => handleClick(id)}
      />
      {/* <h3>{props.title}</h3> */}
    </div>
  )
}

export default MovieCard;