
import React, { useState, useEffect } from 'react'
import UserDisplay from '../components/user_page/UserDisplay'
import UserForm from '../components/user_page/UserForm'
import UserLogin from '../components/user_page/UserLogIn'
import { getUsers, getUser, deleteUser, postNewUser } from '../services/MovieService'


const UserContainer = () => {
    const [allUsers, setAllUsers] = useState([])
    const [loggedIn, setLoggedin] = useState(null)

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

    return (
        <>
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

