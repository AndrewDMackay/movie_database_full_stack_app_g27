
import React from 'react';


const MovieListItem = ({ movie, onMovieClick }) => {

  const handleClick = function () {
    onMovieClick(movie);
  }


  return (
    <div className="movie-list-item">
      <div onClick={handleClick}>
        <img src={movie.Poster} alt="" />
        <h4>{movie.Title}</h4>
        <h5>{movie.Year}</h5>
      </div>
    </div>
  )
}

export default MovieListItem;

