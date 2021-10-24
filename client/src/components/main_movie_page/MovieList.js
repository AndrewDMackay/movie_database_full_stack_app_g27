
import React from 'react';
import MovieListItem from "./MovieListItem"

const MovieList = ({ movies, onMovieClick }) => {

    const moviesNodes = movies.map((movie, index) => {
        return <MovieListItem movie={movie} key={index} onMovieClick={onMovieClick} />
    })

    return (
        <div className="flexbox">
            {moviesNodes}
        </div>
    )
}

export default MovieList;

