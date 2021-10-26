
import React, { useState } from 'react'

import { FaPoop } from "react-icons/fa";

import MovieReviewItem from './MovieReviewItem';


const MovieReviewList = ({ selectedMovie, loggedIn, allUsers }) => {


    const reviewNodes = allUsers.map((user, index) => {


        const filteredReviewItems = reviewNodes.filter((review) => review.movie === selectedMovie.Title)

        return <MovieReviewItem user={user} key={index} />
    })

    return (
        <>
            <div className="movie-review-list-container">
                <h3>THIS IS THE MOVIE REVIEW LIST</h3>
                {/* {reviewNodes} */}
            </div>
        </>
    )

};


export default MovieReviewList

