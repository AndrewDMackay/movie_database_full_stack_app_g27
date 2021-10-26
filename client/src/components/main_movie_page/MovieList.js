
import React from 'react';

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
            <div>
                <h6>NOTHING FOUND..</h6>
                <p>ENTER A VALID SEARCH TERM..</p>
            </div>
        )
    }
}
}


export default MovieList;

