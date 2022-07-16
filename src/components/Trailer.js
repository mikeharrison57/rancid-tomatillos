import React from 'react';
import '../styles/Trailer.css';

const Trailer = ({ trailerKey }) => {

    return( 
        <iframe
            className="trailer"
            width="1100"
            height="600"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
        />
    )
}   

export default Trailer;