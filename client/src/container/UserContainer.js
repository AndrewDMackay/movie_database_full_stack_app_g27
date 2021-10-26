
import React, { useState, useEffect } from 'react'

import UserDisplay from '../components/user_page/UserDisplay'
import UserForm from '../components/user_page/UserForm'
import UserLogin from '../components/user_page/UserLogIn'
import NavBar from '../components/NavBar'
import SearchBar from '../components/main_movie_page/SearchBar';
import { getUsers, getUser, deleteUser, postNewUser } from '../services/MovieService'


const UserContainer = () => {
    const [allUsers, setAllUsers] = useState([])
    const [loggedIn, setLoggedin] = useState(null)
    const [movies, setMovies] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        getUsers()
            .then(data => { setAllUsers(data) })
    }, [])

    const addUser = (user) => {
        const temp = allUsers.map(s => s);
        temp.push(user);
        setAllUsers(temp);
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

        // searches API by movie title, for Nav Bar..
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
                <NavBar onTitleSearched={onTitleSearched} />
            </div>
            <div className="user-container">
                <h1>THIS IS THE USER CONTAINER</h1>
                <UserLogin onLoginSubmit={onLoginSubmit} />
                <UserForm onNewUserSubmit={onNewUserSubmit} />
                <UserDisplay users={allUsers} loggedIn={loggedIn} onLoginSubmit={onLoginSubmit} onUserDelete={onUserDelete} onNewUserSubmit={onNewUserSubmit} onUserClick={onUserClick} />
            </div>
        </>
    )
}

export default UserContainer;

