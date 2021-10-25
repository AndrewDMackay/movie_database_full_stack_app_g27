
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { FaPoop } from "react-icons/fa";


const MovieListItem = ({ movie, onMovieClick }) => {

  const handleClick = function () {
    onMovieClick(movie);
  }


  return (
    <div className="movie-list-item">
      <div onClick={handleClick}>
        <div className="movie-list-item-icon"><FaPoop /></div>
        <img className="list-item-poster" src={movie.Poster} alt="" />
        <h4>{movie.Title}</h4>
        <h5>{movie.Year}</h5>
      </div>
    </div>
  )
}

export default MovieListItem;

