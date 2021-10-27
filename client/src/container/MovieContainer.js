
import React, { useState, useEffect } from 'react'

import { FaPoop } from "react-icons/fa";

import MovieList from "../components/main_movie_page/MovieList";
import MovieDetail from '../components/movie_detail/MovieDetail';
import SearchBar from '../components/main_movie_page/SearchBar';
import NavBar from '../components/nav_bar/NavBar';

import UserForm from '../components/user_page/UserForm'
import UserLogin from '../components/user_page/UserLogIn'
import { getUsers, getUser, deleteUser, postNewUser, updateUser } from '../services/MovieService'
import MovieReviewForm from '../components/movie_detail/MovieReviewForm';
import RecentReviewsList from "../components/main_movie_page/RecentReviewsList";


const MovieContainer = () => {
    const [movies, setMovies] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [youtubeVideo, setYoutubeVideo] = useState(null)
    // From User Container.. 
    const [allUsers, setAllUsers] = useState([])
    const [loggedIn, setLoggedin] = useState(null)
  

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
            .then((data) => {
                setSelectedMovie(data)
                fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movie.Title}+${movie.Year}+trailer&key=AIzaSyADzRT1UT3gLjoE9EswWkVDc65LgFe6RGU`)
                    .then(res => res.json())
                    .then(videoData => setYoutubeVideo(`https://www.youtube.com/watch?v=${videoData.items[0].id.videoId}`))
            })
    }
 

    // const getMoviesByGenre = function(genre){
    //     fetch(`http://www.omdbapi.com/?t=${genre}apikey=30f7090a`)
    //     .then(res => res.json())
    //     .then(movies => setMovies(movies))
    // }


    // Added from User Container..

    useEffect(() => {
        getUsers()
            .then(data => { setAllUsers(data) })
    }, [])

    const addUser = (user) => {
        const temp = allUsers.map(s => s);
        temp.push(user);
        setAllUsers(temp);
    }
    
    const saveUserReview = (updatedUser, review) => {
        const copyUsers = [...allUsers]
        const foundUser = copyUsers.find((user) => {
            return user._id === updatedUser._id
        })
        foundUser.review.push(review)
        const index = copyUsers.indexOf(updatedUser)
        copyUsers[index] = foundUser
        setAllUsers(copyUsers)
    }

    const removeUser = (user) => {
        const temp = allUsers.map(s => s);
        let index = temp.indexOf(user);
        temp.splice(index, 1)
        setAllUsers(temp)
    }

    const onNewUserSubmit = (user) => {
        postNewUser(user).then((data) => {
            addUser(data);
        })
    }

    const onNewReviewSubmit = (review) => {
        // console.log("review", review)
        updateUser(review, loggedIn._id).then((data) => {
            saveUserReview(loggedIn, review);
        })
    }

    const onUserDelete = (id) => {
        deleteUser(id).then((data) => {
            removeUser(data);
        })
    }

    const onUserClick = function (user) {

    }

    const onLoginSubmit = (searchUser) => {
        const foundUser = allUsers.find(user => user.username === searchUser.username)
        setLoggedin(foundUser)
    }

    const onHomeClick = function () {
        setSelectedMovie(null);
    }


    return (
        <>
            <div className="main-nav-bar-container">
                <NavBar onTitleSearched={onTitleSearched} />
            </div>
            <div className="movie-container">
                <div className="logo-icon"><FaPoop /></div>
                <h1 className="home-heading">BÖGGIN JÖBBIES</h1>
                {!selectedMovie ? <h4>SEARCH BY TITLE..</h4> : null}
                <div className="main-container-search-bar">
                    {!selectedMovie ? <SearchBar onTitleSearched={onTitleSearched} /> : null}
                </div>
                {!selectedMovie ? <MovieList movies={movies} onMovieClick={onMovieClick} /> : null}
                {selectedMovie ? <MovieDetail youtubeVideo={youtubeVideo} selectedMovie={selectedMovie} onHomeClick={onHomeClick} loggedIn={loggedIn} allUsers={allUsers} /> : null}
                {selectedMovie ? <MovieReviewForm selectedMovie={selectedMovie} onNewReviewSubmit={onNewReviewSubmit} loggedIn={loggedIn}/> : null}
            </div>
            <div className="user-container">
                <RecentReviewsList allUsers={allUsers} />
            </div>
            <div className="user-container">
                <h2>USERS</h2>
                {!loggedIn ?<UserLogin onLoginSubmit={onLoginSubmit} /> : null}
                <UserForm onNewUserSubmit={onNewUserSubmit} />
            </div>
        </>
    )

}

export default MovieContainer;

