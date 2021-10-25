
import React from 'react';

import MovieListItem from "./MovieListItem"


const MovieList = ({ movies, onMovieClick }) => {

    const moviesNodes = movies.map((movie, index) => {
        return <MovieListItem movie={movie} key={index} onMovieClick={onMovieClick} />
    })

    return (
        <div className="movie-list-container">
            {moviesNodes}
        </div>
    )
}

export default MovieList;

