
import React, { useState } from 'react'

import { FaPoop } from "react-icons/fa";

import MovieReviewItem from './MovieReviewItem';


const MovieReviewList = ({ selectedMovie, loggedIn, allUsers }) => {

    const reviewList = []

    for (let user of allUsers) {
        for (let review of user.review) {
            let movieReview = {
                viewer: user.username,
                comment: review.comment,
                score: review.score,
                movieName: review.movie
            }
            reviewList.push(movieReview)
        }
    }

    const movieReviews = reviewList.filter((review) => review.movieName === selectedMovie.Title)

    const reviewNodes = movieReviews.map((review, index) => {
        return <MovieReviewItem review={review} key={index} />
    })


    return (
        <>         
            <h3>REVIEWS</h3>
            <div className="movie-review-list">
                {reviewNodes}
            </div>
        </>
    )

};


export default MovieReviewList

