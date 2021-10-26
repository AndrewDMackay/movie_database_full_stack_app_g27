

import React from 'react';

import { FaPoop } from "react-icons/fa";


const MovieReviewItem = ({ }) => {


  return (
    <div className="movie-review-item-container">
      <div className="movie-review-item">
        <div className="movie-review-item-icon"><FaPoop /></div>
        <h4>THIS IS THE MOVIE REVIEW ITEM</h4>
      </div>
    </div>
  )
}

export default MovieReviewItem;