import React from "react";

const MovieCard = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.moviePoster} alt='moviePoster'/>
      <h3>{props.title}</h3>
    </div>
  )
}

export default MovieCard;