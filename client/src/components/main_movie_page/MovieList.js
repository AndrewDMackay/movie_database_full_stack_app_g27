
import React from 'react';

import MovieListItem from "./MovieListItem"


const MovieList = ({ movies, onMovieClick }) => {

    if(movies){

    const moviesNodes = movies.map((movie, index) => {
        return <MovieListItem movie={movie} key={index} onMovieClick={onMovieClick} />
    })

    return (
        <div className="movie-list-container">
            {moviesNodes}
        </div>
    )
    
    } else {
        return(
            <h5>PLEASE ENTER A VALID SEARCH TERM..</h5>
        )
    }
}

export default MovieList;

