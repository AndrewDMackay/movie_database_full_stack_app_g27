
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserDisplay from '../components/user_page/UserDisplay'
import UserForm from '../components/user_page/UserForm'
import UserLogin from '../components/user_page/UserLogIn'
import { getUsers, getUserByName, deleteUser, postNewUser } from '../services/MovieService'


const UserContainer = () => {
    const [allUsers, setAllUsers] = useState([])
    const [loggedIn, setLoggedin] = useState("")

    useEffect(() => {
        getUsers()
        .then(data => {setAllUsers(data)})
    },[])

    const onNewUserSubmit = (user) => {
        postNewUser(user)
    }

    const onUserDelete= (id) => {
        deleteUser(id)
    }

    const onUserClick = function (user) {

    }

    const onLoginSubmit = (user) => {
        // if ((getUserByName(user.username)).password === user.password && ((getUserbyPassword(user.password) === user.username))){
            setLoggedin(getUserByName(user.username))
        // }else{
            console.log(getUserByName(user.username))
            console.log(user);
            // setLoggedin("Incorrect Username or Password")
        // }

    }

    return (
        <>
            <div className="user-container">
                <h1>THIS IS THE USER CONTAINER</h1>
                <UserLogin onLoginSubmit={onLoginSubmit}/>
                <UserForm onNewUserSubmit={onNewUserSubmit} />
                <UserDisplay users={allUsers} loggedIn={loggedIn} onLoginSubmit={onLoginSubmit} onUserDelete={onUserDelete} onNewUserSubmit={onNewUserSubmit} onUserClick={onUserClick}/>
            </div>
        </>
    )
}

export default UserContainer;

