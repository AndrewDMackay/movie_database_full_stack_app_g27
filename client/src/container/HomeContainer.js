
import React, { useState } from 'react'

import { FaPoop } from "react-icons/fa";

import NavBarNoSearch from '../components/nav_bar/NavBarNoSearch';


const HomeContainer = () => {
    const [movies, setMovies] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState(null)


    // searches API by movie title
    const onTitleSearched = function (title) {
        setSelectedMovie(null)
        setMovies([])
        fetch(`https://www.omdbapi.com/?s=${title}&apikey=30f7090a`)
            .then(res => res.json())
            .then(data => {
                    const filteredMovies = data.Search?.filter((movie) => movie.Type === "movie")
                    setMovies(filteredMovies)
            })
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



    const onHomeClick = function () {
        setSelectedMovie(null);
    }


    return (
        <>
            <div className="main-nav-bar-container">
                <NavBarNoSearch />
            </div>
            <div className="home-container">
                <h1 className="home-heading">BÖGGIN JÖBBIES</h1>
                <div className="home-logo-icon"><FaPoop /></div>
                <div className="home-small-logo-icon"><FaPoop /></div>
            </div>
        </>
    )

}

export default HomeContainer;

