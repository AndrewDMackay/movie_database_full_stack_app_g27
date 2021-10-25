
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { FaPoop } from "react-icons/fa";

import MovieList from "../components/main_movie_page/MovieList";
import MovieDetail from '../components/movie_detail/MovieDetail';
import SearchBar from '../components/main_movie_page/SearchBar';
import NavBar from '../components/NavBar';


const MovieContainer = () => {
    const [movies, setMovies] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState(null)


    // searches API by movie title
    const onTitleSearched = function (title) {
        // setSelectedMovie(null)
        setMovies([])
        fetch(`https://www.omdbapi.com/?s=${title}&apikey=30f7090a`)
            .then(res => res.json())
            .then(data => setMovies(data.Search))
    }


    // searches API by movie imdb id after one has been selected form the movie list
    const onMovieClick = function (movie) {
        fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=30f7090a`)
            .then(res => res.json())
            .then(data => setSelectedMovie(data))
    }


    // const getMoviesByGenre = function(genre){
    //     fetch(`http://www.omdbapi.com/?t=${genre}apikey=30f7090a`)
    //     .then(res => res.json())
    //     .then(movies => setMovies(movies))
    // }

    

    const onHomeClick = function(){
        setSelectedMovie(null);
    }


    return (
        <Router>
          <>
            <div className="main-nav-bar-container">
                <NavBar onTitleSearched={onTitleSearched}/>
            </div>
          </>
          <>
            <div className="movie-container">
                <div className="logo-icon"><FaPoop /></div>
                <h1>THIS IS THE MOVIE CONTAINER</h1>
                {!selectedMovie ?<h4>THIS IS THE SEARCH BAR..</h4> : null}
                <div className="main-container-search-bar">
                {!selectedMovie ?<SearchBar onTitleSearched={onTitleSearched} /> : null}
                </div>
                {!selectedMovie ? <MovieList movies={movies} onMovieClick={onMovieClick} /> : null}
                {selectedMovie ? <MovieDetail selectedMovie={selectedMovie} onHomeClick={onHomeClick} /> : null}
            </div>
          </>
        </Router>
    )

}

export default MovieContainer;

