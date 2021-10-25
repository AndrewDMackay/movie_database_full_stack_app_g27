
import React from "react";


const MovieReviewItem = ({user, onUserDelete}) => {


  

    return(
    <>
    <div className="movie-review-item">
        <p>{user.name}</p>
        <p>{user.review}</p>
    </div>
    </>
    )}


export default MovieReviewItem;