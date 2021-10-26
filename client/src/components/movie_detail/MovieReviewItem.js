

import React from 'react';

import { FaPoop } from "react-icons/fa";


const MovieReviewItem = ({ review }) => {


  return (
    <div className="movie-review-item-container">
      <div className="movie-review-item">
        <div className="movie-review-item-icon"><FaPoop /></div>
        <h4>THIS IS THE MOVIE REVIEW ITEM</h4>
        <p>User: {review.viewer}</p>
        <p>Comment: {review.comment}</p>
        <p>Score: {review.score}</p>
      </div>
    </div>
  )
}

export default MovieReviewItem;