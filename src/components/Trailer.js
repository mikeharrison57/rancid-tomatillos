import React from 'react';
import '../styles/Trailer.css';

const Trailer = ({ trailerKey }) => {

    return( 
            <iframe
              className="trailer"
              width="1100"
              height="600"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              frameBorder="0"
              //allow="picture-in-picture"
              //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
    )
}   

export default Trailer;