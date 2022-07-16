const fetchMovieData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(res => {
    if (res.ok) {
      return res.json()
  }
    throw Error(res.statusText)
  })
}

const fetchIndvidualMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
      throw Error(res.statusText)
  }) 
}

const fetchMovieTrailer = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
        throw Error(res.statusText)
    })
}

export { fetchMovieData, fetchIndvidualMovie, fetchMovieTrailer };