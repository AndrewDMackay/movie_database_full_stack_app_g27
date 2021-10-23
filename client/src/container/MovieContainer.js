import React, { useState, useEffect } from 'react'
import MovieList from "../components/main_movie_page/MovieList"
import MovieDetail from '../components/movie_detail/MovieDetail'

const MovieContainer = () => {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        getMoviesByTitle();
    });

    // searches API by movie title (hardcoded for batman for example)
    const getMoviesByTitle = function () {
        fetch(`https://www.omdbapi.com/?s=batman&apikey=30f7090a`)
            .then(res => res.json())
            .then(data => setMovies(data.Search))
    }

    // searches API by movie imdb id after one has been selected form the movie list
    const onMovieClick = function (movie) {
        fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=30f7090a`)
            .then(res => res.json())
            .then(data => setSelectedMovie(data))
    }



    return (
        <>
            <h1>This is the MovieContainer</h1>
            {!selectedMovie ? <MovieList movies={movies} onMovieClick={onMovieClick} /> : null}
            {selectedMovie ? <MovieDetail selectedMovie={selectedMovie} /> : null}
        </>
    )
}

export default MovieContainer;