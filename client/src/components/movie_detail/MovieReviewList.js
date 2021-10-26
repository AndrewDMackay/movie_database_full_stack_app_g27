
import React, { useState } from 'react'


const MovieReviewList = (({reviews, selectedMovie, loggedIn}) => {
    
    
    return(
        <div className="movie-review-list-container">
        <h5>THIS IS THE MOVIE REVIEW LIST</h5>
        {/* <ul>
        {reviews.map(review => {
            return(
                <li key={review.name}>{review.name} {review.text} </li>
            )
        })}
        </ul> */}
        </div>
    )

});


export default MovieReviewList

