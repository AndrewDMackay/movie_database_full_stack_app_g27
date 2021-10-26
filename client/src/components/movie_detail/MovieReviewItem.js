

import React from 'react';

import { FaPoop } from "react-icons/fa";


const MovieReviewItem = ({ }) => {


  return (
    <div className="movie-review-item">
      <div onClick={handleClick}>
        <div className="movie-review-item-icon"><FaPoop /></div>
        <h4>{movie.Title}</h4>
        <h5>{movie.Year}</h5>
      </div>
    </div>
  )
}

export default MovieReviewItem;