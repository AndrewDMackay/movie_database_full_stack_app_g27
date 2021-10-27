import React from 'react';

import { FaPoop } from "react-icons/fa";


const MovieReviewItem = ({ review }) => {


    const displayRatingIcons = (review) => {
        if(review.score === 1) {
            return (
            <div className="movie-review-item-rating-icons">
                <div><FaPoop /></div>
             </div>
            )
        } else if(review.score === 2) {
            return (
                <div className="movie-review-item-rating-icons">
                    <div><FaPoop /></div><div><FaPoop /></div>
                 </div>
                )
        }  else if(review.score === 3) {
            return (
                <div className="movie-review-item-rating-icons">
                    <div><FaPoop /></div><div><FaPoop /></div><div><FaPoop /></div>
                 </div>
                )
        }   else if(review.score === 4) {
            return (
                <div className="movie-review-item-rating-icons">
                    <div><FaPoop /></div><div><FaPoop /></div><div><FaPoop /></div><div><FaPoop /></div>
                 </div>
                )
            }  else if(review.score === 5) {
                return (
                    <div className="movie-review-item-rating-icons">
                        <div><FaPoop /></div><div><FaPoop /></div><div><FaPoop /></div><div><FaPoop /></div><div><FaPoop /></div>
                    </div>
                    )
        }  else {
            return (
                <p>JÖBBIE RATING ERROR</p>
            )
        }
    };


    return (

        <div className="movie-review-item">
            <div className="movie-review-item-icon"><FaPoop /></div>
            <h6>USER</h6>
            <p>{review.viewer}</p>
            <h6>REVIEW</h6>
            <p>{review.comment}</p>
            <h6>SCORE</h6>
            <p>{review.score}</p>
            <h6>JÖBBIE RATING</h6>
            <p>{displayRatingIcons(review)}</p>
        </div>
    )
}

export default MovieReviewItem;

