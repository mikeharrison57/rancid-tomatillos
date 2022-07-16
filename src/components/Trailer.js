import React from 'react';
import '../styles/Trailer.css';

const Trailer = () => {

    return(
        this.props.key && (
            <iframe
              className="trailer"
              width="840"
              height="691.74"
              src={`https://www.youtube.com/embed/${this.props.key}`}
              title="YouTube video player"
              frameBorder="0"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
    )
    )
}

export default Trailer;