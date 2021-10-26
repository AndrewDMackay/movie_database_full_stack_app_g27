
import React, { useState } from 'react'

import { FaPoop } from "react-icons/fa";

import MovieReviewItem from './MovieReviewItem';


const MovieReviewList = ({ selectedMovie, loggedIn, allUsers }) => {

    const reviewList = []

    for (let user of allUsers) {
        for (let review of user.review) {
            reviewList.push(review)
        }
    }

    const movieReviews = reviewList.filter((review) => review.movie === selectedMovie.Title)

    const reviewNodes = movieReviews.map((review, index) => {
        return <MovieReviewItem review={review} key={index} />
    })


    return (
        <>
            <div className="movie-review-list-container">
                <h3>THIS IS THE MOVIE REVIEW LIST</h3>
                {reviewNodes}
            </div>
        </>
    )

};


export default MovieReviewList

