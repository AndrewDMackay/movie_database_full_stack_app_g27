
import React from 'react';

import { FaPoop } from "react-icons/fa";

import MovieListItem from "./MovieListItem"


const MovieList = ({ movies, onMovieClick }) => {

    if(movies === null) {

    // Prior to any search..

    return(
        ""
    )
    } else {

    // Logic for post search, if objects are found..

    if(movies){

    const moviesNodes = movies.map((movie, index) => {
        return <MovieListItem movie={movie} key={index} onMovieClick={onMovieClick} />
    })

    return (
        <div className="movie-list-container">
            {moviesNodes}
        </div>
    )

    // If objects are failed to be found..
    
    } else {
        return(
            <div className="search-bar-error-message">
                <div className="movie-search-error-icon">
                <FaPoop />
                </div>
                <h5>JÖBBIE SEARCH FAILED..</h5>
                <h6>ENTER A VALID SEARCH TERM..</h6>
            </div>
        )
    }
}
}


export default MovieList;

